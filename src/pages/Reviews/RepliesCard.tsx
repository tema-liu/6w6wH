import styled from "styled-components";
import {
  UserReviewFooter,
  Icon,
  CommentCardContent,
  CommentCardDetail,
  Head,
  HeadRight,
  BadgeBox,
  UserReviewTop,
  UserReviewMain,
  HeadShot,
  SocialBlock,
} from "../Reviews/styled";
import badge from "../../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { ReadMore } from "./ReadMore";
import HeartIcon from "../../component/ReviewComponent/HeartIcon";
import { useState } from "react";

const CommentCards = styled(CommentCardContent)`
  border-radius: 32px;
  margin-top: 8px;
  padding: 0;
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const CommentCard = styled(CommentCardDetail)`
  margin: 0;
  padding: 16px 8px;
`;

const MenuOptions = styled.div`
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

function RepliesCard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };

  return (
    <CommentCards>
      <CommentCard>
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
              $isPointer={true}
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
                "Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out!"
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
      </CommentCard>
    </CommentCards>
  );
}

export default RepliesCard;
