import Header from "../component/header";
import { Wrapper, Container } from "../component/LayoutComponents";
import leftBtn from "../assets/Frame.png";
import rightBtn from "../assets/Vector.png";
import navigateIcon from "../assets/logo_done.png";
import voiceIcon from "../assets/Voice.png";
import CollectIcon from "../component/CollectIcon";
import shareIcon from "../assets/share.png";
import { TagsBar, Tag } from "../component/TagsBar";
import {
  ImageSection,
  NavigateBtn,
  StoreImg,
  BtnContainer,
  CarouselBtn,
  PlaceDetailHeader,
  PlaceName,
  VoiceIcon,
} from "./styled";
import styled from "styled-components";
import { StarRating } from "../component/StarRating";
import { ReviewBtn } from "../component/ReviewBtn";

const ReviewSection = styled.div`
  display: flex;
  align-items: center;
  /* overflow: auto;
  scrollbar-width: none; */
  padding: 16px 0 62px 0;
`;

const ShareIcon = styled.img`
  width: 18px;
  height: 20px;
`;
const StarContent = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
  /* @media (max-width: 380px) {
    padding: 10px 0px;
  } */
`;

function StoreDetail() {
  return (
    <>
      <Wrapper>
        <Header title={"Store Detail"} />
        <Container>
          <ImageSection>
            <CollectIcon right={32} />
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
          <NavigateBtn>
            <img src={navigateIcon} alt="navigateIcon" />
            <h2>Navigate</h2>
          </NavigateBtn>
          <PlaceDetailHeader>
            <PlaceName>
              <h1> Left Bank Rendezvous Cafe 南國人文美食坊</h1>
              <VoiceIcon src={voiceIcon} alt="voice" />
            </PlaceName>
            <TagsBar>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
            </TagsBar>
            <ReviewSection>
              <ReviewBtn marginRight={16} content={"Review"}></ReviewBtn>
              <StarContent>
                <StarRating star={5} />
              </StarContent>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flex: "0",
                  padding: "0 11px 0 24px",
                }}
              >
                <ShareIcon src={shareIcon} alt="share" />
              </div>
            </ReviewSection>
          </PlaceDetailHeader>
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
