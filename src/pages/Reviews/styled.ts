import styled from "styled-components";
import { IconImg } from "../../component/LayoutComponents";

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
`;

export const StoreImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: -128px;
`;

export const CarouselBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

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
  margin: 8px;
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
    img {
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
