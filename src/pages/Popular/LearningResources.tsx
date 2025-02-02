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
import { useTranslation } from "react-i18next";

function LearningResources() {
  const { t } = useTranslation("popular");

  return (
    <ShopCards>
      <ShopCardBox>
        <TitleBox color={"secondary"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>{`${t("learning_resources")}`}</TitleBoxText>
        </TitleBox>
        <ShopCardImg src={taiwanLifeBoardGame} alt="shopImg" />
        <ShopCardMain>
          <PlaceName>
            <h2>{`${t("taiwan_life_board_game")}`}</h2>
            <h6>Indonesian: English: Chinese</h6>
          </PlaceName>
          <ShopCardText>{`${t("master_phrases")}`}</ShopCardText>
          <ShopCardFooter>
            <FooterTitle>{`${t("free_download")}`}</FooterTitle>
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
          <TitleBoxText>{`${t("communication_tool")}`}</TitleBoxText>
        </TitleBox>
        <ShopCardImg src={communicationPad} alt="Communication Pad" />
        <ShopCardMain>
          <PlaceName>
            <h2>{`${t("communication_pad")}`}</h2>
            <h6>Indonesian: English: Chinese</h6>
          </PlaceName>
          <ShopCardText>{`${t("multi_language_translation")}`}</ShopCardText>
          <ShopCardFooter>
            <FooterTitle>{`${t("free_download")}`}</FooterTitle>
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
