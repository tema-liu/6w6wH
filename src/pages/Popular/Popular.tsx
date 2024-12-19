import styled from "styled-components";
import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import AdSwiper from "./AdSwiper";
import PopularMarquee from "./PopularMarquee";
import HotShopList from "./HotShopList";
import HotReviews from "./HotReviews";
import LearningResources from "./LearningResources";

const HomeContainer = styled(Container)`
  padding-top: 0px;
`;

function Popular() {
  return (
    <>
      <Wrapper>
        <Header title={`Popular`} isBefore={false} />
        <HomeContainer>
          <AdSwiper />
          <PopularMarquee />
          <HotShopList />
          <HotReviews />
          <LearningResources />
        </HomeContainer>
      </Wrapper>
    </>
  );
}

export default Popular;
