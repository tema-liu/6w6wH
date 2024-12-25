import { useState } from "react";
import {
  TabBox,
  SegmentedControlInner,
  RadioInput,
  Label,
  Content,
} from "./style/ProfileTab";
import React from "react";

export function ToggleSwitch({
  inputList,
  contentMapping,
}: {
  inputList: string[];
  contentMapping: { [key: string]: React.ReactNode };
}) {
  const [selectedOption, setSelectedOption] = useState(inputList[0]);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const bgColor = [
    {
      normal: "secondary50",
      focus: "secondary",
    },
    {
      normal: "outline150",
      focus: "outline1",
    },
    { normal: "outline250", focus: "outline2" },
  ];

  return (
    <TabBox>
      <SegmentedControlInner>
        {inputList.map((input, index) => {
          return (
            <React.Fragment key={input}>
              <RadioInput
                key={input}
                id={input}
                type="radio"
                value={input}
                checked={selectedOption === input}
                onChange={handleOptionChange}
              />
              <Label
                $background={bgColor[index].normal}
                $backgroundActive={bgColor[index].focus}
                $padding="12px 0"
                $borderRadius={16}
                htmlFor={input}
              >
                {input}
              </Label>
            </React.Fragment>
          );
        })}
      </SegmentedControlInner>
      <Content>{contentMapping[selectedOption]}</Content>
    </TabBox>
  );
}
