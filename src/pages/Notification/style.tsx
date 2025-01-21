import styled from "styled-components";
import { Container } from "../../component/layout/LayoutComponents";
type NotifyProps = {
  $isCheck: boolean;
};

export const CardWrapper = styled.div<NotifyProps>`
  padding: 16px 8px;
  border-radius: 16px;
  background-color: ${({ $isCheck, theme }) =>
    $isCheck ? theme.colors.gray100 : theme.colors.light};
  box-shadow: ${({ $isCheck }) =>
    $isCheck
      ? "none"
      : "0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a"};
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

export const NotifyContainer = styled(Container)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
export const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
