import styled from "styled-components";
import bugIcon from "../../assets/bug.png";
import {
  TagBox,
  TitleBox,
  TitleBoxIcon,
  TitleBoxText,
} from "../../component/TitleBox";

const ShopCard = styled.div`
  filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000001a);
  will-change: filter;
`;

function HotShopList() {
  return (
    <>
      <ShopCard>
        <TitleBox color={"Secondary"}>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <TitleBoxText>November Picks</TitleBoxText>
        </TitleBox>
        <TagBox></TagBox>
      </ShopCard>
    </>
  );
}
export default HotShopList;
