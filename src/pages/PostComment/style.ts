import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-bottom: 48px;
`;

export const Input = styled.input`
  display: none;
`;

type labelProps = {
  $bgColor?: string;
};

export const PhotoAddLabel = styled.label<labelProps>`
  cursor: pointer;
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
export const BtnSection = styled.div`
  margin: 16px 0;
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
  padding-bottom: 20px;
`;
export const Star = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
export const RatingText = styled.textarea`
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
