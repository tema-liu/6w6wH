import styled from "styled-components";
import { Map } from "@vis.gl/react-google-maps";

type MapContainer = {
  $padding: string;
};

export const MapContainer = styled.div<MapContainer>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding && $padding};
  width: 100%;
  height: calc(100dvh - 120px);
`;

type MapBox = {
  $borderRadius: string;
  //   $height:string;
};

export const MapBox = styled(Map)<MapBox>`
  position: relative;
  border-radius: ${({ $borderRadius }) => $borderRadius && $borderRadius};
  overflow: hidden;
  width: 100%;
  flex: 1;
`;
export const BtnBox = styled.div`
  width: 100%;
  padding: 0 8px;
  position: fixed;
  bottom: 88px;
  z-index: 1;
`;
export const OfficialPin = styled.img`
  width: 30.86px;
  height: 48px;
`;

export const ZoomBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: absolute;
  bottom: 80px;
  right: 8px;
`;
export const ZoomBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
  padding: 12px;
  opacity: 0.75;
  box-shadow: 0px 0px 4px 0px #00000033;
  box-shadow: 0px 0px 8px 0px #0000001a;
  &:active {
    opacity: 1;
  }
`;
