import Header from "../../component/layout/header";
import { Wrapper } from "../../component/layout/LayoutComponents";
import bugIcon from "../../assets/bug.png";
import { TagChips } from "../../component/TagChips";
import ShopCard from "../../component/shop/ShopCard";
import {
  Container,
  ChipGroup,
  TagBox,
  TitleBoxIcon,
  TitleBox,
  TitleBoxText,
  FilterButtons,
  FilterContainer,
  FilterColumn,
  ShopCards,
  EmptyContent,
  EmptyText,
} from "./style";
import EmptyDisplay from "../../component/EmptyDisplay";
import EmptyChildren from "./emptyChildren";
import { useNavigate } from "react-router-dom";
import Placeholder from "./Placeholder";

function SearchResult() {
  const navigate = useNavigate();

  const num = 5;

  return (
    <>
      <Wrapper>
        <Header title={`SearchResults(${num})`} />
        <Container>
          <ChipGroup>
            <TitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>R11 Kaohsiung Main Station</TitleBoxText>
            </TitleBox>
            <TagBox>
              <TagChips label={"food"} />
              <TagChips label={"Multilingual"} />
              <TagChips label={"Friendly"} />
            </TagBox>
          </ChipGroup>
          <FilterColumn>
            <FilterContainer>
              <FilterButtons name="filter" id="filter">
                <option value="popular">Popular</option>
                <option value="lastest">Lastest</option>
                <option value="Replies">Replies</option>
              </FilterButtons>
            </FilterContainer>
          </FilterColumn>
          {/* 若是沒有資料則出現Empty */}
          {/* <EmptyContent>
            <EmptyDisplay
              content="No venues match the filter criteria"
              iconStyle="add_circle"
              btnText="Add places you know"
              children={<EmptyChildren />}
              btnClick={() => {
                navigate("/addShop");
              }}
            />
          </EmptyContent> */}
          <div>
            {/* <EmptyText>maybe you will like......</EmptyText> */}
            <ShopCards>
              <ShopCard />
              <ShopCard />
            </ShopCards>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

export default SearchResult;
