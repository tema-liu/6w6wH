import Header from "../../component/layout/header";
import { Wrapper, Container } from "../../component/layout/LayoutComponents";
import { TagsBar, Tag } from "../../component/shop/TagsBar";
import {
  NavigateBtn,
  PlaceDetailHeader,
  PlaceName,
  ReviewSection,
  StarContent,
  PlaceDetailMain,
  EmptyContent,
  LinkIcon,
} from "./style/storeDetail";
import { StarRating } from "../../component/StarRating";
import { ReviewBtn } from "../../component/button/ReviewBtn";
import {
  SegmentedControlInner,
  RadioInput,
  Label,
} from "../../component/ToggleSwitch";
import navigateIcon from "../../assets/logo_done.png";
import { useEffect, useState } from "react";
import StoreInfo from "./StoreInfo";
import CommentCards from "./CommentCards";
import StoreSwiper from "./StoreSwiper";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Comment, ResponseData, StoreData } from "../../type/type";
// import { mockApi, storeResultApi } from "./data";
import EmptyDisplay from "../../component/EmptyDisplay";
import SuggestModalButton from "./SuggestModalButton";
import Placeholder from "./Placeholder";
import VoiceReader from "../../component/shop/VoiceReader";
import { getStoreDetail } from "../../apis/getStoreDetail";
import { getStoreCommit } from "../../apis/getStoreCommit";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

function StoreDetail() {
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const userToken = useSelector((state: RootState) => state.auth.token);
  const [storeData, setStoreData] = useState<ResponseData<StoreData> | null>(
    null
  ); //商店詳細資料
  const [storeReviewsData, setStoreReviewsData] = useState<ResponseData<
    Comment[]
  > | null>(null); //商店評論
  const [isLoading, setIsLoading] = useState(true);
  const initialOption = searchParams.get("option") || "Detail";
  const [selectedOption, setSelectedOption] = useState(initialOption);
  // 處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const numericId = Number(id);
      console.log("numericId", numericId);
      try {
        const [result, commitList] = await Promise.all([
          getStoreDetail(numericId, userToken),
          getStoreCommit(numericId, userToken),
        ]);
        // //假資料串接
        // const result = await storeResultApi("/api/items");
        // const commitList = await mockApi("/api/items");

        //如果代碼錯誤返回首頁,可能需要跟UI討論404頁面 之後都要倒轉那裏
        if (!result.status) {
          navigator("/popular");
          return;
        }
        if (result.message === "查無店家資料") {
          navigator("/popular");
          return;
        }
        setStoreData(result ?? null);
        setStoreReviewsData(commitList ?? null);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // 呼叫非同步函式
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Header title={"Store Detail"} />
        <Container>
          <Placeholder />
        </Container>
      </Wrapper>
    );
  }

  return (
    <>
      {storeData?.data && (
        <Wrapper>
          <Header title={"Store Detail"} />
          <Container>
            <StoreSwiper
              isFavorite={storeData.data.isFavorited}
              photos={storeData.data.photos ?? []}
            />
            <NavigateBtn
              href={`https://www.google.com/maps/dir/?api=1&destination=${storeData.data.location.lat}, ${storeData.data.location.lng}&destination_place_id=${storeData.data.placeId}`}
            >
              <img src={navigateIcon} alt="navigateIcon" />
              <h2>Navigate</h2>
            </NavigateBtn>
            <PlaceDetailHeader>
              <PlaceName>
                <h1>{storeData.data.displayName}</h1>
                <VoiceReader
                  text={
                    storeData.data.displayName ? storeData.data.displayName : ""
                  }
                  $margin={"0 8px"}
                />
              </PlaceName>
              <TagsBar>
                {storeData.data.tags && storeData.data.tags.length > 0 ? (
                  storeData.data.tags.map((tag) => (
                    <Tag
                      key={tag.tagName}
                    >{`${tag.tagName} (${tag.count})`}</Tag>
                  ))
                ) : (
                  <Tag>There are no review yet</Tag>
                )}
              </TagsBar>
              <ReviewSection>
                <ReviewBtn
                  navigate={storeData.data.id}
                  $marginRight={16}
                  content={"Review"}
                ></ReviewBtn>
                <StarContent>
                  <StarRating
                    star={storeData.data.starCount as 0 | 1 | 2 | 3 | 4 | 5}
                  />
                </StarContent>
                <LinkIcon
                  $isPointer={true}
                  className={"material-symbols-outlined"}
                >
                  link
                </LinkIcon>
              </ReviewSection>
            </PlaceDetailHeader>
            <PlaceDetailMain>
              <form>
                <SegmentedControlInner>
                  <RadioInput
                    id="Detail"
                    type="radio"
                    value="Detail"
                    checked={selectedOption === "Detail"}
                    onChange={handleOptionChange}
                  />
                  <Label htmlFor="Detail">Detail</Label>
                  <RadioInput
                    id="Reviews"
                    type="radio"
                    value="Reviews"
                    checked={selectedOption === "Reviews"}
                    onChange={handleOptionChange}
                  />
                  <Label htmlFor="Reviews">{`Reviews (${
                    storeReviewsData?.data?.length ?? 0
                  })`}</Label>
                </SegmentedControlInner>
              </form>
              {selectedOption === "Detail" && (
                <>{storeData.data && <StoreInfo data={storeData.data} />}</>
              )}
              {selectedOption === "Reviews" && (
                <>
                  {storeReviewsData?.data &&
                  storeReviewsData.data.length > 0 ? (
                    <>
                      <CommentCards data={storeReviewsData.data} />
                    </>
                  ) : (
                    <EmptyContent>
                      <EmptyDisplay
                        onClick={() => {
                          navigator(`/postComment/${storeData.data?.id}`);
                        }}
                        content="There are no review yet"
                        iconStyle="reviews"
                        btnText="Leave your review"
                      />
                    </EmptyContent>
                  )}
                </>
              )}
            </PlaceDetailMain>
            {selectedOption === "Detail" && <SuggestModalButton />}
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default StoreDetail;
