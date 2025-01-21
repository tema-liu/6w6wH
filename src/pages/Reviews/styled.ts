import styled from "styled-components";
import { Icon as IconImg } from "../../component/Layout/LayoutComponents";

export const CommentCardContent = styled.div`
  padding: 16px 8px 16px 8px;
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const CommentCardDetail = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const Head = styled.div`
  width: 64px;
`;

export const HeadRight = styled.div`
  width: 100%;
  margin-left: 8px;
  overflow: hidden;
`;
export const HeadShot = styled.img`
  width: 64px; /* 設置圖片寬度 */
  height: 64px; /* 設置圖片高度（確保是正方形） */
  border-radius: 50%; /* 圓形裁切 */
  object-fit: cover; /* 確保圖片內容不變形 */
`;
export const BadgeBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;
export const UserReviewTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserRating = styled.div`
  * + * {
    margin-top: 8px; // 子元素之間的間距
  }
`;

export const Icon = styled(IconImg)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const UserReviewMain = styled.div`
  padding: 4px 0 8px 0;
`;

export const SocialBlock = styled.div`
  display: flex;
  div {
    width: 88px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      margin-left: 4px;
    }
  }
`;

export const UserReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray600};
`;
