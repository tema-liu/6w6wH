import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;
export const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  resize: none;
  width: 100%;
  height: 160px;
`;
export const BtnBox = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 24px;
`;
