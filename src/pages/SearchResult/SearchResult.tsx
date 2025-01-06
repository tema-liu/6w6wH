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
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Placeholder from "./Placeholder";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchTagsData } from "../../redux/tagList/slice";

function SearchResult() {
  const dispatch: Dispatch = useDispatch();
  const cityTags = useSelector((state: RootState) => state.tags.cityTags);
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  const errorMessage = useSelector((state: RootState) => state.tags.error);
  const navigate = useNavigate();
  //取得現在網址
  const webLocation = useLocation();
  //網址取得的queryString
  const [searchParams] = useSearchParams();
  const tags = searchParams.get("tags")?.split(",").map(Number) || [];
  const cityId = Number(searchParams.get("cityId")) || 0;
  const location = searchParams.get("location");
  const locationType = searchParams.get("locationType");
  const [lat, lng] = location ? location.split(",").map(Number) : [0, 0];
  //API搜尋參數
  const searchCriteria = {
    tags: tags,
    cityId: cityId,
    location: { lat: lat, lng: lng },
    locationType: locationType,
  };

  //避免重複調用 API
  useEffect(() => {
    if (!cityTags || !categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, cityTags, categoryTags, friendlyTags]);

  //取得搜尋的title
  const searchTitle = () => {
    if (locationType === "user") {
      return "Location";
    } else {
      const result = cityTags && Object.values(cityTags).flat();
      const foundItem = result?.find((item) => item.id === cityId);
      return foundItem?.country || "ShopList"; // 使用可選鏈結確保安全
    }
  };
  //取得搜尋的tag
  const searchTags = () => {
    const tagsList = (categoryTags || [])?.concat(friendlyTags || []);
    return tagsList.filter((item) => tags.includes(item.id));
  };

  if (errorMessage) {
    console.log("errorMessage:" + errorMessage);
  }

  const num = 5;

  //移除tag並且再搜尋
  const clickFilterTag = (tagId: number) => {
    const removeTags = tags.filter((itemId) => itemId !== tagId);
    searchParams.set("tags", removeTags.join(","));
    navigate(`${webLocation.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <Wrapper>
        <Header title={`SearchResults(${num})`} />
        <Container>
          <ChipGroup>
            <TitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>{searchTitle()}</TitleBoxText>
            </TitleBox>
            <TagBox>
              {searchTags().map((tag) => {
                return (
                  <TagChips
                    value={tag.id}
                    key={tag.name}
                    label={tag.name}
                    onRemove={() => {
                      clickFilterTag(tag.id);
                    }}
                  />
                );
              })}
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
