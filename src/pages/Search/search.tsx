import { Wrapper, Container } from "../../component/LayoutComponents";
import Header from "../../component/header";
import bugIcon from "../../assets/bug.png";
import { TitleBoxIcon, TitleBoxText } from "../../component/TitleBox";
import {
  SuggestBtn,
  SearchContainer,
  StyledTagBox,
  StyledTitleBox,
  SegmentedControlInner,
  RadioInput,
  Label,
  StationList,
  IconImg,
} from "./styled";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "./Radio";
import LocationMap from "./LocationMap";

function Search() {
  const navigate = useNavigate();

  type CheckedState = {
    [key: string]: boolean;
  };

  //單選nav
  const [selectedOption, setSelectedOption] = useState("North");

  //保存單選中的定位("MRT","R13 Aozihdi")
  const [selectedStation, setSelectedStation] = useState<(string | null)[]>([
    null,
    null,
  ]);

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [category, setCategoryState] = useState<CheckedState>({
    Food: false,
    Shopping: false,
    Services: false,
  });

  const [friendly, setFriendlyState] = useState<CheckedState>({
    Friendly: false,
    Halal: false,
    Multilingual: false,
    "Communication aids": false,
    "online shopping": false,
  });

  const handleCheckboxChange = (
    tag: string,
    setState: React.Dispatch<React.SetStateAction<CheckedState>>
  ) => {
    setState((checkedState) => ({
      ...checkedState,
      [tag]: !checkedState[tag],
    }));
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

  return (
    <Wrapper>
      <Header title={"Search"} />
      <Container>
        <SearchContainer
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <StyledTitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>Category</TitleBoxText>
            </StyledTitleBox>
            <StyledTagBox>
              {/* 獲取obj的所有key值 */}
              {Object.keys(category).map((tag) => (
                <CheckBox
                  key={tag}
                  content={tag}
                  isChecked={category[tag]}
                  onChange={() => handleCheckboxChange(tag, setCategoryState)}
                />
              ))}
            </StyledTagBox>
          </div>
          <div>
            <StyledTitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>Friendly</TitleBoxText>
            </StyledTitleBox>
            <StyledTagBox>
              {Object.keys(friendly).map((tag) => (
                <CheckBox
                  key={tag} // 唯一标识
                  content={tag}
                  isChecked={friendly[tag]}
                  onChange={() => handleCheckboxChange(tag, setFriendlyState)}
                />
              ))}
            </StyledTagBox>
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
