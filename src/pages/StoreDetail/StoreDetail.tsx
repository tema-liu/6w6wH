import Header from "../../component/header";
import { Wrapper, Container } from "../../component/LayoutComponents";
import { TagsBar, Tag } from "../../component/TagsBar";
import {
  ImageSection,
  NavigateBtn,
  StoreImg,
  BtnContainer,
  CarouselBtn,
  PlaceDetailHeader,
  PlaceName,
  VoiceIcon,
  ReviewSection,
  ShareIcon,
  StarContent,
} from "./styled";
import styled from "styled-components";
import { StarRating } from "../../component/StarRating";
import { ReviewBtn } from "../../component/ReviewBtn";
import {
  SegmentedControlInner,
  RadioInput,
  Label,
} from "../../component/ToggleSwitch";
import leftBtn from "../../assets/Frame.png";
import rightBtn from "../../assets/Vector.png";
import navigateIcon from "../../assets/logo_done.png";
import voiceIcon from "../../assets/Voice.png";
import CollectIcon from "../../component/CollectIcon";
import shareIcon from "../../assets/share.png";
import { useState } from "react";
import StoreInfo from "./StoreInfo";
const PlaceDetailMain = styled.div`
  margin-top: -38px;
  margin-bottom: 16px;
  border-radius: 32px;
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;

const ContentSwitcher = styled.div`
  padding: 0 16px;
  border-radius: 0 0 32px 32px;
  background-color: ${({ theme }) => theme.colors.light};
`;

function StoreDetail() {
  const [selectedOption, setSelectedOption] = useState("Detail");

  // 處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

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
              <ReviewBtn $marginRight={16} content={"Review"}></ReviewBtn>
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
          <PlaceDetailMain>
            <form>
              <SegmentedControlInner>
                <RadioInput
                  id="Detail"
                  type="radio"
                  name="switch"
                  value="Detail"
                  checked={selectedOption === "Detail"}
                  onChange={handleOptionChange}
                />
                <Label htmlFor="Detail">Detail</Label>
                <RadioInput
                  id="Reviews"
                  type="radio"
                  name="switch"
                  value="Reviews"
                  checked={selectedOption === "Reviews"}
                  onChange={handleOptionChange}
                />
                <Label htmlFor="Reviews">Reviews (23)</Label>
              </SegmentedControlInner>
            </form>
            <ContentSwitcher>
              {selectedOption === "Detail" && <StoreInfo />}
            </ContentSwitcher>
          </PlaceDetailMain>
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
