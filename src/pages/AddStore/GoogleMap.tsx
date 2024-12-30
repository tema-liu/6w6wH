import styled from "styled-components";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Location } from "../../type/type";

const MapBox = styled(Map)`
  width: 100%;
  flex: 1;
`;

type GoogleMapProps = {
  location: Location;
};

function GoogleMap({ location }: GoogleMapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <APIProvider apiKey={apiKey}>
      <MapBox
        defaultCenter={location}
        defaultZoom={16}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}

export default GoogleMap;
