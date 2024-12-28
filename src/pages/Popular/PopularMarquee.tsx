import Marquee from "react-fast-marquee";
import {
  TagChip,
  Content,
  MarqueeContainer,
  TagList,
} from "./style/popularMarquee";

type TagChipProps = {
  label: string;
};

const TagChips = ({ label }: TagChipProps) => (
  <TagChip
    onClick={() => {
      //此做點擊標籤後搜尋邏輯
      console.log(label);
    }}
  >
    <Content>{label}</Content>
  </TagChip>
);

function PopularMarquee() {
  const tagArr: string[] = ["Food", "Shopping", "Services", "Traffic"];
  return (
    <MarqueeContainer>
      <Marquee pauseOnClick={true} style={{ gap: "8px" }}>
        <TagList>
          {tagArr.map((e) => {
            return <TagChips label={e} />;
          })}
        </TagList>
      </Marquee>
    </MarqueeContainer>
  );
}

export default PopularMarquee;
