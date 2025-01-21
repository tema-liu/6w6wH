import { useState } from "react";
import { IconImg } from "../Layout/LayoutComponents";
import { PopupModal } from "../PopupModel/PopupModal";
import { Item, Content, Title, TopSection, BottomSection } from "./style/badge";
import { badgeImgList, badgeRuleList } from "./data/badge";

type BadgeProps = {
  level: keyof typeof badgeImgList; // 限制 country 為 countryList 的鍵值
};

function Badges({ level }: BadgeProps) {
  const [isWindowOpen, setWindowOpen] = useState(false);

  return (
    <>
      <IconImg
        onClick={() => {
          setWindowOpen(!isWindowOpen);
        }}
        src={badgeImgList[level]}
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
                          badgeImgList[item as keyof typeof badgeImgList]
                        ) {
                          return (
                            <IconImg
                              style={{ width: "22px", height: "22px" }}
                              key={item}
                              src={
                                badgeImgList[item as keyof typeof badgeImgList]
                              }
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
