import styled from "styled-components";

export const SegmentedControlInner = styled.div`
  display: flex;
`;

export const RadioInput = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

type LabelProps = {
  $borderRadius?: number;
  $padding?: string;
  $background?: string;
  $backgroundActive?: string;
};

export const Label = styled.label<LabelProps>`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: ${({ $padding }) => ($padding ? $padding : "8px 0")};
  letter-spacing: -0.41px;
  text-align: center;
  transition: background, color 0.4s ease;
  background: ${({ $background, theme }) =>
    $background ? theme.colors[$background] : theme.colors.outline4};
  color: ${({ theme }) => theme.colors.gray600};

  /* First label */
  &:first-of-type {
    border-radius: ${({ $borderRadius }) =>
      $borderRadius ? `${$borderRadius}px 0 0 0` : "32px 0 0 0"};
  }

  /* Last label */
  &:last-of-type {
    border-radius: 0 32px 0 0;
    border-radius: ${({ $borderRadius }) =>
      $borderRadius ? `0 ${$borderRadius}px  0 0` : " 0 32px 0 0"};
  }

  /* Checked state */
  ${RadioInput}:checked + & {
    background: ${({ $backgroundActive, theme }) =>
      $backgroundActive
        ? theme.colors[$backgroundActive]
        : theme.colors.outline4};
    color: ${({ theme }) => theme.colors.gray900};
  }

  /* Focus state */
  ${RadioInput}:focus + & {
    background: ${({ $backgroundActive, theme }) =>
      $backgroundActive
        ? theme.colors[$backgroundActive]
        : theme.colors.outline4};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

export const Content = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;
export const TabBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px -8px 16px 4px #0000000a, 0px -4px 8px 0px #0000001a;
`;
