import { Wrapper, Container } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import {
  SuggestBtn,
  SearchContainer,
  SegmentedControlInner,
  RadioInput,
  Label,
  StationList,
  IconImg,
} from "./styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "./Radio";
import LocationMap from "./LocationMap";
import TagCheckBox from "../../component/TagCheckBox";
import { FormTags } from "../../type/formType";
import { useForm } from "react-hook-form";
import { getSearchTags, getStationTags } from "../../apis/getTagsList";
import { Location, SearchStationTag, SearchTag } from "../../type/type";
import useUserLocation from "../../hooks/useUseLocation";

const filter = <T extends Record<string, any>>(
  data: T[],
  filterKey: keyof T,
  group: string
) => {
  return data.filter((tag) => tag[filterKey] === group);
};

function Search() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("North"); //初始選擇Tab
  const [categoryTags, setCategoryTags] = useState<SearchTag[] | null>(null); //服務標籤
  const [friendlyTags, setFriendlyTags] = useState<SearchTag[] | null>(null); //友善標籤
  const [cityTags, setCityTags] = useState<{
    north: SearchStationTag[];
    center: SearchStationTag[];
    south: SearchStationTag[];
    east: SearchStationTag[];
  }>({
    north: [],
    center: [],
    south: [],
    east: [],
  });
  const { location, error, getUserLocation } = useUserLocation(); //取得定位
  const [locationType, setLocationType] = useState<"user" | "station">(
    "station"
  ); //設定使用者是用定位還是區域

  const prevStateRef = useRef({
    location: null as Location | null,
    cityId: "",
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "Location":
        return (
          <LocationMap
            location={location}
            error={error}
            getUserLocation={getUserLocation}
          />
        );
      case "North":
        return cityTags.north.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.county}
            content={city.county}
          />
        ));
      case "Center":
        return cityTags.center.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.county}
            content={city.county}
          />
        ));
      case "South":
        return cityTags.south.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.county}
            content={city.county}
          />
        ));
      case "East":
        return cityTags.east.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.county}
            content={city.county}
          />
        ));
      default:
        return null;
    }
  };

  //表單格式
  const { watch, register, handleSubmit } = useForm<FormTags>({
    defaultValues: {
      tags: [],
      cityId: "",
    },
  });
  //表單POST
  const onSubmit = (data: FormTags) => {
    const transformedData = data.tags.map(Number); // 自定義數據轉換
    console.log({
      tags: transformedData,
      cityId: data.cityId,
      location: location,
      locationType: locationType,
    });
  };

  useEffect(() => {
    const formData = watch();
    const cityId = formData.cityId;

    if (location !== prevStateRef.current.location) {
      location && setLocationType("user");
      prevStateRef.current.location = location;
    } else if (cityId !== prevStateRef.current.cityId) {
      cityId && setLocationType("station");
      prevStateRef.current.cityId = cityId;
    }
  }, [location, watch("cityId")]); // 監聽location跟cityId 的變化

  useEffect(() => {
    const fetchData = async () => {
      const cityResult = await getStationTags();
      const result = await getSearchTags(); // 調用 API 函式
      if (cityResult.status) {
        // 更新 cityTags 狀態
        setCityTags({
          north: filter(cityResult.data!, "area", "North"),
          center: filter(cityResult.data!, "area", "Center"),
          south: filter(cityResult.data!, "area", "South"),
          east: filter(cityResult.data!, "area", "East"),
        });
      } else {
        console.log(result.message || "Failed to fetch tags"); // 設置錯誤訊息
      }
      if (result.status) {
        const category = filter(result.data!, "group", "Category");
        const friendly = filter(result.data!, "group", "Friendly");
        setCategoryTags(category);
        setFriendlyTags(friendly);
      } else {
        console.log(result.message || "Failed to fetch tags"); // 設置錯誤訊息
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header title={"Search"} />
      <Container>
        <SearchContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TagCheckBox
              register={register}
              required={false}
              title="Category"
              tags={categoryTags || []}
            />
          </div>
          <div>
            <TagCheckBox
              register={register}
              required={false}
              title="Friendly"
              tags={friendlyTags || []}
            />
          </div>
          <div
            style={{
              filter:
                "drop-shadow(0px 4px 16px #0000000A) drop-shadow(0px 2px 8px #0000001A)",
              willChange: "filter",
            }}
          >
            <SegmentedControlInner>
              <RadioInput
                id="Location"
                type="radio"
                value="Location"
                checked={selectedOption === "Location"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="Location">Location</Label>
              <RadioInput
                id="North"
                type="radio"
                value="North"
                checked={selectedOption === "North"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="North">North</Label>
              <RadioInput
                id="Center"
                type="radio"
                value="Center"
                checked={selectedOption === "Center"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="Center">Center</Label>
              <RadioInput
                id="South"
                type="radio"
                value="South"
                checked={selectedOption === "South"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="South">South</Label>
              <RadioInput
                id="East"
                type="radio"
                value="East"
                checked={selectedOption === "East"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="East">East</Label>
            </SegmentedControlInner>
            <StationList>
              <RenderTransportOptions />
            </StationList>
          </div>
          <SuggestBtn
            onClick={() => {
              navigate("/storeList");
            }}
          >
            <IconImg className="material-symbols-outlined">search</IconImg>
            Search
          </SuggestBtn>
        </SearchContainer>
      </Container>
    </Wrapper>
  );
}

export default Search;
