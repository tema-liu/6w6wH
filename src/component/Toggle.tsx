import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Label = styled.label`
  position: relative;
  width: 52px;
  height: 24px;
  background: #1d1b201f;
  border-radius: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  visibility: hidden;
`;

type CircleProps = {
  isChecked: boolean;
};

const Circle = styled.div<CircleProps>`
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  top: 4px;
  position: absolute;
  left: 3px;
  animation: ${({ isChecked }) => (isChecked ? toggleOn : toggleOff)} 0.4s ease
    forwards;
`;

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Label>
      <Input
        type="checkbox"
        id="dark-mode"
        checked={isChecked}
        onChange={handleToggle}
      />
      <Circle isChecked={isChecked} />
    </Label>
  );
};

const toggleOn = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(30px);
  }
`;

const toggleOff = keyframes`
  0% {
    transform: translate(30px);
  }
  100% {
    transform: translate(0);
  }
`;

export default Toggle;
