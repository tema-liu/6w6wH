import badge from "../../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../StarRating";
import { Icon } from "../layout/LayoutComponents";
import HeartIcon from "./HeartIcon";
import { Tag } from "../shop/TagsBar";
import { useNavigate } from "react-router-dom";
import { ReadMore } from "../../pages/Reviews/ReadMore";
import { useState } from "react";
import {
  CommentCardContent,
  CommentCardDetail,
  CommentCardImgBox,
  Head,
  HeadShot,
  BadgeBox,
  HeadRight,
  Tags,
  UserCommentTop,
  UserCommentMain,
  UserCommentFooter,
  SocialBlock,
  ChatIcon,
  CommentCards,
  UserReviewFooter,
  UserReviewTop,
  ProfileReviewTop,
  MenuOptions,
  UserReviewMain,
  ProfileCard,
  ShopName,
  NameRating,
  ProfileContent,
  ProfileTags,
  UserProfileMain,
} from "./style/ReviewCards";

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

export function ProfileReviewsCard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };
  return (
    <ProfileCard>
      <CommentCardImgBox>
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
        <img src="https://picsum.photos/1000/800" alt="" />
      </CommentCardImgBox>
      <ProfileContent>
        <ShopName>Left Bank Rendezvous Cafe 南國人文美食坊</ShopName>
        <ProfileReviewTop>
          <NameRating>
            <span style={{ display: "block" }}>Ala</span>
            <StarRating star={3} width={112} height={16} />
          </NameRating>
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
        </ProfileReviewTop>
        <ProfileTags>
          <Tag>Multilingual</Tag>
          <Tag>Friendly</Tag>
          <Tag>Food</Tag>
        </ProfileTags>
        <UserProfileMain>
          <ReadMore
            text={
              "Kopi susu is super yummy! Nice ambient and service! Come hang out!"
            }
          />
        </UserProfileMain>
        <UserReviewFooter>
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
        </UserReviewFooter>
      </ProfileContent>
    </ProfileCard>
  );
}
