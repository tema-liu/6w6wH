import styled from "styled-components";
import badge from "../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import headShotIcon from "../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "./StarRating";
import { Icon } from "./LayoutComponents";
import HeartIcon from "./HeartIcon";
import { TagsBar, Tag } from "./TagsBar";
import { useNavigate } from "react-router-dom";
import { ReadMore } from "../pages/Reviews/ReadMore";
import { useState } from "react";

//==========================評論卡片樣式
const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
`;
const CommentCardImgBox = styled.div`
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
const CommentCardDetail = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Head = styled.div`
  width: 64px;
`;

const HeadRight = styled.div`
  width: 100%;
  margin-left: 8px;
  overflow: hidden; /* 防止內容溢出父容器 */
`;
const HeadShot = styled.img`
  width: 64px; /* 設置圖片寬度 */
  height: 64px; /* 設置圖片高度（確保是正方形） */
  border-radius: 50%; /* 圓形裁切 */
  object-fit: cover; /* 確保圖片內容不變形 */
`;
const BadgeBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;
const UserCommentTop = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 8px; // 子元素之間的間距
  }
`;

const UserCommentMain = styled.div`
  padding: 4px 0 8px 0;
`;

const SocialBlock = styled.div`
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

const UserCommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
  padding-top: 2px;
  padding-bottom: 10px;
`;
const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
`;
//==========================review卡片樣式
const CommentCards = styled(CommentCardDetail)`
  position: relative;
  margin: 0;
  padding: 16px 8px;
`;

const UserReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 0;
`;
const UserReviewMain = styled.div`
  padding: 4px 0 0 0;
`;
const UserReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.gray600};
`;
const MenuOptions = styled.div`
  position: absolute;
  top: 50px;
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

export function CommentCard() {
  const navigate = useNavigate();

  return (
    <CommentCardContent>
      <CommentCardImgBox>
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
      </CommentCardImgBox>
      <CommentCardDetail>
        <Head>
          <HeadShot src={headShotIcon} alt="headShot" />
          <BadgeBox>
            <img width={22} src={badge} alt="badge" />
          </BadgeBox>
        </Head>
        <HeadRight>
          <UserCommentTop>
            <span style={{ display: "block" }}>Ala</span>
            <StarRating star={3} width={112} height={16} />
            <Tags>
              <Tag>Multilingual</Tag>
              <Tag>Friendly</Tag>
            </Tags>
          </UserCommentTop>
          <UserCommentMain>
            <p>
              Kopi susu is super yummy! Nice ambient and service! Come hang out!
            </p>
          </UserCommentMain>
          <UserCommentFooter>
            <h5>3 hour ago</h5>
            <SocialBlock>
              <div>
                <h4>1.5k</h4>
                <ChatIcon
                  className="material-symbols-outlined"
                  onClick={() => {
                    navigate("/review/:id");
                  }}
                >
                  chat_bubble
                </ChatIcon>
              </div>
              <div>
                <h4>999</h4>
                <HeartIcon />
              </div>
            </SocialBlock>
          </UserCommentFooter>
        </HeadRight>
      </CommentCardDetail>
    </CommentCardContent>
  );
}

export function ReviewsCard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };
  return (
    <CommentCards>
      <Head>
        <HeadShot src={headShotIcon} alt="headShot" />
        <BadgeBox>
          <img width={22} src={badge} alt="badge" />
        </BadgeBox>
      </Head>
      <HeadRight>
        <UserReviewTop>
          <span style={{ display: "block" }}>Ala</span>
          <Icon
            $color="gray600"
            onClick={toggleMenu}
            className="material-symbols-outlined"
          >
            more_vert
          </Icon>
          {isMenuOpen && (
            <MenuOptions>
              <button>delete</button>
              <button>report</button>
            </MenuOptions>
          )}
        </UserReviewTop>
        <UserReviewMain>
          <ReadMore
            text={
              "Kopi susu is super yummy! Nice ambient and service! Come hang out!"
            }
          />
        </UserReviewMain>
        <UserReviewFooter>
          <h5>3 hour ago</h5>
          <SocialBlock>
            <div>
              <h4>4</h4>
              <HeartIcon />
            </div>
          </SocialBlock>
        </UserReviewFooter>
      </HeadRight>
    </CommentCards>
  );
}