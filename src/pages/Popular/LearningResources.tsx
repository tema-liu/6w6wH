import { Icon } from "../../component/Layout/LayoutComponents";
import bugIcon from "../../assets/bug.png";
import { TitleBox, TitleBoxIcon, TitleBoxText } from "../../component/TitleBox";
import {
  ShopCardBox,
  ShopCards,
  ShopCardImg,
  ShopCardMain,
  PlaceName,
  ShopCardText,
  ShopCardFooter,
  FooterTitle,
  Review,
} from "./style/learningResources";
import taiwanLifeBoardGame from "../../assets/Rectangle 5.png";
import communicationPad from "../../assets/Rectangle2.png";

function LearningResources() {
  return (
    <ShopCards>
      <ShopCardBox>
        <TitleBox color={"secondary"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>Learning Resources</TitleBoxText>
        </TitleBox>
        <ShopCardImg src={taiwanLifeBoardGame} alt="shopImg" />
        <ShopCardMain>
          <PlaceName>
            <h2>Taiwan life board game</h2>
            <h6>Indonesian: English: Chinese</h6>
          </PlaceName>
          <ShopCardText>
            Master the commonly used phrases for food, clothing, housing,
            transportation, medical treatment, religion, etc. with Chinese
            pinyin, allowing you to have a better shopping experience and learn
            Chinese from games and life for better career development.
          </ShopCardText>
          <ShopCardFooter>
            <FooterTitle>Free Download</FooterTitle>
            <Review>
              <Icon $isPointer={true} className="material-symbols-outlined">
                download
              </Icon>
            </Review>
          </ShopCardFooter>
        </ShopCardMain>
      </ShopCardBox>
      <ShopCardBox>
        <TitleBox color={"outline1"}>
          <TitleBoxIcon src={bugIcon} alt="Taiwan life board game" />
          <TitleBoxText>Communication Tool</TitleBoxText>
        </TitleBox>
        <ShopCardImg src={communicationPad} alt="Communication Pad" />
        <ShopCardMain>
          <PlaceName>
            <h2>Communication Pad</h2>
            <h6>Indonesian: English: Chinese</h6>
          </PlaceName>
          <ShopCardText>
            Provide multi-language Chinese translations for frequently used
            sentences during shopping to improve checkout speed and consumption
            experience. There are also customized menu communication pads
            available for customization.
          </ShopCardText>
          <ShopCardFooter>
            <FooterTitle>Free Download</FooterTitle>
            <Review>
              <Icon $isPointer={true} className="material-symbols-outlined">
                download
              </Icon>
            </Review>
          </ShopCardFooter>
        </ShopCardMain>
      </ShopCardBox>
    </ShopCards>
  );
}

export default LearningResources;
