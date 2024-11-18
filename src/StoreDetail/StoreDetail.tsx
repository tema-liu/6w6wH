import Header from "../component/header";
import { Wrapper, Container } from "../component/LayoutComponents";
import leftBtn from "../assets/Frame.png";
import rightBtn from "../assets/Vector.png";
import navigateIcon from "../assets/logo_done.png";
import CollectIcon from "../component/CollectIcon";
import {
  ImageSection,
  NavigateBtn,
  StoreImg,
  BtnContainer,
  CarouselBtn,
} from "./styled";

function StoreDetail() {
  return (
    <>
      <Header title={"Store Detail"} />
      <Wrapper>
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
            Navigate
          </NavigateBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
