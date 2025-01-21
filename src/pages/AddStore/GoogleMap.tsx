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
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { useState } from "react";
import { Icon } from "../../component/Layout/LayoutComponents";
import NearbyPlaces from "../../hooks/NearbyPlaces";
import AddStoreCard from "./AddStoreCard";
import { Button } from "../../component/SwiperStyle";
import AddStoreForm from "./AddStoreForm";

type GoogleMapProps = {
  location: Location;
};

function GoogleMap({ location }: GoogleMapProps) {
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [zoom, setZoom] = useState(18);
  const [pinLocation, setPinLocation] = useState<Location | null>(null); //主要pin的定位
  const [isLocationConfirmed, setLocationConfirmed] = useState(false); //是否確認定位
  const [placeList, setPlaceList] = useState<AddPlaceList[] | null>(null); //搜尋後的商店列表
  const [placeIndex, setPlaceIndex] = useState(0); //現在瀏覽店家的index
  const [currentStore, setCurrentStore] = useState<AddPlaceList | null>(null); //最終選擇的店家

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
      {/* 地圖渲染區域 */}
      <APIProvider apiKey={apiKey} language="id">
        <MapBox
          onCameraChanged={(e) => {
            const newZoom = e.detail.zoom;
            //調整地圖大小避免重複更新
            if (newZoom !== zoom) {
              setZoom(e.detail.zoom);
            }
          }}
          onClick={(e) => {
            //選定地點後禁止更動地標
            if (!isLocationConfirmed) {
              setPinLocation(e.detail.latLng);
            }
          }}
          $height={placeList ? "calc((100dvh - 131px) / 2)" : "100%"}
          $borderRadius={placeList ? "32px 32px 0 0" : "none"}
          reuseMaps={true}
          center={placeList && pinLocation}
          defaultCenter={location}
          zoom={zoom}
          gestureHandling={"greedy"}
          disableDefaultUI={true} // 禁用其他 UI
          mapId={mapId}
        >
          {/*確認地點以及pinLocation定位時觸發搜尋商家API */}
          {isLocationConfirmed && pinLocation && (
            <NearbyPlaces location={pinLocation} setPlaceList={setPlaceList} />
          )}
          {/* 商家列表Maker */}
          <AdvancedMarker zIndex={10} position={pinLocation}>
            <OfficialPin src={webIcon} />
          </AdvancedMarker>
          {placeList?.map((item, index) => {
            const match = index === placeIndex;
            return (
              <AdvancedMarker
                zIndex={match ? 5 : 1}
                key={item.placeId}
                position={item.location}
              >
                <Pin
                  background={match ? "#FF0000" : "#171D1E"}
                  borderColor={"none"}
                  glyphColor={"white"}
                  scale={0.8}
                />
              </AdvancedMarker>
            );
          })}
          {/* 還沒選擇店家以及有商家列表才出現按鈕 */}
          {!currentStore && placeList && placeList.length > 0 && (
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
      </APIProvider>

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
            currentStore={currentStore}
            setCurrentStore={setCurrentStore}
          />
        </>
      )}
      {currentStore && <AddStoreForm {...currentStore} />}
    </MapContainer>
  );
}

export default GoogleMap;
