import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.4s ease;

  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray900};

  /* First label */
  &:first-of-type {
    border-radius: 16px 0 0 0;
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.outline1};
  }

  /* Last label */
  &:last-of-type {
    background: ${({ theme }) => theme.colors.outline2};
    border-radius: 0 16px 0 0;
  }

  /* Checked state */
  ${Input}:checked + & {
    opacity: 1;
  }

  /* Focus state */
  ${Input}:focus + & {
    opacity: 1;
  }
`;

const Title = styled.div`
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px 16px 0 0;
  margin-right: 8px;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Reviews = styled.div`
  position: relative;
  margin-top: -64px;
  filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000002a);
`;

function HotReviews() {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Reviews>
      <div style={{ display: "flex" }}>
        <Title>Thread</Title>
        <Input
          id="Popular"
          type="radio"
          value="Popular"
          checked={selectedOption === "Popular"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Popular">Popular</Label>
        <Input
          id="Review"
          type="radio"
          value="Review"
          checked={selectedOption === "Review"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Review">Review</Label>
        <Input
          id="Lastest"
          type="radio"
          value="Lastest"
          checked={selectedOption === "Lastest"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Lastest">Lastest</Label>
      </div>
    </Reviews>
  );
}

export default HotReviews;
