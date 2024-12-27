import Header from "../../component/layout/header";
import badge from "../../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import {
  Wrapper,
  Container,
  Icon,
} from "../../component/layout/LayoutComponents";
import {
  Icon as IconImg,
  UserReviewFooter,
  CommentCardContent,
  CommentCardDetail,
  Head,
  HeadRight,
  BadgeBox,
  UserRating,
  UserReviewTop,
  UserReviewMain,
  HeadShot,
  SocialBlock,
} from "../Reviews/styled";
import RepliesCard from "./RepliesCard";
import MessageBox from "./MessageBox";
import HeartIcon from "../../component/ReviewComponent/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/TagsBar";
import ReviewSwiper from "./ReviewSwiper";
// import { useNavigate } from "react-router-dom";

type CommentContentProps = {
  $isHavePhoto: boolean;
};

const CommentContent = styled(CommentCardContent)<CommentContentProps>`
  padding: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "8px 8px 16px 8px" : " 16px 8px"};
  border-radius: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "0" : " 32px 32px 0 0"};
`;
const CommentDetail = styled(CommentCardDetail)`
  margin: 0;
`;
const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
  padding-top: 2px;
  padding-bottom: 10px;
`;
const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
`;

function Reviews() {
  return (
    <>
      <Wrapper>
        <Header title={"Reviews"} />
        <Container>
          <ReviewSwiper />
          <CommentContent $isHavePhoto={true}>
            <CommentDetail>
              <Head>
                <HeadShot src={headShotIcon} alt="headShot" />
                <BadgeBox>
                  <img width={22} src={badge} alt="badge" />
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReviewTop>
                  <UserRating>
                    <span style={{ display: "block" }}>Ala</span>
                    <StarRating star={3} width={112} height={16} />
                  </UserRating>
                  <div>
                    <IconImg
                      $isPointer={true}
                      className="material-symbols-outlined"
                    >
                      more_vert
                    </IconImg>
                  </div>
                </UserReviewTop>
                <UserReviewMain>
                  <Tags>
                    <Tag>Multilingual</Tag>
                    <Tag>Multilingual</Tag>
                    <Tag>Multilingual</Tag>
                    <Tag>Multilingual</Tag>
                    <Tag>Friendly</Tag>
                  </Tags>
                  <p>
                    Kopi susu is super yummy! Nice ambient and service! Come
                    hang out!
                  </p>
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>1.5k</h4>
                      <ChatIcon
                        $isPointer={true}
                        className="material-symbols-outlined"
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
              </HeadRight>
            </CommentDetail>
          </CommentContent>
          <RepliesCard />
        </Container>
        <MessageBox />
      </Wrapper>
    </>
  );
}

export default Reviews;
