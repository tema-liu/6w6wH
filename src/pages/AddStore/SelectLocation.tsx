import Radio from "../Search/Radio";
import {
  AddStoreContainer,
  SelectBox,
  Label,
  RadioInput,
  SegmentedControlInner,
  StationList,
} from "./style/addStore";
import { useState } from "react";
import EmptyDisplay from "../../component/EmptyDisplay";
import LocationMap from "../Search/LocationMap";
import { Location, location } from "./data";

function SelectLocation() {
  const [selectedOption, setSelectedOption] = useState("North");

  const [selectLocation, setSelectLocation] = useState<Location | null>(null);
  console.log(selectLocation);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "Location":
        return (
          <EmptyDisplay
            $fontWeight={700}
            content="Use your location to explore your surroundings"
            iconStyle="person_pin_circle"
            btnText="Turn on location"
          />
        );
      case "North":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {location.North.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  setSelectLocation(item.location);
                }}
              />
            ))}
          </>
        );
      case "Center":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {location.Center.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  setSelectLocation(item.location);
                }}
              />
            ))}
          </>
        );

      case "South":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {location.South.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  setSelectLocation(item.location);
                }}
              />
            ))}
          </>
        );
      case "East":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the  where the venue is located"
            />
            {location.East.map((item) => (
              <Radio
                key={item.station}
                content={item.station}
                isCheck={selectLocation === item.location}
                onChange={() => {
                  setSelectLocation(item.location);
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
        <RadioInput
          id="Location"
          type="radio"
          value="Location"
          checked={selectedOption === "Location"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Location">Location</Label>
        <RadioInput
          id="North"
          type="radio"
          value="North"
          checked={selectedOption === "North"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="North">North</Label>
        <RadioInput
          id="Center"
          type="radio"
          value="Center"
          checked={selectedOption === "Center"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Center">Center</Label>
        <RadioInput
          id="South"
          type="radio"
          value="South"
          checked={selectedOption === "South"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="South">South</Label>
        <RadioInput
          id="East"
          type="radio"
          value="East"
          checked={selectedOption === "East"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="East">East</Label>
      </SegmentedControlInner>
      <SelectBox>
        <StationList>
          <RenderTransportOptions />
        </StationList>
      </SelectBox>
    </AddStoreContainer>
  );
}

export default SelectLocation;
