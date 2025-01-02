import styled from "styled-components";
import EmptyDisplay from "../../component/EmptyDisplay";
import useUserLocation from "../../hooks/useUseLocation";

type pdProps = {
  $padding: string;
};
const ImgContainer = styled.div<pdProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding};
`;

function LocationMap() {
  const { location, error, getUserLocation } = useUserLocation();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      {!location && (
        <ImgContainer $padding={"22px 0"}>
          <EmptyDisplay
            iconStyle="person_pin_circle"
            $isIconDark={error ? true : false}
            content={
              error
                ? "Unable to get location"
                : "Use your location to explore your surroundings"
            }
            children={
              error && (
                <h5 style={{ textAlign: "center", color: "#7F7F7F" }}>
                  Please confirm your targeting settings
                </h5>
              )
            }
            showButton={error ? false : true}
            btnText="Turn on location"
            onClick={() => {
              getUserLocation();
            }}
          />
        </ImgContainer>
      )}
      {location && (
        <iframe
          width={"100%"}
          height={"221"}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location?.lat},${location?.lng}&zoom=18&language=id`}
        ></iframe>
      )}
    </>
  );
}

export default LocationMap;
