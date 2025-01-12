import styled from "styled-components";
import {
  UserReviewFooter,
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
import { ReadMore } from "./ReadMore";
import HeartIcon from "../../component/reviewComponent/HeartIcon";
import { Reply } from "../../type/type";
import MoreVert from "../../component/reviewComponent/MoreVert";
import useTimeAgo from "../../hooks/useTimeAgo";
import Country from "../../component/Profile/ConuntryIcon";
import Badges from "../../component/Profile/BadgeWindow";
import defaultUserPhoto from "../../assets/user-3296.svg";

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

type RepliesCardProps = {
  replies: Reply[]; // 更新這裡的型別為 Reply（回覆的陣列）
  setReplies: React.Dispatch<React.SetStateAction<Reply[] | null>>; // 正確型別
};

function RepliesCard({ replies, setReplies }: RepliesCardProps) {
  const handleRemoveReply = (success: boolean, replyId: number) => {
    if (success) {
      setReplies((prevReplies) => {
        if (!prevReplies) return [];
        // 根據 replyId 過濾掉要刪除的回覆
        const updatedReplies = prevReplies?.filter(
          (reply) => reply.replyId !== replyId
        );
        return updatedReplies;
      });
    }
  };

  return (
    <CommentCards>
      {replies &&
        replies.map((data) => (
          <CommentCard key={data.replyId}>
            <Head>
              <HeadShot
                src={data.userPhoto ? data.userPhoto : defaultUserPhoto}
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
                  reviewOrReply={"reply"}
                  userId={data.userId}
                  onRemoveReply={handleRemoveReply}
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
                      likeCount={data.likeCount}
                      isLike={data.isLike}
                    />
                  </div>
                </SocialBlock>
              </UserReviewFooter>
            </HeadRight>
          </CommentCard>
        ))}
    </CommentCards>
  );
}

export default RepliesCard;
