import styled from "styled-components";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";
import { Location } from "../../type/type";
import webIcon from "../../assets/Frame65Large.svg";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { useRef, useState } from "react";
import { Icon } from "../../component/layout/LayoutComponents";

const MapContainer = styled.div`
  position: relative;
  display: flex;
  /* padding: 16px 8px 0 8px; */
  width: 100%;
  flex: 1;
`;
const MapBox = styled(Map)`
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const BtnBox = styled.div`
  width: 100%;
  padding: 0 8px;
  position: fixed;
  bottom: 88px;
  z-index: 1;
`;
const OfficialPin = styled.img`
  width: 30.86px;
  height: 48px;
`;

const ZoomBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: absolute;
  bottom: 80px;
  right: 8px;
`;
const ZoomBtn = styled.button`
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

type GoogleMapProps = {
  location: Location;
};

function GoogleMap({ location }: GoogleMapProps) {
  const [zoom, setZoom] = useState(16);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [pinLocation, setPinLocation] = useState<Location | null>(null);

  const handleZoom = (control: "add" | "subtract") => {
    setZoom((prev) => {
      const newZoom = control === "add" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(newZoom, 22)); //控制縮放範圍
    });
  };

  return (
    <MapContainer>
      <APIProvider apiKey={apiKey} language="id">
        <MapBox
          onCameraChanged={(e) => {
            const newZoom = e.detail.zoom;
            //避免重複更新
            if (newZoom !== zoom) {
              setZoom(e.detail.zoom);
            }
          }}
          onClick={(e) => {
            setPinLocation(e.detail.latLng);
          }}
          reuseMaps={true}
          defaultCenter={location}
          zoom={zoom} //初始化時使用defaultZoom
          gestureHandling={"greedy"}
          disableDefaultUI={true} // 禁用其他 UI
          mapId={"a8c22c7ed923d362"}
        >
          <AdvancedMarker position={pinLocation}>
            <OfficialPin src={webIcon} />
          </AdvancedMarker>
        </MapBox>
        <ZoomBtnBox>
          <ZoomBtn
            onClick={() => {
              handleZoom("add");
            }}
          >
            <Icon $isPointer={true} className="material-symbols-outlined">
              add
            </Icon>
          </ZoomBtn>
          <ZoomBtn
            onClick={() => {
              handleZoom("subtract");
            }}
          >
            <Icon $isPointer={true} className="material-symbols-outlined">
              check_indeterminate_small
            </Icon>
          </ZoomBtn>
        </ZoomBtnBox>
      </APIProvider>
      <BtnBox>
        <PrimaryBtn
          onClick={() => {
            console.log("點到了!");
          }}
          disabled={!pinLocation && true}
          $fill={pinLocation ? true : false}
          $opacity={pinLocation ? 1 : 0.75}
          iconName="location_on"
          content={pinLocation ? "Confirm location" : "Edit map location"}
        />
      </BtnBox>
    </MapContainer>
  );
}

export default GoogleMap;
