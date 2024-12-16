import styled from "styled-components";
import headShotIcon from "../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "./StarRating";
import { Icon } from "./LayoutComponents";
import HeartIcon from "./HeartIcon";
import { TagsBar, Tag } from "./TagsBar";
import { useNavigate } from "react-router-dom";
import { ReadMore } from "../pages/Reviews/ReadMore";
import { Comment, Reply } from "../type/type";
import { badgeImages } from "../constants/imageResources";
import MoreVert from "./MoreVert";
import useTimeAgo from "../hooks/useTimeAgo";

//==========================評論卡片樣式
const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
  > div + div {
    padding-top: 8px;
  }
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
  margin: 0;
  padding: 16px 8px;
`;

const UserReviewTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
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

type CommentCard = {
  data: Comment;
};

export function CommentCard({ data }: CommentCard) {
  const navigate = useNavigate();

  return (
    data !== null && (
      <CommentCardContent>
        {data.photos && (
          <CommentCardImgBox>
            {data.photos.map((photo, index) => (
              <img key={"photo" + index} src={photo} alt="commentPhoto" />
            ))}
          </CommentCardImgBox>
        )}
        <CommentCardDetail>
          <Head>
            <HeadShot src={data.userPhoto} alt="headShot" />
            <BadgeBox>
              {data.medal && Object.keys(badgeImages).includes(data.medal) && (
                <img
                  width={22}
                  src={badgeImages[data.medal as keyof typeof badgeImages]}
                  alt="badge"
                />
              )}
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
              <h5>{useTimeAgo(data.postedAt)}</h5>
              <SocialBlock>
                <div>
                  <h4>{data.replyCount === 0 ? "" : data.replyCount}</h4>
                  <ChatIcon
                    className="material-symbols-outlined"
                    onClick={() => {
                      navigate(`/review/${data.commentID}`);
                    }}
                  >
                    chat_bubble
                  </ChatIcon>
                </div>
                <div>
                  <HeartIcon
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
  return (
    data !== null && (
      <CommentCards>
        <Head>
          <HeadShot src={headShotIcon} alt="headShot" />
          <BadgeBox>
            {data.medal && Object.keys(badgeImages).includes(data.medal) && (
              <img
                width={22}
                src={badgeImages[data.medal as keyof typeof badgeImages]}
                alt="badge"
              />
            )}
          </BadgeBox>
        </Head>
        <HeadRight>
          <UserReviewTop>
            <span style={{ display: "block" }}>{data.userName}</span>
            <MoreVert userID={data.userID} replyID={data.replyID} />
          </UserReviewTop>
          <UserReviewMain>
            <ReadMore text={data.comment} />
          </UserReviewMain>
          <UserReviewFooter>
            <h5>{useTimeAgo(data.postedAt)}</h5>
            <SocialBlock>
              <div>
                <HeartIcon
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
