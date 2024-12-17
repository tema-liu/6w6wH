import Header from "../../component/header";
import {
  Wrapper,
  Container,
  Icon as IconImg,
} from "../../component/LayoutComponents";
import { TagsBar, Tag } from "../../component/TagsBar";
import {
  NavigateBtn,
  PlaceDetailHeader,
  PlaceName,
  VoiceIcon,
  ReviewSection,
  StarContent,
  SuggestBtn,
  PlaceDetailMain,
  PrIcon,
  EmptyContent,
} from "./styled";
import { StarRating } from "../../component/StarRating";
import { ReviewBtn } from "../../component/ReviewBtn";
import {
  SegmentedControlInner,
  RadioInput,
  Label,
} from "../../component/ToggleSwitch";
import navigateIcon from "../../assets/logo_done.png";
import { useEffect, useState } from "react";
import StoreInfo from "./StoreInfo";
import CommentCards from "./CommentCards";
import Pure from "../../component/Pure";
import SuggestForm from "./SuggestForm";
import StoreSwiper from "./StoreSwiper";
import { data, useNavigate, useSearchParams } from "react-router-dom";
import { StoreDetailData, StoreReviewsData } from "../../type/type";
import { mockApi, storeResultApi } from "./data";
import EmptyDisplay from "../../component/EmptyDisplay";

function StoreDetail() {
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const [storeData, setStoreData] = useState<StoreDetailData>(null); //商店詳細資料
  const [storeReviewsData, setStoreReviewsData] =
    useState<StoreReviewsData>(null); //商店評論
  const [isLoading, setIsLoading] = useState(true);
  const initialOption = searchParams.get("option") || "Detail";
  const [selectedOption, setSelectedOption] = useState(initialOption);
  // 處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [result, storeDataRes] = await Promise.all([
          mockApi("/api/items"),
          storeResultApi("/api/items"),
        ]);
        setStoreReviewsData(result ?? null); //假設res為undefined或null 設為null
        setStoreData(storeDataRes ?? null);
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
        <Header title={"Store Detail"} />
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <Header title={"Store Detail"} />
        <Container>
          {storeData?.data.photos && (
            <StoreSwiper
              isFavorite={storeData?.data.isFavorited}
              photos={storeData?.data.photos}
            />
          )}
          <NavigateBtn
            href={`https://www.google.com/maps/dir/?api=1&destination=${storeData?.data.location.lat}, ${storeData?.data.location.lng}&destination_place_id=${storeData?.data.placeId}`}
          >
            <img src={navigateIcon} alt="navigateIcon" />
            <h2>Navigate</h2>
          </NavigateBtn>
          <PlaceDetailHeader>
            <PlaceName>
              <h1>{storeData?.data.displayName}</h1>
              <VoiceIcon className="material-symbols-outlined">
                volume_up
              </VoiceIcon>
            </PlaceName>
            <TagsBar>
              {storeData?.data.tags?.map((tag) => (
                <Tag key={tag.tagName}>{`${tag.tagName} (${tag.count})`}</Tag>
              ))}
            </TagsBar>
            <ReviewSection>
              <ReviewBtn
                navigate={storeData?.data.placeId as string}
                $marginRight={16}
                content={"Review"}
              ></ReviewBtn>
              <StarContent>
                <StarRating
                  star={storeData?.data.starCount as 0 | 1 | 2 | 3 | 4 | 5}
                />
              </StarContent>
              <IconImg
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  height: "48px",
                  width: "100%",
                  display: "flex",
                  flex: "0 1 0",
                  padding: "0px 8px 0px 24px",
                }}
                className="material-symbols-outlined"
              >
                link
              </IconImg>
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
              <>{storeData?.data && <StoreInfo data={storeData?.data} />}</>
            )}
            {selectedOption === "Reviews" && (
              <>
                {storeReviewsData?.data ? (
                  <>
                    <CommentCards data={storeReviewsData.data} />
                  </>
                ) : (
                  <EmptyContent>
                    <EmptyDisplay
                      onClick={() => {
                        navigator(`/postComment/${storeData?.data.placeId}`);
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
          {selectedOption === "Detail" && (
            <>
              <SuggestBtn href="#popup">
                <PrIcon className="material-symbols-outlined">edit</PrIcon>
                Suggest an edit
              </SuggestBtn>
              <Pure
                isActive={true}
                text="Suggest an edit"
                id="popup"
                content={<SuggestForm />}
              />
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
