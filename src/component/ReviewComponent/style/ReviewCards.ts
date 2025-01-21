import styled from "styled-components";
import { Icon } from "../../Layout/LayoutComponents";
import { TagsBar } from "../../shop/TagsBar";

//==========================評論卡片樣式
export const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
  > div + div {
    padding-top: 8px;
  }
`;
export const CommentCardImgBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 120px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 120px;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
  }
  img + img {
    margin-left: 4px;
  }
`;
export const CommentCardDetail = styled.div`
  display: flex;
`;

export const Head = styled.div`
  width: 64px;
`;

export const HeadRight = styled.div`
  width: 100%;
  margin-left: 8px;
  overflow: hidden; /* 防止內容溢出父容器 */
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
export const UserCommentTop = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 8px; // 子元素之間的間距
  }
`;

export const UserCommentMain = styled.div`
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

export const UserCommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray600};
`;
export const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
`;
export const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
`;
//==========================review卡片樣式
export const CommentCards = styled(CommentCardDetail)`
  position: relative;
  margin: 0;
  padding: 16px 8px;
`;

export const UserReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserReviewMain = styled.div`
  padding: 4px 0 0 0;
`;
export const UserReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.gray600};
`;

//ProfileReviewsCard樣式==========================
export const ProfileCard = styled.div`
  padding: 8px;
`;

export const ProfileContent = styled.div``;
export const NameRating = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
export const ProfileReviewTop = styled(UserReviewTop)`
  padding: 0;
  padding-top: 8px;
  position: relative;
`;

export const ProfileTags = styled(TagsBar)`
  border: none;
  padding: 10px 0;
`;

export const ShopName = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.38px;
  font-family: mix;
  padding-top: 8px;
`;

export const UserProfileMain = styled(UserReviewMain)`
  margin-bottom: 8px;
`;
