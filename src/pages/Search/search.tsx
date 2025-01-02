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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "./Radio";
import LocationMap from "./LocationMap";
import TagCheckBox from "../../component/TagCheckBox";
import { FormTags } from "../../type/formType";
import { useForm } from "react-hook-form";

const category = [
  { id: 1, name: "Food" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Services" },
  { id: 4, name: "Traffic" },
  { id: 5, name: "Leisure" },
  { id: 6, name: "Medical" },
];

const friendly = [
  { id: 7, name: "Friendly" },
  { id: 8, name: "Halal" },
  { id: 9, name: "Multilingual" },
  { id: 10, name: "Communication aids" },
  { id: 11, name: "online shopping" },
];

function Search() {
  const navigate = useNavigate();
  //單選nav
  const [selectedOption, setSelectedOption] = useState("North");
  const [selectedStation, setSelectedStation] = useState<(string | null)[]>([
    null,
    null,
  ]);

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const location: {
    North: string[];
    Center: string[];
    South: string[];
    East: string[];
  } = {
    North: ["Taipei City", "Keelung City", "Taoyuan City", "Hsinchu City"],
    Center: [
      "Taichung City",
      "Changhua County",
      "Nantou County",
      "Miaoli County",
    ],
    South: ["Tainan City", "Kaohsiung City", "Chiayi City", "Pingtung County"],
    East: ["Yilan County", "Hualien County", "Taitung County"],
  };

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "Location":
        return <LocationMap />;
      case "North":
        return location.North.map((station) => (
          <Radio
            key={station}
            content={station}
            isCheck={
              selectedStation[0] === "North" && selectedStation[1] === station
            }
            onChange={() => {
              setSelectedStation(["North", station]);
            }}
          />
        ));
      case "Center":
        return location.Center.map((station) => (
          <Radio
            key={station}
            content={station}
            isCheck={
              selectedStation[0] === "Center" && selectedStation[1] === station
            }
            onChange={() => {
              setSelectedStation(["Center", station]);
            }}
          />
        ));
      case "South":
        return location.South.map((station) => (
          <Radio
            key={station}
            content={station}
            isCheck={
              selectedStation[0] === "South" && selectedStation[1] === station
            }
            onChange={() => {
              setSelectedStation(["South", station]);
            }}
          />
        ));
      case "East":
        return location.East.map((station) => (
          <Radio
            key={station}
            content={station}
            isCheck={
              selectedStation[0] === "East" && selectedStation[1] === station
            }
            onChange={() => {
              setSelectedStation(["East", station]);
            }}
          />
        ));
      default:
        return null;
    }
  };

  const { register, handleSubmit } = useForm<FormTags>({
    defaultValues: {
      tags: [],
    },
  });

  const onSubmit = (data: FormTags) => {
    const transformedData = data.tags.map(Number); // 自定義數據轉換
    console.log(transformedData);
  };

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
              tags={category}
            />
          </div>
          <div>
            <TagCheckBox
              register={register}
              required={false}
              title="Friendly"
              tags={friendly}
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
