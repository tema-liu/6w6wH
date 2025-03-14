import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  height: 100%;
`;

export const SuggestBtn = styled.button`
  width: 100%;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px;
  padding: 12px 0;
  margin: auto 0 16px 0;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;

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
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.4s ease;
  background: ${({ theme }) => theme.colors.gray100};
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray900};

  /* First label */
  &:first-of-type {
    border-radius: 16px 16px 0 0;
    border-right: none;
    margin-right: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &:nth-of-type(2) {
    border-radius: 16px 0 0 0;
    border-right: none;
  }

  /* Last label */
  &:last-of-type {
    border-radius: 0 16px 0 0;
  }

  /* Checked state */
  ${RadioInput}:checked + & {
    background: ${({ theme }) => theme.colors.gray100};
    opacity: 1;
  }

  /* Focus state */
  ${RadioInput}:focus + & {
    background: ${({ theme }) => theme.colors.gray100};
    opacity: 1;
  }
`;

export const StationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 16px 16px;
  padding: 16px;
`;

export const IconImg = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
