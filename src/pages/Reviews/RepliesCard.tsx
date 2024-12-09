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
import HeartIcon from "../../component/HeartIcon";
import { useState } from "react";
import { Reply } from "../../type/type";
import { badgeImages } from "../../constants/imageResources";
import MoreVert from "../../component/MoreVert";

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

type RepliesCardProps = {
  data: Reply; // 更新這裡的型別為 Reply（回覆的陣列）
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
              <MoreVert userID={data.userID} replyID={data.replyID} />
            </UserReviewTop>
            <UserReviewMain>
              <ReadMore text={data.comment} />
            </UserReviewMain>
            <UserReviewFooter>
              <h5>{new Date(data.postedAt).toLocaleString()}</h5>
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
