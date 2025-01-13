import styled from "styled-components";
import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import AdSwiper from "./AdSwiper";
import PopularMarquee from "./PopularMarquee";
import HotShopList from "./HotShopList";
import HotReviews from "./HotReviews";
import LearningResources from "./LearningResources";
import { useEffect, useState } from "react";
import { PopularStore, ResponseData, ReviewOrReply } from "../../type/type";
import { mockApi } from "./data";
import { getPopularMarquee } from "../../apis/getPopularMarquee";
import { getStoreTop } from "../../apis/getStoreTop";

const HomeContainer = styled(Container)`
  padding-top: 0px;
`;

function Popular() {
  const [response, setResponse] = useState<ResponseData<ReviewOrReply> | null>(
    null
  );
  const [tagsMarquee, setTagsMarquee] = useState<number[]>([]);
  const [popularStore, setPopularStore] = useState<PopularStore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(popularStore);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [marquee, storeTop, result] = await Promise.all([
          getPopularMarquee(),
          getStoreTop(),
          mockApi("/api/items"),
        ]);
        if (marquee.status && marquee.data) {
          setTagsMarquee(marquee.data);
        }
        if (storeTop.status && storeTop.data) {
          setPopularStore(storeTop.data);
        }
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
          <PopularMarquee tags={tagsMarquee ?? []} />
          <HotShopList shopList={popularStore} />
          {response && <HotReviews data={response.data ?? null} />}
          <LearningResources />
        </HomeContainer>
      </Wrapper>
    </>
  );
}

export default Popular;
