import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { useEffect, useState } from "react";
import { Card, HeadShot, RightDiv, AddPhotoBtn, FieldError } from "./styled";
import { EditProfileForm } from "../../type/formType";

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

type PhotoCardProps = {
  register: UseFormRegister<EditProfileForm>; // 添加 register prop
  photoUrl: any;
  firstPhoto: string;
  errorMessage?: string;
};

function validateImageFile(file: File): Promise<string | true> {
  return new Promise((resolve) => {
    if (!file || !(file instanceof File)) {
      resolve("This file is not a valid image");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result as string;
      image.onload = () => resolve(true);
      image.onerror = () => resolve("This file is not a valid image");
    };
    reader.onerror = () => resolve("This file is not a valid image");
    reader.readAsDataURL(file);
  });
}

function PhotoCard({
  register,
  photoUrl,
  firstPhoto,
  errorMessage,
}: PhotoCardProps) {
  // 用來存儲圖片預覽 URL

  const [renderPhoto, setPhoto] = useState(photoUrl);

  useEffect(() => {
    if (photoUrl && photoUrl[0] instanceof Blob) {
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
      render.readAsDataURL(photoUrl[0]);
    }
  }, [photoUrl]);

  return (
    <Card>
      <HeadShot src={renderPhoto} alt="headShot" />
      <RightDiv>
        <AddPhotoBtn htmlFor="userPhoto">
          Change Photo
          <Input
            id="userPhoto"
            type="file"
            {...register("userPhoto", {
              validate: {
                notImage: (fileList) => {
                  //如果圖片沒有改變則通過檢驗
                  if (firstPhoto === photoUrl) {
                    return true;
                  }
                  //上傳圖片之後確認檔案是不是IMG
                  if (fileList && fileList.length > 0) {
                    const file = fileList[0];
                    if (
                      file &&
                      typeof file === "object" &&
                      "size" in file &&
                      "type" in file
                    ) {
                      return validateImageFile(file);
                    }
                    return "Invalid image file";
                  }
                },
              },
            })}
            accept="image/jpeg, image/png"
          />
        </AddPhotoBtn>
        <FieldError> {errorMessage}</FieldError>
      </RightDiv>
    </Card>
  );
}

export default PhotoCard;
