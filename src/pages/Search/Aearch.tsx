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
import { useNavigate, useSearchParams } from "react-router-dom";
import Radio from "./Radio";
import LocationMap from "./LocationMap";
import TagCheckBox from "../../component/TagCheckBox";
import { FormTags } from "../../type/formType";
import { useForm, useWatch } from "react-hook-form";
import { Location } from "../../type/type";
import useUserLocation from "../../hooks/useUseLocation";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";
import { fetchTagsData } from "../../redux/tagList/slice";

function Search() {
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const cityTags = useSelector((state: RootState) => state.tags.cityTags);
  const categoryTags = useSelector(
    (state: RootState) => state.tags.categoryTags
  );
  const friendlyTags = useSelector(
    (state: RootState) => state.tags.friendlyTags
  );
  const errorMessage = useSelector((state: RootState) => state.tags.error);
  //API錯誤message
  const [selectedOption, setSelectedOption] = useState("North"); //初始選擇Tab
  const { location, error, getUserLocation } = useUserLocation(); //取得定位
  const [locationType, setLocationType] = useState<"user" | "station">(
    "station"
  ); //設定使用者是用定位還是區域

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const RenderTransportOptions = () => {
    if (!cityTags) return null;

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
            key={city.country}
            content={city.country}
          />
        ));
      case "Center":
        return cityTags.center.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.country}
            content={city.country}
          />
        ));
      case "South":
        return cityTags.south.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.country}
            content={city.country}
          />
        ));
      case "East":
        return cityTags.east.map((city) => (
          <Radio
            register={register}
            value={city.id}
            key={city.country}
            content={city.country}
          />
        ));
      default:
        return null;
    }
  };

  //表單格式
  const { control, register, handleSubmit } = useForm<FormTags>({
    defaultValues: {
      tags: [],
      cityId: "",
    },
  });
  //表單POST

  const onSubmit = (data: FormTags) => {
    const transformedData = data.tags.map(Number); // 自定義數據轉換
    const newParams = new URLSearchParams({
      tags: transformedData.join(","),
      cityId: data.cityId || "",
      location: location ? `${location.lat},${location.lng}` : "",
      locationType: locationType || "",
    });

    navigate(`/storeList?${newParams.toString()}`);
  };
  const prevStateRef = useRef({
    location: null as Location | null,
    cityId: "",
  });
  const cityId = useWatch({
    control,
    name: "cityId",
  });

  useEffect(() => {
    if (location !== prevStateRef.current.location) {
      location && setLocationType("user");
      prevStateRef.current.location = location;
    } else if (cityId !== prevStateRef.current.cityId) {
      cityId && setLocationType("station");
      prevStateRef.current.cityId = cityId;
    }
  }, [location, cityId]); // 監聽location跟cityId 的變化

  //避免重複調用 API
  useEffect(() => {
    if (!cityTags || !categoryTags || !friendlyTags) {
      dispatch(fetchTagsData());
    }
  }, [dispatch, cityTags, categoryTags, friendlyTags]);
  if (errorMessage) {
    console.log(errorMessage);
  }

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
