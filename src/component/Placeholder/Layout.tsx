import styled, { css, keyframes } from "styled-components";

const PlaceholderAnimation = keyframes`
 0%{
    background-position: 100% 0
  }
  100%{
    background-position: -100% 0
  }
`;

const Animation = css`
  background: linear-gradient(to right, #e2e2e2, #eeeeee 20%, #e2e2e2 70%);
  background-size: 200% 100%;
  animation: ${PlaceholderAnimation} 1.5s linear infinite;
`;

type LineProps = {
  $height: number;
  $width?: number;
};
type ContentProps = {
  $rowGap?: number;
  $padding: string;
};

const AnimationLine = styled.div<LineProps>`
  position: relative;
  width: ${({ $width }) => ($width ? $width + "%" : "100%")};
  height: ${({ $height }) => $height && $height + "px"};
  border-radius: 4px;
  ${Animation}
`;

const Content = styled.div<ContentProps>`
  padding: ${({ $padding }) => $padding && $padding};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;
  row-gap: ${({ $rowGap }) => $rowGap && $rowGap + "px"};
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  ${Animation}
`;

export { Content, AnimationLine, Animation, Circle };
