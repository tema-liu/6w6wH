import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import { useForm } from "react-hook-form";
import { AddPlaceList } from "../../type/type";
import { TagsField } from "../../type/formType";
import { TagsContent } from "./style/addStoreForm";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../utils/redux/store";
import { useEffect, useState } from "react";
import { fetchTagsData } from "../../utils/redux/tagList/slice";
import GoodJobWindow from "../../component/PopupModel/GoodJobWindow";
import { useNavigate } from "react-router-dom";
import { postAddStore } from "../../apis/postAddStore";
import Spinner from "../../component/Placeholder/Spinners";

function AddStoreForm({ ...props }: AddPlaceList) {
  const [windowOpen, setWindowOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  const token = useSelector((state: RootState) => state.auth.token);
  const errorMessage = useSelector((state: RootState) => state.tags.error);
  const [newStoreId, setNewStoreId] = useState(0);
  const { register, handleSubmit, watch } = useForm<TagsField>({
    defaultValues: {
      tags: [],
    },
  });

  //避免重複調用 API
  useEffect(() => {
    if (!categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, categoryTags, friendlyTags]);
  if (errorMessage) {
    console.log(errorMessage);
  }

  //監聽tags是否有內容
  const haveTags = watch("tags");

  const onSubmit = async (data: TagsField) => {
    const transformedData = data.tags.map((tag) => Number(tag)); // 自定義數據轉換
    const completeData = { ...props, tags: transformedData }; // 合併 props 和表單數據，ＡＰＩ請送出這筆資料
    setIsSubmit(true);
    const res = await postAddStore(completeData, token!);
    //新增失敗則跑到404
    if (!res.status) {
      navigate("/");
    }

    setNewStoreId(res.data?.id ?? 0);
    setIsSubmit(false);
    setWindowOpen(!windowOpen);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TagsContent>
          <TagCheckBox
            required={true}
            register={register}
            title="Category"
            tags={categoryTags || []}
          />
          <TagCheckBox
            required={true}
            register={register}
            title="Friendly"
            tags={friendlyTags || []}
          />
        </TagsContent>
        <PrimaryBtn
          $opacity={!isSubmit && haveTags.length > 0 ? 1 : 0.5}
          $margin="16px 0"
          iconName="add_location"
          children={
            <>
              {isSubmit ? (
                <Spinner size="4px" pointColor="gray900" />
              ) : (
                <p>Submit</p>
              )}
            </>
          }
          disabled={isSubmit}
        />
      </form>
      {windowOpen && (
        <GoodJobWindow
          onClose={() => {
            setWindowOpen(!windowOpen);
            navigate(`/storeList/${newStoreId}`);
          }}
          isActive={windowOpen}
        />
      )}
    </>
  );
}
export default AddStoreForm;
