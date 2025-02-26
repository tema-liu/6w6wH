import { StarRating } from "../StarRating";
import HeartIcon from "./HeartIcon";
import { Tag } from "../shop/TagsBar";
import { useNavigate } from "react-router-dom";
import { Comment, CommentData, Reply } from "../../type/type";
import MoreVert from "./MoreVert";
import useTimeAgo from "../../hooks/useTimeAgo";
import { ReadMore } from "../../pages/Reviews/ReadMore";
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
  UserReviewMain,
  ProfileCard,
  ShopName,
  NameRating,
  ProfileContent,
  ProfileTags,
  UserProfileMain,
  ShopNameBox,
} from "./style/ReviewCards";
import Badges from "../Profile/BadgeWindow";
import Country from "../Profile/ConuntryIcon";
import {
  commentPicture,
  defaultReviewUserPhoto,
  userPicture,
} from "../../constants/srcPaths";
import useProfileClickHandler from "../../hooks/useProfileClickHandler";
import VoiceReader from "../shop/VoiceReader";

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
              const PhotoUrl = photo.PictureUrl
                ? `${commentPicture}${photo.PictureUrl}`
                : `${commentPicture}${photo}`;

              return (
                <img
                  key={photo.Id ? `photo${photo.Id}` : `photo-${index}`}
                  src={PhotoUrl}
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
              src={
                data.userPhoto
                  ? userPicture + data.userPhoto
                  : defaultReviewUserPhoto
              }
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
            src={
              data.userPhoto
                ? userPicture + data.userPhoto
                : defaultReviewUserPhoto
            }
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
type ProfileReviews = {
  userId: number;
  data: CommentData;
  handleRemoveReply: (replyId: number) => void;
};
export function ProfileReviewsCard({
  userId,
  data,
  handleRemoveReply,
}: ProfileReviews) {
  const navigate = useNavigate();

  return (
    <ProfileCard>
      {data.photos && data.photos?.length > 0 && (
        <CommentCardImgBox>
          {data.photos?.map((photo, index) => {
            return (
              <img
                key={`photo${photo}photo-${index}`}
                src={`${commentPicture}${photo}`}
                alt="commentPhoto"
              />
            );
          })}
        </CommentCardImgBox>
      )}
      <ProfileContent>
        <ShopNameBox>
          <ShopName
            onClick={() => {
              navigate(`/storeList/${data.storeId}`);
            }}
          >
            {data.displayName}
          </ShopName>
          <VoiceReader
            text={data.displayName ? data.displayName : ""}
            $margin={"0 8px"}
          />
        </ShopNameBox>
        <ProfileReviewTop>
          <NameRating>
            <span style={{ display: "block" }}>{data.userName}</span>
            <StarRating
              star={data.starCount as 1 | 2 | 3 | 4 | 5}
              width={112}
              height={16}
            />
          </NameRating>
          <MoreVert
            id={data.commentId}
            reviewOrReply="review"
            userId={userId}
            onRemoveReply={handleRemoveReply}
          />
        </ProfileReviewTop>
        <ProfileTags>
          {data.tags.map((tag) => (
            <Tag key={tag + data.displayName}>{tag}</Tag>
          ))}
        </ProfileTags>
        <UserProfileMain>
          <ReadMore text={data.comment ?? ""} />
        </UserProfileMain>
        <UserReviewFooter>
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
                isLike={data.isLike}
                likeCount={data.likeCount ?? 0}
              />
            </div>
          </SocialBlock>
        </UserReviewFooter>
      </ProfileContent>
    </ProfileCard>
  );
}
