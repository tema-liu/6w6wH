import styled from "styled-components";
import { TagBox } from "../../../component/TitleBox";

export const ShopCard = styled.div``;
export const Box = styled(TagBox)`
  padding: 32px 16px 96px 16px;
  justify-content: start;
  flex-direction: column;
  gap: 0;
  row-gap: 8px;
  max-width: 340px;
`;
export const ShopName = styled.div`
  position: absolute;
  width: 216px;
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  overflow: hidden;
  top: 86px;
  left: -63px;
  gap: 6px;

  h2 {
    color: ${({ theme }) => theme.colors.gray900};
    white-space: nowrap;
    overflow: hidden;
    font-family: mix;
  }
`;

export const ShopImg = styled.img`
  border-radius: 24px;
  width: 236px;
  height: 216px;
  object-fit: cover;
  object-position: center;
`;
export const ShopMain = styled.div`
  display: flex;
`;
export const ShopNameContainer = styled.div`
  position: relative;
  width: 64px;
  margin-right: 8px;
  overflow: hidden;
`;

export const Review = styled.div`
  display: flex;
  p {
    padding: 8px;
    color: ${({ theme }) => theme.colors.gray900};
  }
`;
export const HeadShot = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: auto auto;
`;
export const ShopCards = styled.div`
  display: flex;
  column-gap: 4px;
  overflow-x: auto;
  margin-left: -8px;
  margin-right: -8px;
  padding: 0 8px;
  /* 隱藏滾動條 - Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* IE */
  -ms-overflow-style: none;
`;
