import styled from "styled-components";

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
`;

export const StoreImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: -128px;
`;

export const CarouselBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
