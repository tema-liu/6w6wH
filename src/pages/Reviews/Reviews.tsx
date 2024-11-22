import Header from "../../component/header";
import leftBtn from "../../assets/Frame.png";
import rightBtn from "../../assets/Vector.png";
import { Wrapper, Container, IconImg } from "../../component/LayoutComponents";
import {
  ImageSection,
  StoreImg,
  BtnContainer,
  CarouselBtn,
} from "../Reviews/styled";
import FooterNav from "../../component/FooterNav";

function Reviews() {
  return (
    <>
      <Wrapper>
        <Header title={"Reviews"} />
        <Container>
          <ImageSection>
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
        </Container>
        <FooterNav />
      </Wrapper>
    </>
  );
}

export default Reviews;
