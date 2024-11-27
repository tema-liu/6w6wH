import { Wrapper, Container, IconImg } from "../../component/LayoutComponents";
import Header from "../../component/header";
import FooterNav from "../../component/FooterNav";
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
} from "./styled";
import CheckBox from "./CheckBox";
import { useState } from "react";
import searchIcon from "../../assets/search.png";
import styled from "styled-components";
import addIcon from "../../assets/addIcon.png";
import Radio from "./Radio";

const StationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 16px 16px;
  padding: 16px 16px 16px 28px;
`;

const PlusIcon = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0;
  font-size: 0;
  /* 扇形 */
  &::before {
    content: "";
    width: 42px;
    height: 42px;
    background: ${({ theme }) => theme.colors.gray400};
    border-radius: 0 0 0 16px; /* 左下圓角 */
    clip-path: circle(100% at 0% 100%); /* 創建扇形形狀 */
    display: inline-block;
  }
  img {
    position: absolute;
    bottom: 11px;
    left: 11px;
  }
`;

function Search() {
  const [selectedOption, setSelectedOption] = useState("HSR");

  // 處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  type CheckedState = {
    [key: string]: boolean;
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

  const [location, setLocation] = useState<CheckedState>({
    "R9 Central Park": false,
    "R10 Formosa Boulevard": false,
    "R11 Kaohsiung Main Station": false,
    "R13 Aozihdi": false,
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
                  key={tag} // 唯一标识
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
              {selectedOption == "Location" && <></>}
              {selectedOption == "HSR" && <></>}
              {selectedOption == "Train" && <></>}
              {selectedOption == "LRT" && <></>}
              {selectedOption == "MRT" && (
                <>
                  {Object.keys(location).map((tag) => (
                    <Radio
                      key={tag}
                      content={tag}
                      isChecked={location[tag]}
                      onChange={() => handleCheckboxChange(tag, setLocation)}
                    />
                  ))}
                </>
              )}
              <PlusIcon>
                <img src={addIcon} alt="addIcon" />
              </PlusIcon>
            </StationList>
          </div>
          <SuggestBtn>
            <IconImg src={searchIcon} alt="penIcon" />
            Search
          </SuggestBtn>
        </SearchContainer>
      </Container>
      <FooterNav />
    </Wrapper>
  );
}

export default Search;
