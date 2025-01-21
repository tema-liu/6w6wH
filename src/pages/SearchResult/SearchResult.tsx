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
import { Dispatch, RootState } from "../../utils/redux/store";
import { useEffect, useState } from "react";
import { fetchTagsData } from "../../utils/redux/tagList/slice";
import { getStoreResult } from "../../apis/postStoreResult";
import { SearchOption } from "../../type/formType";
import type { ResponseData, SearchResult } from "../../type/type";

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
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  //取得現在網址
  const webLocation = useLocation();
  //網址取得的queryString
  const [searchParams] = useSearchParams();
  const tags =
    searchParams.get("tags")?.trim() === ""
      ? []
      : searchParams.get("tags")?.split(",").map(Number) || [];
  const cityId = searchParams.get("cityId") || "";
  const location = searchParams.get("location");
  const locationType = searchParams.get("locationType");
  const [lat, lng] = location ? location.split(",").map(Number) : [0, 0];
  const [shopList, setShopList] = useState<ResponseData<SearchResult[]> | null>(
    null
  );
  const [isLoading, setLoading] = useState(true);
  const [haveShop, setHaveShop] = useState(true);
  const [filterValue, setFilterValue] = useState("popular");

  //API搜尋參數
  const searchCriteria: SearchOption = {
    tags: tags,
    cityId: cityId,
    location: { lat: lat, lng: lng },
    locationType:
      locationType !== "user" && locationType !== "station"
        ? "station"
        : locationType,
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
      const foundItem = result?.find((item) => item.id === Number(cityId));
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

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await getStoreResult(searchCriteria, token);
      //如果發生錯誤跳轉404
      console.log("result", result);
      if (!result.status) {
        navigate("*");
        return;
      }
      if (result.message === "沒有店家") {
        setHaveShop(!haveShop);
      }
      setShopList(result);
      setTimeout(() => {
        setLoading(false);
      }, 500); // 延遲一秒後取消加載動畫
    };
    fetchData(); // 呼叫非同步函式
  }, [searchParams.toString(), token]);

  //移除tag並且再搜尋
  const clickFilterTag = (tagId: number) => {
    const removeTags = tags.filter((itemId) => itemId !== tagId);
    searchParams.set("tags", removeTags.join(","));
    navigate(`${webLocation.pathname}?${searchParams.toString()}`);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    setFilterValue(selectValue);
  };

  const starList = () => {
    if (!shopList?.data) {
      return [];
    }
    return [...shopList.data].sort((a, b) => b.starCount - a.starCount);
  };
  const repliesList = () => {
    if (!shopList?.data) {
      return [];
    }
    return [...shopList.data].sort((a, b) => {
      const replyCountA = a.reviewCount ?? 0; // 如果 a 或 reviewCount 是 undefined，默認為 0
      const replyCountB = b.reviewCount ?? 0; // 同上
      return replyCountB - replyCountA;
    });
  };
  const RenderList = () => {
    let listToRender: SearchResult[] = [];

    switch (filterValue) {
      case "popular":
        listToRender = shopList?.data || []; // 確保是數組
        break;
      case "star":
        listToRender = starList();
        break;
      case "reviews":
        listToRender = repliesList();
        break;
      default:
        listToRender = [];
    }

    return listToRender.map((shop) => (
      <ShopCard key={`${shop.placeId}-${shop.id}`} data={shop} />
    ));
  };

  return (
    <>
      <Wrapper>
        <Header title={`SearchResults(${shopList?.data?.length})`} />
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
          {haveShop && (
            <FilterColumn>
              <FilterContainer>
                <FilterButtons
                  name="filter"
                  id="filter"
                  onChange={handleFilterChange}
                >
                  <option value="popular">Popular</option>
                  <option value="star">Star</option>
                  <option value="reviews">Reviews</option>
                </FilterButtons>
              </FilterContainer>
            </FilterColumn>
          )}
          {isLoading ? (
            <Placeholder />
          ) : (
            <>
              {haveShop ? (
                <ShopCards>
                  <RenderList />
                </ShopCards>
              ) : (
                <>
                  <EmptyContent>
                    <EmptyDisplay
                      content="No venues match the filter criteria"
                      iconStyle="add_circle"
                      btnText="Add places you know"
                      children={<EmptyChildren />}
                      onClick={() => {
                        navigate("/addShop");
                      }}
                    />
                  </EmptyContent>
                  <div>
                    <EmptyText>maybe you will like......</EmptyText>
                    <ShopCards>
                      {shopList?.data?.map((data) => (
                        <ShopCard key={data.placeId} data={data} />
                      ))}
                    </ShopCards>
                  </div>
                </>
              )}
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
}

export default SearchResult;
