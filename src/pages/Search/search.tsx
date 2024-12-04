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
import { ReadMoreRadio } from "./tagReadMore";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  type CheckedState = {
    [key: string]: boolean;
  };

  //單選nav
  const [selectedOption, setSelectedOption] = useState("HSR");

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
    HSR: string[];
    Train: string[];
    MRT: string[];
    LRT: string[];
  } = {
    HSR: [
      "R9 Central Park",
      "R10 Formosa Boulevard",
      "R11 Kaohsiung Main Station",
      "R13 Aozihdi",
    ],
    Train: ["R10 Formosa Boulevard"],
    MRT: [
      "R9 Central Park",
      "R10 Formosa Boulevard",
      "R11 Kaohsiung Main Station",
      "R13 Aozihdi",
      "R17",
      "R18",
      "R29",
      "R15",
    ],
    LRT: ["ASD", "ASDF", "ASDAS"],
  };

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "Location":
        return null;
      case "HSR":
        return (
          <ReadMoreRadio
            type="HSR"
            location={location.HSR}
            selectedStation={selectedStation}
            onStationChange={setSelectedStation}
          />
        );
      case "Train":
        return (
          <ReadMoreRadio
            type="Train"
            location={location.Train}
            selectedStation={selectedStation}
            onStationChange={setSelectedStation}
          />
        );
      case "LRT":
        return (
          <ReadMoreRadio
            type="LRT"
            location={location.LRT}
            selectedStation={selectedStation}
            onStationChange={setSelectedStation}
          />
        );
      case "MRT":
        return (
          <ReadMoreRadio
            type="MRT"
            location={location.MRT}
            selectedStation={selectedStation}
            onStationChange={setSelectedStation}
          />
        );
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
            console.log(category, friendly);
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
                id="HSR"
                type="radio"
                value="HSR"
                checked={selectedOption === "HSR"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="HSR">HSR</Label>
              <RadioInput
                id="Train"
                type="radio"
                value="Train"
                checked={selectedOption === "Train"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="Train">Train</Label>
              <RadioInput
                id="LRT"
                type="radio"
                value="LRT"
                checked={selectedOption === "LRT"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="LRT">LRT</Label>
              <RadioInput
                id="MRT"
                type="radio"
                value="MRT"
                checked={selectedOption === "MRT"}
                onChange={handleOptionChange}
              />
              <Label htmlFor="MRT">MRT</Label>
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
