import Header from "../../component/Layout/Header";
import {
  Wrapper,
  Container,
  Icon,
} from "../../component/Layout/LayoutComponents";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import nullPhoto from "../../assets/Rectangle.png";
import { Photo, PhotosBar } from "../../component/shop/TagsBar";
import { useEffect, useState } from "react";
import star from "../../assets/Star.png";
import starOn from "../../assets/StarOn.png";
import { PopupModal } from "../../component/PopupModel/PopupModal";
import GoodJobWindow from "../../component/PopupModel/GoodJobWindow";
import { useNavigate, useParams } from "react-router-dom";
import SuggestTag from "./SuggestTag";
import {
  Section,
  Input,
  PhotoAddLabel,
  BtnSection,
  RatingSection,
  RatingText,
  Star,
  HintText,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../utils/redux/store";
import { fetchTagsData } from "../../utils/redux/tagList/slice";
import { useForm, useWatch } from "react-hook-form";
import { PostCommitForm } from "../../type/formType";
import { postCommit } from "../../apis/postCommit";
import validateImageFile from "../../hooks/validateImageFile";
import { FieldError } from "../EditProfile/styled";
import { postCommentsRepeat } from "../../apis/postCommentsRepeat";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { commentPicture } from "../../constants/srcPaths";
import Spinner from "../../component/Placeholder/Spinners";

function PostComment() {
  const navigate = useNavigate();
  const { id } = useParams();
  //RTK取得TAG
  const dispatch: Dispatch = useDispatch();
  const cityTags = useSelector((state: RootState) => state.tags.cityTags);
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  const errorMessage = useSelector((state: RootState) => state.tags.error);
  const token = useSelector((state: RootState) => state.auth.token);
  const verifyAuth = useAuthVerify(token);
  //控制彈跳式窗
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTagOpen, setIsModalTagOpen] = useState(false);
  const [isModalPointOpen, setModalPointOpen] = useState(false);
  const [isDisable, setDisable] = useState(false);
  const [isReviewed, setReviewed] = useState(false); //是否評論過
  const toggleModal = (e?: "TagOpen" | "PointOpen") => {
    e === "TagOpen"
      ? setIsModalTagOpen((prev) => !prev)
      : e === "PointOpen"
      ? setModalPointOpen((prev) => !prev)
      : setIsModalOpen((prev) => !prev);
  };

  const [photoListBase64, setPhotoListBase64] = useState<string[]>([
    nullPhoto,
    nullPhoto,
    nullPhoto,
  ]);
  //表單格式
  const {
    formState: { errors, isValid },
    control,
    reset,
    setValue,
    watch,
    register,
    handleSubmit,
  } = useForm<PostCommitForm>({
    mode: "onChange", //觸發及時驗證
    defaultValues: {
      tags: [],
      photos: [],
      starCount: 0,
    },
  });

  const tagsValue = useWatch({ control, name: "tags" });
  const starValue = useWatch({ control, name: "starCount" });
  //星數及tag為必填選項,判斷是否皆已填
  const haveError = starValue > 0 && isValid;

  //送出評論
  const onSubmit = async (data: PostCommitForm) => {
    setDisable(true);

    const formData = {
      placeId: id!,
      comment: data.comment,
      photos: data.photos ? Array.from(data.photos) : [],
      starCount: data.starCount,
      tags: data.tags,
    };
    const res = await postCommit(formData, token);
    if (res.status) {
      setDisable(false);
      toggleModal();
    } else {
      navigate("*");
    }
  };

  //評分星數元件
  const StarRating = ({
    value,
    onChange,
  }: {
    value: number;
    onChange?: (value: number) => void;
  }) => {
    return (
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`star+${index + 1}`}
            src={value > index ? starOn : star}
            alt={`star+${index + 1}`}
            onClick={() => {
              onChange?.(index + 1); //更新starCunt
            }}
          />
        ))}
      </div>
    );
  };

  // 驗證是否留言過,如果有獲取的圖片 URL 列表
  useEffect(() => {
    //驗證是否登入
    verifyAuth().then((res) => {
      //通過驗證執行驗證評論紀錄
      if (res) {
        fetchPhotosFromServer();
      }
    });
    async function fetchPhotosFromServer() {
      //是否評論過
      const commentRepeat = await postCommentsRepeat(id || "", token!);

      if (commentRepeat.message === "用戶未評論") {
        return;
      }
      setReviewed(true);
      reset({
        starCount: commentRepeat.data?.starCount,
        photos: [],
        tags: commentRepeat.data?.tags || [],
        comment: commentRepeat.data?.comment || "",
      });
      //驗證登入API的圖片
      const serverPhotos: string[] = commentRepeat.data?.commentPictures || [];

      const formattedPhotos = serverPhotos.map((photo) => {
        const photoUrl = `${commentPicture}${photo}`;
        return photoUrl;
      });
      //假設圖片少於三張自動填充
      const mergedPhotos =
        formattedPhotos.length > 3
          ? formattedPhotos
          : [
              ...formattedPhotos,
              ...Array(3 - formattedPhotos.length).fill(nullPhoto),
            ];
      setPhotoListBase64(mergedPhotos);
    }
  }, [id, token]);

  //避免重複調用tag API
  useEffect(() => {
    if (!cityTags || !categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, cityTags, categoryTags, friendlyTags]);
  if (errorMessage) {
    console.log(errorMessage);
  }

  //如果圖片上傳後執行渲染圖片
  const photoList = watch("photos");
  useEffect(() => {
    if (photoList.length > 0) {
      const base64List: string[] = [];

      Array.from(photoList).forEach((photo, index) => {
        const renderPhoto = new FileReader();

        renderPhoto.onload = () => {
          if (typeof renderPhoto.result === "string") {
            base64List[index] = renderPhoto.result;

            // 如果所有圖片都已轉換完成，更新狀態
            if (base64List.length === photoList.length) {
              setPhotoListBase64([...base64List]); // 確保引用改變
            }
          }
        };

        renderPhoto.onerror = (error) => {
          console.error("文件讀取錯誤", error);
        };

        renderPhoto.readAsDataURL(photo);
      });
    }
  }, [photoList]);

  return (
    <Wrapper>
      <Header title="Review" />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isReviewed && (
            <HintText>You have already reviewed this place.</HintText>
          )}
          <Section>
            <TagCheckBox
              register={register}
              required={true}
              title="Category"
              tags={categoryTags || []}
              selectedTags={tagsValue}
            />
            <TagCheckBox
              register={register}
              required={true}
              title="Friendly"
              tags={friendlyTags || []}
              selectedTags={tagsValue}
            />
          </Section>
          <Section>
            <div>
              <PhotosBar>
                {photoListBase64.map((photo, index) => {
                  return <Photo key={"photo" + index} src={photo}></Photo>;
                })}
              </PhotosBar>
              <FieldError> {errors.photos?.message}</FieldError>
            </div>
            <Input
              id="addPhoto"
              type="file"
              accept="image/jpeg,image/png"
              multiple
              {...register("photos", {
                validate: {
                  notImage: async (fileList: File[] | []) => {
                    if (!fileList || fileList.length === 0) {
                      return true; // 沒有上傳檔案，驗證通過
                    }
                    const files = Array.from(fileList);
                    const validationResults = await Promise.all(
                      files.map((file) => validateImageFile(file))
                    );

                    // 檢查是否有任何驗證失敗的結果
                    const invalidFile = validationResults.find(
                      (result) => result !== true
                    );

                    return invalidFile || true; // 如果有錯誤訊息，返回錯誤；否則通過驗證
                  },
                },
              })}
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setValue("photos", files.slice(0, 5)); // 限制最多 5 張
              }}
            />

            <PhotoAddLabel $bgColor="light" htmlFor="addPhoto">
              <Icon
                $isPointer={true}
                $color="primary"
                className="material-symbols-outlined"
              >
                add_a_photo
              </Icon>
              Add photo
            </PhotoAddLabel>
          </Section>
          <RatingSection>
            <StarRating
              value={watch("starCount")}
              onChange={(value) => setValue("starCount", value)}
            />
            <RatingText
              placeholder="Share details of your own experience at this place..."
              {...register("comment")}
            ></RatingText>
          </RatingSection>
          <BtnSection>
            <PrimaryBtn
              $bgColor={!isDisable && haveError ? "outline3" : "gray400"}
              $color={!isDisable && haveError ? "gray900" : "gray600"}
              $iconColor={!isDisable && haveError ? "gray900" : "gray600"}
              iconName={isDisable ? "" : "reviews"}
              $fontWeight={700}
              children={
                <>
                  {isDisable ? (
                    <Spinner size="4px" pointColor="gray600" />
                  ) : (
                    <p>Submit</p>
                  )}
                </>
              }
              disabled={isDisable}
            />
          </BtnSection>
        </form>
        {isModalOpen && (
          <GoodJobWindow
            isActive={isModalOpen}
            onClose={() => {
              toggleModal();
              toggleModal("TagOpen");
            }}
            num={10}
          ></GoodJobWindow>
        )}
        {isModalTagOpen && (
          <PopupModal
            isActive={isModalTagOpen}
            canActive={false}
            text="Suggest Tag"
            content={
              <SuggestTag
                storeId={id!}
                closeWindow={() => {
                  toggleModal("TagOpen");
                  toggleModal("PointOpen");
                }}
              />
            }
          />
        )}
        {isModalPointOpen && (
          <GoodJobWindow
            isActive={isModalPointOpen}
            onClose={() => {
              navigate(`/storeList/${Number(id)}?option=Reviews`);
            }}
          />
        )}
      </Container>
    </Wrapper>
  );
}
export default PostComment;
