import styled from "styled-components";

export const InputCheck = styled.div`
  display: flex;
  padding: 8px 16px 8px 6px;
  column-gap: 8px;
  align-items: center;
`;
export const Input = styled.input`
  position: relative;
  appearance: none;
  border: 3px solid ${({ theme }) => theme.colors.gray900};
  width: 18px;
  height: 18px;
  border-radius: 2px;

  &:checked {
    background-color: ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.gray800};
  }

  // 添加勾選符號
  &:checked::after {
    content: "✔"; // 或者使用其他圖標
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray900};
`;
export const Form = styled.form`
  div + div {
    margin-top: 8px;
  }
`;
export const InputText = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 8px;
  height: 66px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  padding: 12px 16px;
  margin-top: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 12px 0;
  margin-top: 24px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.outline2};
  opacity: 0.5;
  &:active {
    opacity: 1;
  }
`;
export const TextAreaTitle = styled.p`
  padding-top: 16px;
`;
