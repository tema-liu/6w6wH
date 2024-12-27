import styled from "styled-components";

export const EditForm = styled.form`
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

//PhotoCard===========================================

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
`;
export const HeadShot = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px 0 0 16px;
`;
export const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 4px;
  flex: 1;
`;
export const FieldError = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const AddPhotoBtn = styled.label`
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
