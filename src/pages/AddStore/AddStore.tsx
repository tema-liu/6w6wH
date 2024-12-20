import styled from "styled-components";
import Header from "../../component/layout/header";
import { Wrapper, Container } from "../../component/layout/LayoutComponents";
import Radio from "../Search/Radio";
import LocationMap from "../Search/LocationMap";
import { useState } from "react";

const SegmentedControlInner = styled.div`
  display: flex;
`;

const RadioInput = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.4s ease;
  background: ${({ theme }) => theme.colors.gray100};
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray900};

  /* First label */
  &:first-of-type {
    border-radius: 16px 16px 0 0;
    border-right: none;
    margin-right: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &:nth-of-type(2) {
    border-radius: 16px 0 0 0;
    border-right: none;
  }

  /* Last label */
  &:last-of-type {
    border-radius: 0 16px 0 0;
  }

  /* Checked state */
  ${RadioInput}:checked + & {
    background: ${({ theme }) => theme.colors.gray100};
    opacity: 1;
  }

  /* Focus state */
  ${RadioInput}:focus + & {
    background: ${({ theme }) => theme.colors.gray100};
    opacity: 1;
  }
`;

const AddStoreContainer = styled(Container)`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(rgba(0, 0, 0, 0.04) 0px 4px 16px)
    drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px);
  will-change: filter;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0 0 16px 16px;
  padding: 16px;
  height: 100%;
`;

const StationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

function AddStore() {
  const [selectedOption, setSelectedOption] = useState("North");

  //保存單選中的定位("MRT","R13 Aozihdi")
  const [selectedStation, setSelectedStation] = useState<(string | null)[]>([
    null,
    null,
  ]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const location: {
    North: string[];
    Center: string[];
    South: string[];
    East: string[];
  } = {
    North: [
      "Yilan County",
      "Keelung City",
      "Taipei City",

      "Taoyuan City",
      "Hsinchu City",
    ],
    Center: [
      "Taichung City",
      "Changhua County",
      "Nantou County",
      "Miaoli County",
    ],
    South: ["Tainan City", "Kaohsiung City", "Chiayi City", "Pingtung County"],
    East: ["Hualien County", "Taitung County"],
  };

  const RenderTransportOptions = () => {
    switch (selectedOption) {
      case "Location":
        return <LocationMap />;
      case "North":
        return (
          <>
            <LocationMap
              padding="0"
              noBtn={true}
              content="Select the city where the venue is located"
            />
            {location.North.map((station) => (
              <Radio
                key={station}
                content={station}
                isCheck={
                  selectedStation[0] === "North" &&
                  selectedStation[1] === station
                }
                onChange={() => {
                  setSelectedStation(["North", station]);
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
              content="Select the city where the venue is located"
            />
            {location.Center.map((station) => (
              <Radio
                key={station}
                content={station}
                isCheck={
                  selectedStation[0] === "Center" &&
                  selectedStation[1] === station
                }
                onChange={() => {
                  setSelectedStation(["Center", station]);
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
              content="Select the city where the venue is located"
            />
            {location.South.map((station) => (
              <Radio
                key={station}
                content={station}
                isCheck={
                  selectedStation[0] === "South" &&
                  selectedStation[1] === station
                }
                onChange={() => {
                  setSelectedStation(["South", station]);
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
              content="Select the city where the venue is located"
            />
            {location.East.map((station) => (
              <Radio
                key={station}
                content={station}
                isCheck={
                  selectedStation[0] === "East" &&
                  selectedStation[1] === station
                }
                onChange={() => {
                  setSelectedStation(["East", station]);
                }}
              />
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Header isBefore={false} title={"Add friendly store"} />
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
    </Wrapper>
  );
}

export default AddStore;
