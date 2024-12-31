import styled from "styled-components";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { Location } from "../../type/type";
import webIcon from "../../assets/Frame65Large.svg";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { useState } from "react";

const MapContainer = styled.div`
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

type GoogleMapProps = {
  location: Location;
};

function GoogleMap({ location }: GoogleMapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [pinLocation, setPinLocation] = useState<Location | null>(null);

  return (
    <MapContainer>
      <APIProvider apiKey={apiKey} language="id">
        <MapBox
          onClick={(e) => {
            setPinLocation(e.detail.latLng);
          }}
          reuseMaps={true}
          defaultCenter={location}
          defaultZoom={16}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={"a8c22c7ed923d362"}
        >
          <AdvancedMarker position={pinLocation}>
            <OfficialPin src={webIcon} />
          </AdvancedMarker>
        </MapBox>
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
