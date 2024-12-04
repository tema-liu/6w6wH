import styled from "styled-components";
import { TagsBar } from "../../component/TagsBar";
import { Icon } from "../../component/LayoutComponents";

export const Input = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

export const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: background, color 0.4s ease;
  color: rgba(33, 33, 33, 0.5);

  /* First label */
  &:first-of-type {
    border-radius: 16px 0 0 0;
    background: #b2e0f3;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  &:nth-of-type(2) {
    background: #f8b9dd;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.outline1};
    }
  }

  /* Last label */
  &:last-of-type {
    background: ${({ theme }) => theme.colors.outline2};
    border-radius: 0 16px 0 0;
    ${Input}:checked + & {
      background: ${({ theme }) => theme.colors.outline2};
    }
  }

  /* Checked state */
  ${Input}:checked + & {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Title = styled.div`
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px 16px 0 0;
  margin-right: 8px;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

export const Reviews = styled.div`
  position: relative;
  margin-top: -64px;
  filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000002a);
`;

export const ReviewContent = styled.div`
  border-radius: 0 0 16px 16px;
  background: ${({ theme }) => theme.colors.gray100};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

export const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
`;
export const CommentCardImgBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 120px;
  overflow: auto;

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
  margin-top: 8px;
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
export const UserReviewTop = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 8px; // 子元素之間的間距
  }
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
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray600};
`;
export const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
  padding-top: 2px;
  padding-bottom: 10px;
`;

export const CommentCard = styled(CommentCardDetail)`
  margin: 0;
  padding: 16px 8px;
`;

export const MenuOptions = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  z-index: 10;
  display: flex;
  flex-direction: column;

  > button + button {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
  button {
    padding: 4px;
    font-size: 16px;
    white-space: nowrap;
  }
`;
export const IconImg = styled(Icon)`
  margin: 12px 8px;
  color: ${({ theme }) => theme.colors.gray600};
`;
export const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
`;

export const UserReplyTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
