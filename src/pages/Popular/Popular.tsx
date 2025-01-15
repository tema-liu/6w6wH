import styled from "styled-components";
import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import AdSwiper from "./AdSwiper";
import PopularMarquee from "./PopularMarquee";
import HotShopList from "./HotShopList";
import HotReviews from "./HotReviews";
import LearningResources from "./LearningResources";
import { useEffect, useState } from "react";
import { PopularStore, ReviewOrReply } from "../../type/type";
import { mockApi } from "./data";
import { getPopularMarquee } from "../../apis/getPopularMarquee";
import { getStoreTop } from "../../apis/getStoreTop";
import { getCommentTop } from "../../apis/getCommentTop";
import { RootState } from "../../utils/redux/store";
import { useSelector } from "react-redux";

const HomeContainer = styled(Container)`
  padding-top: 0px;
`;

function Popular() {
  const [tagsMarquee, setTagsMarquee] = useState<number[]>([]);
  const [popularStore, setPopularStore] = useState<PopularStore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topReview, setTopReview] = useState<ReviewOrReply | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("topReview", topReview);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [marquee, storeTop, commentTop, result] = await Promise.all([
          getPopularMarquee(),
          getStoreTop(),
          getCommentTop(token),
          mockApi("/api/items"),
        ]);
        if (marquee.status && marquee.data) {
          setTagsMarquee(marquee.data);
        }
        if (storeTop.status && storeTop.data) {
          setPopularStore(storeTop.data);
        }
        if (commentTop.status && commentTop.data) {
          setTopReview(commentTop.data);
        }
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
          {topReview && <HotReviews data={topReview} />}
          <LearningResources />
        </HomeContainer>
      </Wrapper>
    </>
  );
}

export default Popular;
