import styled from "styled-components";

export const SelectBox = styled.label`
  display: flex;
  align-items: center;
  column-gap: 8px;
  position: relative;

  &::after {
    content: ""; /* 使用 Unicode 或文字製作箭頭 */
    position: absolute;
    top: 50%;
    right: 8px; /* 箭頭與右側的距離 */
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.gray600}; /* 控制箭頭的寬高 */
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
  }
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 32px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.gray600};
  text-align: end;
  text-align-last: end; //適用於ios
  &:focus,
  &:active {
    text-align: start; /* 確保選擇框選單顯示時的對齊方式 */
  }
`;
