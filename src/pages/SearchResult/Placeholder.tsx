import styled from "styled-components";
import {
  AnimationLine,
  Animation,
  Circle,
} from "../../component/Placeholder/Layout";

const ShopCardBox = styled.div`
  position: relative;
`;

const ShopCardImg = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 424px;
  border-radius: 32px;
  ${Animation}
`;

const ShopCardMain = styled.div`
  margin-top: -200px;
  position: relative;
  max-width: 350px;
  border-radius: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const ShopName = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Main = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;
const ReviewText = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
const Footer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
const FooterRight = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
`;
function Placeholder() {
  return (
    <>
      {/* 重複3個 */}
      {[...Array(2)].map((_, index) => (
        <ShopCardBox key={"card" + index}>
          <ShopCardImg />
          <ShopCardMain>
            <ShopName>
              <AnimationLine $height={24} />
              <AnimationLine $height={24} $width={50} />
            </ShopName>
            <AnimationLine $height={24} />
            <Main>
              <ReviewText>
                <AnimationLine $height={16} />
                <AnimationLine $height={16} />
                <AnimationLine $height={16} $width={40} />
              </ReviewText>
              <Circle />
            </Main>
            <Footer>
              <AnimationLine $height={48} $width={20} />
              <FooterRight>
                <AnimationLine $height={16} />
                <AnimationLine $height={16} />
              </FooterRight>
            </Footer>
          </ShopCardMain>
        </ShopCardBox>
      ))}
    </>
  );
}

export default Placeholder;
