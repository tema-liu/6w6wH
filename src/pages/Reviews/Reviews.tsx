import Header from "../../component/header";
import badge from "../../assets/badge.png";
import badge2 from "../../assets/badge2.png";
import overflowIcon from "../../assets/overflow.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import leftBtn from "../../assets/Frame.png";
import rightBtn from "../../assets/Vector.png";
import { Wrapper, Container, IconImg } from "../../component/LayoutComponents";
import {
  UserReviewFooter,
  Icon,
  ImageSection,
  StoreImg,
  BtnContainer,
  CarouselBtn,
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
import FooterNav from "../../component/FooterNav";
import review from "../../assets/review.png";
import RepliesCard from "./RepliesCard";
import MessageBox from "./MessageBox";
import HeartIcon from "../../component/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/TagsBar";

const CommentContent = styled(CommentCardContent)`
  padding: 8px 8px 16px 8px;
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

function Reviews() {
  return (
    <>
      <Wrapper>
        <Header title={"Reviews"} />
        <Container>
          <ImageSection>
            <StoreImg src="https://picsum.photos/1000/800" alt="" />
            <BtnContainer>
              <CarouselBtn>
                <StoreImg src={leftBtn} alt="leftBtn" />
              </CarouselBtn>
              <CarouselBtn>
                <StoreImg src={rightBtn} alt="rightBtn" />
              </CarouselBtn>
            </BtnContainer>
          </ImageSection>
          <CommentContent>
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
                    <Icon src={overflowIcon} alt="overflow" />
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
                      <IconImg src={review} alt="review" />
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
          <MessageBox />
        </Container>
      </Wrapper>
    </>
  );
}

export default Reviews;
