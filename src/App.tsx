import Header from "./component/header";
import { Wrapper, Container } from "./component/LayoutComponents";
import styled from "styled-components";
import leftBtn from "../assets/Frame.png";
import rightBtn from "../assets/Vector.png";
import navigateIcon from "../assets/logo_done.png";

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
`;
const StoreImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: -148px;
`;

const CarouselBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const NavigateBtn = styled.button`
  position: absolute;
  margin-left: -14px;
  margin-top: -56px;
  padding: 12px 16px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  background-color: #00000080;
  border-radius: 8px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.body};
  img {
    width: 32px;
    height: 24px;
    margin-right: 6px;
    vertical-align: middle;
  }
`;

const CollectIcon = styled.div`
  position: absolute;
  top: 0;
  right: 32px;
  display: inline-block;
  background-color: yellow;
  border-radius: 4px 4px 0 0; /* 上方圓角 */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  padding: 4px;
  .ribbon {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 40px;
    background-color: white;
    border-radius: 4px 4px 0 0; /* 上方圓角 */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  }
`;

function App() {
  return (
    <>
      <Header title={"Store Detail"} />
      <Wrapper>
        <Container>
          <ImageSection>
            <CollectIcon>
              <div className="ribbon"></div>
            </CollectIcon>
            <StoreImg src="https://picsum.photos/1000/800" alt="" />
            <BtnContainer>
              <CarouselBtn>
                <StoreImg src={leftBtn} alt="" />
              </CarouselBtn>
              <CarouselBtn>
                <StoreImg src={rightBtn} alt="" />
              </CarouselBtn>
            </BtnContainer>
          </ImageSection>
          <NavigateBtn>
            <img src={navigateIcon} alt="navigateIcon" />
            Navigate
          </NavigateBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
