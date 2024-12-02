import styled from "styled-components";
import Header from "../../component/header";
import { Container, Wrapper } from "../../component/LayoutComponents";
import AdSwiper from "./AdSwiper";
import PopularMarquee from "./PopularMarquee";
import HotShopList from "./HotShopList";

const HomeContainer = styled(Container)`
  padding-top: 0px;
`;

function Popular() {
  return (
    <>
      <Wrapper>
        <Header title={`Popular`} />
        <HomeContainer>
          <AdSwiper />
          <PopularMarquee />
          <HotShopList />
        </HomeContainer>
      </Wrapper>
    </>
  );
}

export default Popular;
