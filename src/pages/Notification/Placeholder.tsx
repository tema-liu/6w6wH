import styled from "styled-components";
import {
  AnimationLine,
  Content,
  Animation,
  Circle,
} from "../../component/Placeholder/Layout";

function Placeholder() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Content
            key={`placeholder${index}`}
            $fd="row"
            $padding="16px 8px 24px 16px"
            $rowGap={16}
            $borderRadius="16px"
            $columnGap={18}
            $alignItems="center"
          >
            <AnimationLine $height={25} $width={6} />
            <Content $padding="0" $rowGap={16}>
              <Circle />
              <AnimationLine $height={25} $width={80} />
            </Content>
          </Content>
        );
      })}
    </>
  );
}

export default Placeholder;
