import Radio from "../Search/Radio";
import {
  AddStoreContainer,
  SelectBox,
  Label,
  RadioInput,
  SegmentedControlInner,
  StationList,
} from "./style/addStore";
import { useEffect, useState } from "react";
import EmptyDisplay from "../../component/EmptyDisplay";
import { locationList, locationTab } from "./data";
import { Location } from "../../type/type";
import useUserLocation from "../../hooks/useUseLocation";
import React from "react";
import { GeneralPopupModal } from "../../component/popupModel/PopupModal";
import LocationMap from "../Search/LocationMap";
import { useNavigate } from "react-router-dom";

type SelectLocationProps = {
  selectLocation: Location | null;
  setSelectLocation: React.Dispatch<React.SetStateAction<Location | null>>;
};

function SelectLocation({
  selectLocation,
  setSelectLocation,
}: SelectLocationProps) {
  const { location, error, getUserLocation } = useUserLocation();
  const [selectedOption, setSelectedOption] = useState("south");
  const [errorWindowOpen, setErrorWindowOpen] = useState(false);
  const navigator = useNavigate();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  //透過點擊取得定位
  const handleLocation = (location: Location | null) => {
    if (selectLocation !== null) {
      return;
    } else {
      setSelectLocation(location);
    }
  };
  // useEffect監聽定位值
  useEffect(() => {
    //如果取得定位則設定定位
    if (location) {
      handleLocation(location);
    }
  }, [location]);

  // useEffect監聽error變化
  useEffect(() => {
    if (error) {
      setErrorWindowOpen(!errorWindowOpen);
    }
  }, [error]);

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "location":
        return (
          <EmptyDisplay
            $fontWeight={700}
            content="Use your location to explore your surroundings"
            iconStyle="person_pin_circle"
            btnText="Turn on location"
            onClick={() => {
              getUserLocation();
            }}
          />
        );
      case "north":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {locationList.North.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  handleLocation(item.location);
                }}
              />
            ))}
          </>
        );
      case "center":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {locationList.Center.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  handleLocation(item.location);
                }}
              />
            ))}
          </>
        );

      case "south":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {locationList.South.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  handleLocation(item.location);
                }}
              />
            ))}
          </>
        );
      case "east":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {locationList.East.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  handleLocation(item.location);
                }}
              />
            ))}
          </>
        );
    }
  };

  return (
    <AddStoreContainer>
      <SegmentedControlInner>
        {locationTab.map((item) => {
          return (
            <React.Fragment key={item.idFor}>
              <RadioInput
                id={item.idFor}
                type="radio"
                value={item.value}
                checked={selectedOption === item.value}
                onChange={handleOptionChange}
              />
              <Label htmlFor={item.idFor}>{item.title}</Label>
            </React.Fragment>
          );
        })}
      </SegmentedControlInner>
      <SelectBox>
        <StationList>
          <RenderTransportOptions />
        </StationList>
      </SelectBox>
      {errorWindowOpen && (
        <GeneralPopupModal
          onClose={() => {
            setErrorWindowOpen(!errorWindowOpen);
            navigator(0);
          }}
          isActive={errorWindowOpen}
          canActive={true}
          content={
            <EmptyDisplay
              showButton={false}
              $isIconDark={true}
              content="Unable to get location"
              children={
                <h5 style={{ color: "#7F7F7F", textAlign: "center" }}>
                  Please confirm your targeting settings
                </h5>
              }
            />
          }
        />
      )}
    </AddStoreContainer>
  );
}

export default SelectLocation;
