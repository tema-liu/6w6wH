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
  FilterColumn,
  FilterContainer,
  FilterButtons,
} from "./styled";
import { StarRating } from "../../component/StarRating";
import { ReviewBtn } from "../../component/ReviewBtn";
import {
  SegmentedControlInner,
  RadioInput,
  Label,
} from "../../component/ToggleSwitch";
import navigateIcon from "../../assets/logo_done.png";
import { useState } from "react";
import StoreInfo from "./StoreInfo";
import CommentCards from "./CommentCards";
import Pure from "../../component/Pure";
import SuggestForm from "./SuggestForm";
import StoreSwiper from "./StoreSwiper";
import { useSearchParams } from "react-router-dom";

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
              <VoiceIcon className="material-symbols-outlined">
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flex: "0",
                  padding: "0 8px 0 24px",
                }}
              >
                <IconImg className="material-symbols-outlined">link</IconImg>
              </div>
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
