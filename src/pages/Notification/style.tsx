import styled from "styled-components";
export const CardWrapper = styled.div`
  padding: 16px 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
export const HeadShot = styled.img`
  width: 64px; /* 設置圖片寬度 */
  height: 64px; /* 設置圖片高度（確保是正方形） */
  border-radius: 50%; /* 圓形裁切 */
  object-fit: cover; /* 確保圖片內容不變形 */
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Text = styled.span`
  padding: 8px 0;
`;
