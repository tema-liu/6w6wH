import { Wrapper, Container, IconImg } from "../../component/LayoutComponents";
import Header from "../../component/header";
import FooterNav from "../../component/FooterNav";
import styled from "styled-components";
import bugIcon from "../../assets/bug.png";
import {
  TitleBox,
  TitleBoxIcon,
  TitleBoxText,
  TagBox,
} from "../../component/TitleBox";
import CheckBox from "./CheckBox";
import { useState } from "react";

const StyledTitleBox = styled(TitleBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

const StyledTagBox = styled(TagBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

function Search() {
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
        <SearchContainer>
          <div>
            <StyledTitleBox>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>Category</TitleBoxText>
            </StyledTitleBox>
            <StyledTagBox
              style={{
                boxShadow:
                  "0px 4px 16px 4px #0000000A,0px 2px 8px 0px #0000001A",
              }}
            >
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
        </SearchContainer>
      </Container>
      <FooterNav />
    </Wrapper>
  );
}

export default Search;
