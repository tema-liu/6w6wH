import styled from "styled-components";

export const TitleBox = styled.div<{ color?: string }>`
  border-radius: 16px 16px 0 0;
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.gray100};
  width: fit-content;
  padding: 2px 16px 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;
export const TitleBoxIcon = styled.img`
  width: 32px;
  height: auto;
`;
export const TitleBoxText = styled.h2`
  margin-left: 8px;
  display: inline-block;
`;
export const TagBox = styled.div<{ radius?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 16px;
  border-radius: ${({ radius = "0 16px 16px 16px" }) => radius};
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 8px;
`;
