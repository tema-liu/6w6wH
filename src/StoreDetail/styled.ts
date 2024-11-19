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
  margin-top: -148px;
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

export const NavigateBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
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

export const VoiceIcon = styled.img`
  width: 18px;
  height: 17.5px;
  margin: 0 11px;
`;
