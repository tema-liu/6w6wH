import Header from "../../component/header";
import badge from "../../assets/badge.png";
import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import leftBtn from "../../assets/Frame.png";
import rightBtn from "../../assets/Vector.png";
import { Wrapper, Container, Icon } from "../../component/LayoutComponents";
import {
  Icon as IconImg,
  UserReviewFooter,
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
import RepliesCard from "./RepliesCard";
import MessageBox from "./MessageBox";
import HeartIcon from "../../component/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/TagsBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
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

function Reviews() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };

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
                    <IconImg
                      onClick={toggleMenu}
                      className="material-symbols-outlined"
                    >
                      more_vert
                    </IconImg>
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
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
                      <ChatIcon className="material-symbols-outlined">
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
          <MessageBox />
        </Container>
      </Wrapper>
    </>
  );
}

export default Reviews;
