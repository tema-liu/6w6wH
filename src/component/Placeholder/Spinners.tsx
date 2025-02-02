import styled, { keyframes } from "styled-components";

const preloader = keyframes`
  100% {
    transform: scale(1.5);
  }
`;

// Styled Loader 容器
export const Loader = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 0;
`;

// Styled Element
export const Element = styled.div<{ $size: string; $pointColor: string }>`
  border-radius: 100%;
  border: ${({ $size, $pointColor, theme }) =>
    `${$size} solid ${theme.colors[$pointColor]}`};

  &:nth-child(1) {
    animation: ${preloader} 0.6s ease-in-out alternate infinite;
  }

  &:nth-child(2) {
    animation: ${preloader} 0.6s ease-in-out alternate 0.2s infinite;
  }

  &:nth-child(3) {
    animation: ${preloader} 0.6s ease-in-out alternate 0.4s infinite;
  }
`;

type SpinnerProps = {
  size: string;
  pointColor: string;
};

function Spinner({ size, pointColor }: SpinnerProps) {
  return (
    <Loader>
      <Element $size={size} $pointColor={pointColor}></Element>
      <Element $size={size} $pointColor={pointColor}></Element>
      <Element $size={size} $pointColor={pointColor}></Element>
    </Loader>
  );
}

export default Spinner;
