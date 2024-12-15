import styled from "styled-components";
import { Icon as IconI } from "../../component/LayoutComponents";

export const NavigateBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
  z-index: 1;
  position: absolute;
  margin-left: -14px;
  margin-top: -56px;
  padding: 12px 16px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  background-color: #00000080;
  border-radius: 8px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.body};
  img {
    width: 32px;
    height: 24px;
    margin-right: 6px;
    vertical-align: middle;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.dark};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;
export const PlaceDetailHeader = styled.div`
  padding: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
export const PlaceName = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  h1 {
    font-family: "mix";
  }
`;

export const VoiceIcon = styled(IconI)`
  margin: 0 8px;
  cursor: pointer;
`;

export const ReviewSection = styled.div`
  display: flex;
  align-items: center;
  /* overflow: auto;
  scrollbar-width: none; */
  padding: 16px 0 54px 0;
`;

export const StarContent = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
  /* @media (max-width: 380px) {
    padding: 10px 0px;
  } */
`;

export const Icon = styled(IconI)`
  margin-right: 8px;
`;
export const PrIcon = styled(IconI)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PlaceDetailMain = styled.div`
  margin-top: -38px;
  margin-bottom: 16px;
  border-radius: 32px;
  box-shadow: 0px -4px 16px 4px #0000000a, 0px -2px 8px 0px #0000001a;
`;

export const SuggestBtn = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px;
  padding: 13px 0;
  margin-bottom: 25px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;

export const FilterColumn = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: flex-end;
  padding: 8px;
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
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 17px;
  letter-spacing: -0.41px;
  line-height: 22px;
  border-radius: 4px;
  width: 100%;
`;
