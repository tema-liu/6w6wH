import defaultUserPhoto from "../../assets/user-3296.svg";
import { StarRating } from "../StarRating";
import { Icon } from "../layout/LayoutComponents";
import HeartIcon from "./HeartIcon";
import { Tag } from "../shop/TagsBar";
import { useNavigate } from "react-router-dom";
import { Comment, Reply } from "../../type/type";
import MoreVert from "./MoreVert";
import useTimeAgo from "../../hooks/useTimeAgo";
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
import Badges from "../Profile/BadgeWindow";
import Country from "../Profile/ConuntryIcon";
import { commentPicture } from "../../constants/srcPaths";
import useProfileClickHandler from "../../hooks/useProfileClickHandler";

type CommentCard = {
  data: Comment;
};

export function CommentCard({ data }: CommentCard) {
  const navigate = useNavigate();
  const handleProfileClick = useProfileClickHandler();

  return (
    data !== null && (
      <CommentCardContent>
        {data.photos?.length > 0 && (
          <CommentCardImgBox>
            {data.photos.map((photo, index) => {
              return (
                <img
                  key={photo.Id ? `photo${photo.Id}` : `photo-${index}`}
                  src={`${commentPicture}${photo.PictureUrl}`}
                  alt="commentPhoto"
                />
              );
            })}
          </CommentCardImgBox>
        )}
        <CommentCardDetail>
          <Head>
            <HeadShot
              onClick={() => {
                handleProfileClick(data.userId);
              }}
              src={data.userPhoto || defaultUserPhoto}
              alt="headShot"
            />
            <BadgeBox>
              <Country country={data.country} />
              <Badges level={data.badge} />
            </BadgeBox>
          </Head>
          <HeadRight>
            <UserCommentTop>
              <span style={{ display: "block" }}>{data.userName}</span>
              <StarRating
                star={data.starCount as 1 | 2 | 3 | 4 | 5}
                width={112}
                height={16}
              />
              <Tags>
                {data.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </UserCommentTop>
            <UserCommentMain>
              <p>{data.comment}</p>
            </UserCommentMain>
            <UserCommentFooter>
              <h5>{useTimeAgo(data.createTime)}</h5>
              <SocialBlock>
                <div>
                  <h4>{data.replyCount === 0 ? "" : data.replyCount}</h4>
                  <ChatIcon
                    $isPointer={true}
                    className="material-symbols-outlined"
                    onClick={() => {
                      navigate(`/review/${data.commentId}`);
                    }}
                  >
                    chat_bubble
                  </ChatIcon>
                </div>
                <div>
                  <HeartIcon
                    type="comment"
                    likeId={data.commentId}
                    likeCount={data.likeCount ?? 0}
                    isLike={data.isLike ?? false}
                  />
                </div>
              </SocialBlock>
            </UserCommentFooter>
          </HeadRight>
        </CommentCardDetail>
      </CommentCardContent>
    )
  );
}

type ReviewsCard = {
  data: Reply;
};

export function ReviewsCard({ data }: ReviewsCard) {
  const handleProfileClick = useProfileClickHandler();

  return (
    data !== null && (
      <CommentCards>
        <Head>
          <HeadShot
            onClick={() => {
              handleProfileClick(data.userId);
            }}
            src={data.userPhoto || defaultUserPhoto}
            alt="headShot"
          />
          <BadgeBox>
            <Country country={data.country} />
            <Badges level={data.badge} />
          </BadgeBox>
        </Head>
        <HeadRight>
          <UserReviewTop>
            <span style={{ display: "block" }}>{data.userName}</span>
            <MoreVert
              id={data.replyId}
              reviewOrReply="reply"
              userId={data.userId}
            />
          </UserReviewTop>
          <UserReviewMain>
            <ReadMore text={data.comment} />
          </UserReviewMain>
          <UserReviewFooter>
            <h5>{useTimeAgo(data.createTime)}</h5>
            <SocialBlock>
              <div>
                <HeartIcon
                  type="reply"
                  likeId={data.replyId}
                  likeCount={data.likeCount ?? 0}
                  isLike={data.isLike ?? false}
                />
              </div>
            </SocialBlock>
          </UserReviewFooter>
        </HeadRight>
      </CommentCards>
    )
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
            $isPointer={true}
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
                $isPointer={true}
                className="material-symbols-outlined"
                onClick={() => {
                  navigate("/review/:id");
                }}
              >
                chat_bubble
              </ChatIcon>
            </div>
            <div>
              <HeartIcon
                type="comment"
                likeId={123}
                isLike={true}
                likeCount={10}
              />
            </div>
          </SocialBlock>
        </UserReviewFooter>
      </ProfileContent>
    </ProfileCard>
  );
}
