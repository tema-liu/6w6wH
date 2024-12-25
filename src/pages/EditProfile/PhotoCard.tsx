import styled from "styled-components";
// import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { UseFormRegister } from "react-hook-form";
import { useEffect, useState } from "react";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
`;
const HeadShot = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px 0 0 16px;
`;
const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const AddPhotoBtn = styled.label`
  width: fit-content;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;

export const Input = styled.input`
  display: none;
`;
type EditProfileForm = {
  photo: string;
  name: string;
  comeFrom: string;
  nowLiveIn: string;
  bio: string;
  country: string;
  gender: string;
  birth: string;
};

type PhotoCardProps = {
  register: UseFormRegister<EditProfileForm>; // 添加 register prop
  photo: any;
};

function PhotoCard({ register, photo }: PhotoCardProps) {
  // 用來存儲圖片預覽 URL
  const [renderPhoto, setPhoto] = useState<string>(photo);

  useEffect(() => {
    if (photo && photo[0] instanceof Blob) {
      const render = new FileReader();
      //設定渲染圖片
      render.onload = () => {
        if (typeof render.result === "string") {
          setPhoto(render.result); // 這會是 base64 格式的圖像數據
        }
      };

      render.onerror = (error) => {
        console.error("文件讀取錯誤", error);
      };
      // 最後開始讀取
      render.readAsDataURL(photo[0]);
    }
  }, [photo]);

  return (
    <Card>
      <HeadShot src={renderPhoto} alt="headShot" />
      <RightDiv>
        <AddPhotoBtn>
          Change Photo
          <Input
            type="file"
            {...register("photo")}
            accept="image/jpeg, image/png"
          />
        </AddPhotoBtn>
      </RightDiv>
    </Card>
  );
}

export default PhotoCard;
