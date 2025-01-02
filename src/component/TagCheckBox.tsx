import bugIcon from "../assets/bug.png";
import { TagBox, TitleBox, TitleBoxIcon, TitleBoxText } from "./TitleBox";
import CheckBox from "../pages/Search/CheckBox";
import styled from "styled-components";
import { SearchTag } from "../type/type";
import { UseFormRegister } from "react-hook-form";
import { FormTags } from "../type/formType";

const StyledTitleBox = styled(TitleBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;

const StyledTagBox = styled(TagBox)`
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
`;
type TagCheckBoxProps = {
  tags: SearchTag[];
  title: string;
  register: UseFormRegister<FormTags>;
  required: boolean;
};

function TagCheckBox({ required, register, title, tags }: TagCheckBoxProps) {
  return (
    <div>
      <StyledTitleBox>
        <TitleBoxIcon src={bugIcon} alt="bugIcon" />
        <TitleBoxText>{title}</TitleBoxText>
      </StyledTitleBox>
      <StyledTagBox>
        {tags.map((tag) => (
          <CheckBox
            idFor={`${title}-${tag.id}`}
            key={tag.name}
            name={tag.name}
            value={tag.id}
            register={register}
            required={required}
          />
        ))}
      </StyledTagBox>
    </div>
  );
}
export default TagCheckBox;
