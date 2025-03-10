import styled from "styled-components";
import { Container as Cont } from "../../component/Layout/LayoutComponents";

export const Container = styled(Cont)`
  padding: 16px 8px;
  flex-direction: column;
  display: flex;
  row-gap: 24px;
`;

export const ChipGroup = styled.div``;
export const TitleBox = styled.div`
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: fit-content;
  padding: 2px 16px 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;
export const TitleBoxIcon = styled.img`
  width: 32px;
  height: auto;
`;
export const TitleBoxText = styled.h2`
  margin-left: 8px;
  display: inline-block;
`;
export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 16px;
  border-radius: 0 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 8px;
`;
export const ShopCards = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const EmptyContent = styled.div`
  padding: 16px;
`;
export const EmptyText = styled.p`
  padding: 14px 16px;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const FilterColumn = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;
export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: ""; /* 使用 Unicode 或文字製作箭頭 */
    position: absolute;
    top: 50%;
    right: 23px; /* 箭頭與右側的距離 */
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid gray; /* 控制箭頭的寬高 */
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
    color: gray;
  }
`;

export const FilterButtons = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 14px 0px;
  padding-right: 48px;
  padding-left: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 17px;
  letter-spacing: -0.41px;
  line-height: 22px;
  border-radius: 4px;
  width: 100%;
`;
