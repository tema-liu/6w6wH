import styled from "styled-components";
import bugIcon from "../../assets/bug.png";
import {
  TagBox,
  TitleBox,
  TitleBoxIcon,
  TitleBoxText,
} from "../../component/TitleBox";
import { StarRating } from "../../component/StarRating";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";

const ShopCard = styled.div``;
const Box = styled(TagBox)`
  padding: 32px 16px 96px 16px;
  justify-content: start;
  flex-direction: column;
  gap: 0;
  row-gap: 8px;
  max-width: 340px;
`;
const ShopName = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  top: 35px;
  left: -112px;
  gap: 6px;
  @media screen and (max-width: 375px) {
    top: 9%;
    left: -130px;
  }
  h2 {
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
  }
  img {
  }
`;

const ShopImg = styled.img`
  border-radius: 24px;
  width: 236px;
  height: 216px;
  object-fit: cover;
  object-position: center;
`;
const ShopMain = styled.div`
  display: flex;
`;
const ShopNameContainer = styled.div`
  position: relative;
  width: 64px;
  margin-right: 8px;
  overflow: hidden;
`;

const Review = styled.div`
  display: flex;
  p {
    padding: 8px;
  }
`;
const HeadShot = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: auto auto;
`;
const ShopCards = styled.div`
  /* filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000002a);
  will-change: filter; */
  display: flex;
  column-gap: 4px;
  overflow-x: auto;
  margin-left: -8px;
  margin-right: -8px;
  padding: 0 8px;
  /* 隱藏滾動條 - Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* IE */
  -ms-overflow-style: none;
`;

function HotShopList() {
  return (
    <ShopCards>
      <ShopCard>
        <TitleBox color={"secondary"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>November Picks</TitleBoxText>
        </TitleBox>
        <Box>
          <ShopMain>
            <ShopNameContainer>
              <ShopName>
                <StarRating width={112} height={16} star={5} />
                <h2>Left Bank Rendezvous Cafe 南國人文美食坊</h2>
              </ShopName>
            </ShopNameContainer>
            <ShopImg src={photo} alt="photo" />
          </ShopMain>
          <Review>
            <HeadShot src={photo} alt="photo" />
            <p>
              Kopi susu is super yummy! Nice ambient and service! Come hang out!
            </p>
          </Review>
        </Box>
      </ShopCard>
      <ShopCard>
        <TitleBox color={"outline1"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>November Picks</TitleBoxText>
        </TitleBox>
        <Box>
          <ShopMain>
            <ShopNameContainer>
              <ShopName>
                <StarRating width={112} height={16} star={5} />
                <h2>Left Bank Rendezvous Cafe 南國人文美食坊</h2>
              </ShopName>
            </ShopNameContainer>
            <ShopImg src={photo} alt="photo" />
          </ShopMain>
          <Review>
            <HeadShot src={photo} alt="photo" />
            <p>
              Kopi susu is super yummy! Nice ambient and service! Come hang out!
            </p>
          </Review>
        </Box>
      </ShopCard>
      <ShopCard>
        <TitleBox color={"outline2"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>November Picks</TitleBoxText>
        </TitleBox>
        <Box>
          <ShopMain>
            <ShopNameContainer>
              <ShopName>
                <StarRating width={112} height={16} star={5} />
                <h2>Left Bank Rendezvous Cafe 南國人文美食坊</h2>
              </ShopName>
            </ShopNameContainer>
            <ShopImg src={photo} alt="photo" />
          </ShopMain>
          <Review>
            <HeadShot src={photo} alt="photo" />
            <p>
              Kopi susu is super yummy! Nice ambient and service! Come hang out!
            </p>
          </Review>
        </Box>
      </ShopCard>
      <ShopCard>
        <TitleBox color={"outline3"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>November Picks</TitleBoxText>
        </TitleBox>
        <Box>
          <ShopMain>
            <ShopNameContainer>
              <ShopName>
                <StarRating width={112} height={16} star={5} />
                <h2>Left Bank Rendezvous Cafe 南國人文美食坊</h2>
              </ShopName>
            </ShopNameContainer>
            <ShopImg src={photo} alt="photo" />
          </ShopMain>
          <Review>
            <HeadShot src={photo} alt="photo" />
            <p>
              Kopi susu is super yummy! Nice ambient and service! Come hang out!
            </p>
          </Review>
        </Box>
      </ShopCard>
    </ShopCards>
  );
}
export default HotShopList;
