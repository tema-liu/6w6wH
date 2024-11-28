import React, { useState } from "react";
import styled from "styled-components";
import addIcon from "../../assets/addIcon.png";
import Radio from "./Radio";

const PlusIcon = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0;
  font-size: 0;

  &::before {
    content: "";
    width: 42px;
    height: 42px;
    background: ${({ theme }) => theme.colors.gray400};
    border-radius: 0 0 0 16px;
    clip-path: circle(100% at 0% 100%);
    display: inline-block;
  }

  img {
    position: absolute;
    bottom: 11px;
    left: 11px;
  }
`;

type ReadMoreRadioProps = {
  type: string;
  location: string[];
  selectedStation: (string | null)[];
  onStationChange: (station: (string | null)[]) => void;
  amountOfTags?: number;
};

export const ReadMoreRadio: React.FC<ReadMoreRadioProps> = ({
  type,
  location,
  selectedStation,
  onStationChange,
  amountOfTags = 7,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itCanOverflow = location.length > amountOfTags;
  const beginTags = itCanOverflow
    ? location.slice(0, amountOfTags - 1)
    : location;
  const endTags = location.slice(amountOfTags - 1);

  return (
    <>
      {beginTags.map((tag) => (
        <Radio
          key={tag}
          content={tag}
          isCheck={selectedStation[0] === type && selectedStation[1] === tag}
          onChange={() => {
            onStationChange([type, tag]);
          }}
        />
      ))}

      {itCanOverflow && (
        <>
          {isExpanded &&
            endTags.map((tag) => (
              <Radio
                key={tag}
                content={tag}
                isCheck={
                  selectedStation[0] === type && selectedStation[1] === tag
                }
                onChange={() => {
                  onStationChange([type, tag]);
                }}
              />
            ))}
          {!isExpanded && (
            <PlusIcon
              onClick={() => {
                console.log("Toggle Expand State:", !isExpanded);
                setIsExpanded(!isExpanded);
              }}
            >
              <img src={addIcon} alt="addIcon" />
            </PlusIcon>
          )}
        </>
      )}
    </>
  );
};
