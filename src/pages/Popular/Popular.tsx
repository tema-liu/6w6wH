import styled from "styled-components";
import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import AdSwiper from "./AdSwiper";
import PopularMarquee from "./PopularMarquee";
import HotShopList from "./HotShopList";
import HotReviews from "./HotReviews";
import LearningResources from "./LearningResources";
import { useEffect, useState } from "react";
import { hotReviewData } from "../../type/type";
import { mockApi } from "./data";

const HomeContainer = styled(Container)`
  padding-top: 0px;
`;

function Popular() {
  const [response, setResponse] = useState<hotReviewData>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mockApi("/api/items");
        setResponse(result ?? null); //假設res為undefined或null 設為null
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Header title={`Popular`} isBefore={false} />
      </Wrapper>
    );
  }
  return (
    <>
      <Wrapper>
        <Header title={`Popular`} isBefore={false} />
        <HomeContainer>
          <AdSwiper />
          <PopularMarquee />
          <HotShopList />
          {response && <HotReviews res={response} />}
          <LearningResources />
        </HomeContainer>
      </Wrapper>
    </>
  );
}

export default Popular;
