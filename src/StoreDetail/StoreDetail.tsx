import Header from "../component/header";
import { Wrapper, Container } from "../component/LayoutComponents";
import leftBtn from "../assets/Frame.png";
import rightBtn from "../assets/Vector.png";
import navigateIcon from "../assets/logo_done.png";
import voiceIcon from "../assets/Voice.png";
import CollectIcon from "../component/CollectIcon";
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
          </PlaceDetailHeader>
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
