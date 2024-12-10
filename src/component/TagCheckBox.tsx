import { useState } from "react";
import bugIcon from "../assets/bug.png";
import { TagBox, TitleBox, TitleBoxIcon, TitleBoxText } from "./TitleBox";
import CheckBox from "../pages/Search/CheckBox";
import styled from "styled-components";

const StyledTitleBox = styled(TitleBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

const StyledTagBox = styled(TagBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

function TagCheckBox({ tags }: { tags: string[] }) {
  const [clickTag, setClickTag] = useState<String[]>([]);

  const handleCheckboxChange = (tag: string) => {
    setClickTag((prev) => {
      return prev.includes(tag)
        ? prev.filter((item) => item != tag)
        : [...prev, tag];
    });
  };

  return (
    <div>
      <StyledTitleBox>
        <TitleBoxIcon src={bugIcon} alt="bugIcon" />
        <TitleBoxText>Category</TitleBoxText>
      </StyledTitleBox>
      <StyledTagBox>
        {tags.map((tag) => (
          <CheckBox
            key={tag}
            content={tag}
            isChecked={clickTag.includes(tag)}
            onChange={handleCheckboxChange}
          />
        ))}
      </StyledTagBox>
    </div>
  );
}

export default TagCheckBox;
