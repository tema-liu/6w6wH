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
import { useState } from "react";
import { Reply } from "../../type/type";
import { badgeImages } from "../../constants/imageResources";
import MoreVert from "../../component/reviewComponent/MoreVert";
import useTimeAgo from "../../hooks/useTimeAgo";

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
  data: Reply[]; // 更新這裡的型別為 Reply（回覆的陣列）
};

function RepliesCard({ data }: RepliesCardProps) {
  return (
    <CommentCards>
      {data.map((data) => (
        <CommentCard key={data.replyID}>
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
            <UserReviewTop>
              <span style={{ display: "block" }}>{data.userName}</span>
              <MoreVert reviewOrReply={"reply"} userID={data.userID} />
            </UserReviewTop>
            <UserReviewMain>
              <ReadMore text={data.comment} />
            </UserReviewMain>
            <UserReviewFooter>
              <h5>{useTimeAgo(data.postedAt)}</h5>
              <SocialBlock>
                <div>
                  <HeartIcon likeCount={data.likeCount} isLike={data.isLike} />
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
