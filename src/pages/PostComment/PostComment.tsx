import Header from "../../component/header";
import { Wrapper, Container, Icon } from "../../component/LayoutComponents";
import { PrimaryBtn } from "../../component/PrimaryBtn";
import TagCheckBox from "../../component/TagCheckBox";
import styled from "styled-components";
import nullPhoto from "../../assets/Rectangle.png";
import { Photo, PhotosBar } from "../../component/TagsBar";
import { useState } from "react";
import star from "../../assets/Star.png";
import starOn from "../../assets/StarOn.png";
import Pure from "../../component/Pure";
import GoodJobWindow from "../../component/GoodJobWindow";
import { useNavigate } from "react-router-dom";
import SuggestTag from "./SuggestTag";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-bottom: 48px;
`;

const Input = styled.input`
  display: none;
`;

type labelProps = {
  $bgColor?: string;
};

const PhotoAddLabel = styled.label<labelProps>`
  width: 100%;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.outline3};
  border-radius: 16px;
  padding: 13px 0;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;
const BtnSection = styled.div`
  margin: 16px 0;
`;

const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
  padding-bottom: 20px;
`;
const Star = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
const RatingText = styled.textarea`
  width: 100%;
  height: 124px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  resize: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

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
          content="add"
          id="popup2"
          func={() => {
            navigate("/storeList/:id");
          }}
        />
      </Container>
    </Wrapper>
  );
}
export default PostComment;
