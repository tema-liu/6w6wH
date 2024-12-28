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
} from "./style";

function SearchResult() {
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
          <ShopCards>
            <ShopCard />
          </ShopCards>
        </Container>
      </Wrapper>
    </>
  );
}

export default SearchResult;
