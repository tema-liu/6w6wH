import Header from "../component/header";
import { Wrapper, Container } from "../component/LayoutComponents";
import leftBtn from "../assets/Frame.png";
import rightBtn from "../assets/Vector.png";
import navigateIcon from "../assets/logo_done.png";
import voiceIcon from "../assets/Voice.png";
import CollectIcon from "../component/CollectIcon";
import {
  ImageSection,
  NavigateBtn,
  StoreImg,
  BtnContainer,
  CarouselBtn,
} from "./styled";
import styled from "styled-components";

const PlaceDetailHeader = styled.div`
  padding: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
const PlaceName = styled.div`
  display: flex;
  align-items: center;
  font-family: mix;
`;

const VoiceIcon = styled.img`
  width: 18px;
  height: 17.5px;
  margin: 0 11px;
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
            Navigate
          </NavigateBtn>
          <PlaceDetailHeader>
            <PlaceName>
              <h1> Left Bank Rendezvous Cafe 南國人文美食坊</h1>
              <VoiceIcon src={voiceIcon} alt="voice" />
            </PlaceName>
          </PlaceDetailHeader>
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
