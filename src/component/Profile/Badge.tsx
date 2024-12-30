import { useState } from "react";
import level1 from "../../assets/medal/Frame 1984077552.svg";
import level2 from "../../assets/medal/Frame 1984077549.svg";
import level3 from "../../assets/medal/Frame 1984077550.svg";
import level4 from "../../assets/medal/Group 48097690.svg";
import level5 from "../../assets/medal/Frame 1984077553.svg";
import level6 from "../../assets/medal/Frame 1984077554.svg";
import { CircleImg } from "../layout/LayoutComponents";
import { PopupModal } from "../popupModel/PopupModal";
import { Item, Content, Title, TopSection, BottomSection } from "./style/badge";

const badgeList = {
  level1: level1,
  level2: level2,
  level3: level3,
  level4: level4,
  level5: level5,
  level6: level6,
};

const badgeRuleList = {
  grade: [
    "Grade",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
  ],
  Integral: [
    "Integral",
    "0 points",
    "50 points",
    "100 points",
    "500 points",
    "1000 points",
    "2000+ points",
  ],
  badge: ["Badge", "level1", "level2", "level3", "level4", "level5", "level6"],
};

type BadgeProps = {
  level: keyof typeof badgeList; // 限制 country 為 countryList 的鍵值
};

function Badges({ level }: BadgeProps) {
  const [isWindowOpen, setWindowOpen] = useState(false);

  console.log(Object.keys(badgeRuleList));
  return (
    <>
      <CircleImg
        onClick={() => {
          setWindowOpen(!isWindowOpen);
        }}
        src={badgeList[level]}
        alt={level}
      />
      {isWindowOpen && (
        <PopupModal
          canActive={true}
          isActive={isWindowOpen}
          text="Badges"
          content={
            <Content>
              <TopSection>
                <Title>Local guide level</Title>
                <p>
                  The more points you contribute, the more points you can
                  advance to a higher level.
                </p>
              </TopSection>
              <BottomSection>
                {Object.keys(badgeRuleList).map((key) => {
                  const items =
                    badgeRuleList[key as keyof typeof badgeRuleList];
                  return (
                    <Item key={key}>
                      {items.map((item, index) => {
                        if (
                          key === "badge" &&
                          badgeList[item as keyof typeof badgeList]
                        ) {
                          return (
                            <CircleImg
                              style={{ width: "22px", height: "22px" }}
                              key={item}
                              src={badgeList[item as keyof typeof badgeList]}
                              alt={item}
                            />
                          );
                        }
                        return <p key={`${key}-${index}`}>{item}</p>;
                      })}
                    </Item>
                  );
                })}
              </BottomSection>
            </Content>
          }
          onClose={() => {
            setWindowOpen(!isWindowOpen);
          }}
        />
      )}
    </>
  );
}

export default Badges;
