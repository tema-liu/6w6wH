import styled from "styled-components";
import {
  MapContainer,
  MapBox,
  ZoomBtnBox,
  ZoomBtn,
  OfficialPin,
  BtnBox,
} from "./style/googleMap";
import { AdvancedMarker, APIProvider, Pin } from "@vis.gl/react-google-maps";
import { AddPlaceList, Location } from "../../type/type";
import webIcon from "../../assets/Frame65Large.svg";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { useState } from "react";
import { Icon } from "../../component/layout/LayoutComponents";
import NearbyPlaces from "../../hooks/NearbyPlaces";
import AddStoreCard from "./AddStoreCatd";
import { Button } from "../../component/SwiperStyle";

type GoogleMapProps = {
  location: Location;
};

function GoogleMap({ location }: GoogleMapProps) {
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [zoom, setZoom] = useState(16);
  const [pinLocation, setPinLocation] = useState<Location | null>(null); //主要pin的定位
  const [isLocationConfirmed, setLocationConfirmed] = useState(false); //是否確認定位
  const [placeList, setPlaceList] = useState<AddPlaceList[] | null>(null); //搜尋後的商店列表
  const [placeIndex, setPlaceIndex] = useState(0);

  const handleCounter = (
    min: number,
    max: number,
    control: "add" | "subtract",
    state: number,
    setUseState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const newCount = control === "add" ? state + 1 : state - 1;
    const clampedCount = Math.max(min, Math.min(newCount, max)); // 限制範圍
    if (clampedCount !== placeIndex) {
      setUseState(clampedCount);
    }
  };

  return (
    <MapContainer $padding={placeList ? "16px 8px" : "0"}>
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
            //選定地點後禁制更動地標
            if (!isLocationConfirmed) {
              setPinLocation(e.detail.latLng);
            }
          }}
          $borderRadius={placeList ? "32px 32px 0 0" : "none"}
          reuseMaps={true}
          defaultCenter={location}
          zoom={zoom} //初始化時使用defaultZoom
          gestureHandling={"greedy"}
          disableDefaultUI={true} // 禁用其他 UI
          mapId={mapId}
        >
          {isLocationConfirmed && pinLocation && (
            <NearbyPlaces location={pinLocation} setPlaceList={setPlaceList} />
          )}
          <AdvancedMarker position={pinLocation}>
            <OfficialPin src={webIcon} />
          </AdvancedMarker>

          {placeList?.map((item, index) => {
            const match = index === placeIndex;
            return (
              <AdvancedMarker key={item.placeId} position={item.location}>
                <Pin
                  background={match ? "#FF0000" : "#171D1E"}
                  borderColor={"none"}
                  glyphColor={"white"}
                  scale={0.8}
                />
              </AdvancedMarker>
            );
          })}
          {placeList && placeList.length > 0 && (
            <>
              <Button
                onClick={() => {
                  handleCounter(
                    0,
                    placeList.length - 1,
                    "add",
                    placeIndex,
                    setPlaceIndex
                  );
                }}
                $bottom={"calc(100% / 2)"}
                className="swiper-button-next"
              >
                <Icon $isPointer={true} className="material-symbols-outlined">
                  chevron_right
                </Icon>
              </Button>
              <Button
                onClick={() => {
                  handleCounter(
                    0,
                    placeList.length - 1,
                    "subtract",
                    placeIndex,
                    setPlaceIndex
                  );
                }}
                $bottom={"calc(100% / 2)"}
                className="swiper-button-prev"
              >
                <Icon $isPointer={true} className="material-symbols-outlined">
                  chevron_left
                </Icon>
              </Button>
            </>
          )}
        </MapBox>
        {!placeList && (
          <ZoomBtnBox>
            <ZoomBtn
              onClick={() => {
                handleCounter(0, 22, "add", zoom, setZoom);
              }}
            >
              <Icon $isPointer={true} className="material-symbols-outlined">
                add
              </Icon>
            </ZoomBtn>
            <ZoomBtn
              onClick={() => {
                handleCounter(0, 22, "subtract", zoom, setZoom);
              }}
            >
              <Icon $isPointer={true} className="material-symbols-outlined">
                check_indeterminate_small
              </Icon>
            </ZoomBtn>
          </ZoomBtnBox>
        )}
      </APIProvider>
      {!isLocationConfirmed && (
        <BtnBox>
          <PrimaryBtn
            onClick={() => {
              setLocationConfirmed(!isLocationConfirmed);
            }}
            disabled={!pinLocation && true}
            $fill={pinLocation ? true : false}
            $opacity={pinLocation ? 1 : 0.75}
            iconName="location_on"
            content={pinLocation ? "Confirm location" : "Edit map location"}
          />
        </BtnBox>
      )}
      {placeList && placeList.length > 0 && (
        <>
          <AddStoreCard
            index={placeList.length - 1 === placeIndex ? 0 : placeIndex + 1}
            data={placeList[placeIndex]}
            setIndex={setPlaceIndex}
          />
        </>
      )}
    </MapContainer>
  );
}

export default GoogleMap;
