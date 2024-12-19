import styled from "styled-components";
import { Icon } from "../../component/layout/LayoutComponents";
import bugIcon from "../../assets/bug.png";
import { TitleBox, TitleBoxIcon, TitleBoxText } from "../../component/TitleBox";

const ShopCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0 61px 0;
`;

const ShopCardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ShopCardImg = styled.img`
  width: 100%;
  height: 424px;
  border-radius: 0 32px 32px 32px;
  object-fit: cover;
  object-position: center;
  border: 8px solid ${({ theme }) => theme.colors.gray100};
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;
const ShopCardMain = styled.div`
  margin-top: -200px;
  position: relative;
  max-width: 376px;
  border-radius: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;

const PlaceName = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  h2 {
    font-family: "mix";
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    margin-right: 36px;
    color: ${({ theme }) => theme.colors.gray900};
  }
  h6 {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const ShopCardText = styled.p`
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.gray900};
`;
const ShopCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 8px 0;
`;

const Review = styled.button`
  display: flex;
  flex: 0;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.outline3};
  padding: 12px 16px;
  margin-right: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  &:hover {
    background-color: ${({ theme }) => theme.colors.container3};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

const FooterTitle = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

function LearningResources() {
  return (
    <ShopCards>
      <ShopCardBox>
        <TitleBox color={"secondary"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>Learning Resources</TitleBoxText>
        </TitleBox>
        <ShopCardImg src="https://picsum.photos/1000/800" alt="shopImg" />
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
              <Icon className="material-symbols-outlined">download</Icon>
            </Review>
          </ShopCardFooter>
        </ShopCardMain>
      </ShopCardBox>
      <ShopCardBox>
        <TitleBox color={"outline1"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>Communication Tool</TitleBoxText>
        </TitleBox>
        <ShopCardImg src="https://picsum.photos/1000/800" alt="shopImg" />
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
              <Icon className="material-symbols-outlined">download</Icon>
            </Review>
          </ShopCardFooter>
        </ShopCardMain>
      </ShopCardBox>
    </ShopCards>
  );
}

export default LearningResources;
