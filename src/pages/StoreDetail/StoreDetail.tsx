import Header from "../../component/layout/header";
import {
  Wrapper,
  Container,
  Icon as IconImg,
} from "../../component/layout/LayoutComponents";
import { TagsBar, Tag } from "../../component/TagsBar";
import {
  NavigateBtn,
  PlaceDetailHeader,
  PlaceName,
  VoiceIcon,
  ReviewSection,
  StarContent,
  PlaceDetailMain,
  FilterColumn,
  FilterContainer,
  FilterButtons,
} from "./style/storeDetail";
import { StarRating } from "../../component/StarRating";
import { ReviewBtn } from "../../component/Button/ReviewBtn";
import {
  SegmentedControlInner,
  RadioInput,
  Label,
} from "../../component/ToggleSwitch";
import navigateIcon from "../../assets/logo_done.png";
import { useState } from "react";
import StoreInfo from "./StoreInfo";
import CommentCards from "./CommentCards";
import StoreSwiper from "./StoreSwiper";
import { useSearchParams } from "react-router-dom";
import SuggestModalButton from "./SuggestModalButton";

function StoreDetail() {
  const [searchParams] = useSearchParams();
  const initialOption = searchParams.get("option") || "Detail";
  const [selectedOption, setSelectedOption] = useState(initialOption);
  // 處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <Header title={"Store Detail"} />
        <Container>
          <StoreSwiper />
          <NavigateBtn>
            <img src={navigateIcon} alt="navigateIcon" />
            <h2>Navigate</h2>
          </NavigateBtn>
          <PlaceDetailHeader>
            <PlaceName>
              <h1> Left Bank Rendezvous Cafe 南國人文美食坊</h1>
              <VoiceIcon
                $isPointer={true}
                className="material-symbols-outlined"
              >
                volume_up
              </VoiceIcon>
            </PlaceName>
            <TagsBar>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
              <Tag>Multilingual (12)</Tag>
            </TagsBar>
            <ReviewSection>
              <ReviewBtn $marginRight={16} content={"Review"}></ReviewBtn>
              <StarContent>
                <StarRating star={5} />
              </StarContent>

              <IconImg
                $isPointer={true}
                style={{
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
                <Label htmlFor="Reviews">Reviews (23)</Label>
              </SegmentedControlInner>
            </form>
            {selectedOption === "Detail" && (
              <>
                <StoreInfo />
              </>
            )}
            {selectedOption === "Reviews" && (
              <>
                <FilterColumn>
                  <FilterContainer>
                    <FilterButtons name="filter" id="filter">
                      <option value="popular">Popular</option>
                      <option value="lastest">Lastest</option>
                      <option value="Replies">Replies</option>
                    </FilterButtons>
                  </FilterContainer>
                </FilterColumn>
                <CommentCards></CommentCards>
              </>
            )}
          </PlaceDetailMain>
          {selectedOption === "Detail" && <SuggestModalButton />}
        </Container>
      </Wrapper>
    </>
  );
}

export default StoreDetail;
