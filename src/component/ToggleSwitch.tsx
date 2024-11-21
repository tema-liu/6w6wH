import styled from "styled-components";

export const SegmentedControlInner = styled.div`
  display: flex;
`;

export const RadioInput = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

export const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 8px 0;
  letter-spacing: -0.41px;
  text-align: center;
  transition: opacity 0.4s ease;
  background: ${({ theme }) => theme.colors.outline4};
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray900};

  /* First label */
  &:first-of-type {
    border-radius: 32px 0 0 0;
    border-right: none;
  }

  /* Last label */
  &:last-of-type {
    border-radius: 0 32px 0 0;
  }

  /* Checked state */
  ${RadioInput}:checked + & {
    background: ${({ theme }) => theme.colors.outline4};
    opacity: 1;
  }

  /* Focus state */
  ${RadioInput}:focus + & {
    background: ${({ theme }) => theme.colors.outline4};
    opacity: 1;
  }
`;
