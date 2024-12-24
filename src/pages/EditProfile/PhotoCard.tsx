import styled from "styled-components";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";

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

function PhotoCard() {
  return (
    <Card>
      <HeadShot src={photo} alt="headShot" />
      <RightDiv>
        <AddPhotoBtn>
          Change Photo
          <Input type="file" />
        </AddPhotoBtn>
      </RightDiv>
    </Card>
  );
}

export default PhotoCard;
