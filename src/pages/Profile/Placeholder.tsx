import styled from "styled-components";
import {
  AnimationLine,
  Content,
  Square,
} from "../../component/Placeholder/Layout";

function Placeholder() {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <Content
            key={`placeholder${index}`}
            $fd="row"
            $padding="16px 8px 24px 16px"
            $rowGap={16}
            $columnGap={18}
            $alignItems="center"
          >
            <Content $padding="0" $rowGap={16}>
              <Content $padding="0" $rowGap={16} $fd="row" $columnGap={4}>
                <Square />
                <Square />
                <Square />
              </Content>
              <AnimationLine $height={24} $width={100} />
              <Content $padding="0" $rowGap={8}>
                <AnimationLine $height={16} $width={10} />
                <AnimationLine $height={16} $width={30} />
                <AnimationLine $height={16} $width={40} />
                <AnimationLine $height={16} $width={80} />
                <AnimationLine $height={16} $width={25} />
              </Content>
              <Content $padding="0" $fd="row" $alignItems="center">
                <AnimationLine $height={10} $width={20} />
                <Content
                  $padding="0"
                  $fd="row"
                  $justifyContent="end"
                  $alignItems="center"
                  $columnGap={8}
                >
                  <AnimationLine $height={20} $width={15} />
                  <AnimationLine $height={20} $width={15} />
                </Content>
              </Content>
            </Content>
          </Content>
        );
      })}
    </>
  );
}

export default Placeholder;
