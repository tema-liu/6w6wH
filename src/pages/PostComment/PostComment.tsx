import Header from "../../component/layout/header";
import {
  Wrapper,
  Container,
  Icon,
} from "../../component/layout/LayoutComponents";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import nullPhoto from "../../assets/Rectangle.png";
import { Photo, PhotosBar } from "../../component/TagsBar";
import { useState } from "react";
import star from "../../assets/Star.png";
import starOn from "../../assets/StarOn.png";
import Pure from "../../component/ReviewComponent/Pure";
import GoodJobWindow from "../../component/GoodJobWindow";
import { useNavigate } from "react-router-dom";
import SuggestTag from "./SuggestTag";
import {
  Section,
  Input,
  PhotoAddLabel,
  BtnSection,
  RatingSection,
  RatingText,
  Star,
} from "./style";

function PostComment() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]); // 保存文件列表
  const category = ["Food", "Shopping", "Services"];

  const friendly = [
    "Friendly",
    "Halal",
    "Multilingual",
    "Communication aids",
    "online shopping",
  ];

  const addPhotoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files; // 取得文件列表
    if (!selectedFiles) return;
    const fileArray = Array.from(selectedFiles); // 將 FileList 轉為陣列
    console.log(fileArray); //取得文件陣列
  };

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
              // onChange(index + 1);
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <Header title="Review" />
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Section>
            <TagCheckBox tags={category} />
            <TagCheckBox tags={friendly} />
          </Section>
          <Section>
            <PhotosBar>
              <Photo src={nullPhoto}></Photo>
              <Photo src={nullPhoto}></Photo>
              <Photo src={nullPhoto}></Photo>
            </PhotosBar>
            <Input
              id="addPhoto"
              name="addPhoto"
              type="file"
              accept="image/jpeg,image/png"
              multiple
              onChange={(e) => {
                addPhotoHandler(e);
              }}
            />
            <PhotoAddLabel $bgColor="light" htmlFor="addPhoto">
              <Icon $color="primary" className="material-symbols-outlined">
                add_a_photo
              </Icon>
              Add photo
            </PhotoAddLabel>
          </Section>
          <RatingSection>
            {/* reactForm使用controll */}
            <StarRating value={0} />
            <RatingText placeholder="Share details of your own experience at this place..."></RatingText>
          </RatingSection>
          <BtnSection>
            <PrimaryBtn
              iconName="reviews"
              content="Submit"
              onClick={() => {
                //這裡送出API假設成功後
                window.location.hash = "#popup";
              }}
            />
          </BtnSection>
        </form>
        <GoodJobWindow
          content="OK"
          id="popup"
          num={10}
          func={() => {
            window.location.hash = "#addTag";
          }}
        ></GoodJobWindow>
        <Pure
          isActive={false}
          text="Suggest Tag"
          id="addTag"
          content={<SuggestTag />}
        />
        <GoodJobWindow
          content="OK"
          id="popup2"
          func={() => {
            navigate("/storeList/:id?option=Reviews");
          }}
        />
      </Container>
    </Wrapper>
  );
}
export default PostComment;
