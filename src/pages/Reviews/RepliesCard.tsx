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
import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import review from "../../assets/review.png";
import overflowIcon from "../../assets/overflow.png";
import { IconImg } from "../../component/LayoutComponents";
import { ReadMore } from "./ReadMore";
import HeartIcon from "../../component/HeartIcon";

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

function RepliesCard() {
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
            <div>
              <Icon src={overflowIcon} alt="overflow" />
            </div>
          </UserReviewTop>
          <UserReviewMain>
            <ReadMore
              text={
                " Kopi susu is super yummy! Nice ambient and service! Come hang out!"
              }
            />
          </UserReviewMain>
          <UserReviewFooter>
            <h5>3 hour ago</h5>
            <SocialBlock>
              <div>
                <h4>1.5k</h4>
                <IconImg src={review} alt="review" />
              </div>
              <div>
                <h4>4</h4>
                <HeartIcon />
              </div>
            </SocialBlock>
          </UserReviewFooter>
        </HeadRight>
      </CommentCard>
      <CommentCard>
        <Head>
          <HeadShot src={headShotIcon} alt="headShot" />
          <BadgeBox>
            <img width={22} src={badge2} alt="badge2" />
          </BadgeBox>
        </Head>
        <HeadRight>
          <UserReviewTop>
            <span style={{ display: "block" }}>Ala</span>
            <div>
              <Icon src={overflowIcon} alt="overflow" />
            </div>
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
                <h4>1.5k</h4>
                <IconImg src={review} alt="review" />
              </div>
              <div>
                <h4>4</h4>
                <HeartIcon />
              </div>
            </SocialBlock>
          </UserReviewFooter>
        </HeadRight>
      </CommentCard>
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
            <div>
              <Icon src={overflowIcon} alt="overflow" />
            </div>
          </UserReviewTop>
          <UserReviewMain>
            <ReadMore
              text={
                " Really fantastic all tasted are very delicious and no worry about Halal.Really fantastic all tasted are very delicious and no worry about Halal"
              }
            />
          </UserReviewMain>
          <UserReviewFooter>
            <h5>3 hour ago</h5>
            <SocialBlock>
              <div>
                <h4>1.5k</h4>
                <IconImg src={review} alt="review" />
              </div>
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
