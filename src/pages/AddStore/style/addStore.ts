import styled from "styled-components";
import { Container } from "../../../component/layout/LayoutComponents";

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

export const AddStoreContainer = styled(Container)`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(rgba(0, 0, 0, 0.04) 0px 4px 16px)
    drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px);
  will-change: filter;
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 16px 16px;
  padding: 16px;
  height: 100%;
`;

export const StationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;
