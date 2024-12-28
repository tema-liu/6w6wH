import bugIcon from "../../assets/bug.png";
import { TitleBox, TitleBoxIcon, TitleBoxText } from "../../component/TitleBox";
import { StarRating } from "../../component/StarRating";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import {
  ShopCard,
  ShopCards,
  Box,
  ShopMain,
  ShopNameContainer,
  ShopImg,
  ShopName,
  Review,
  HeadShot,
} from "./style/hotShopList";

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
