import styled from "styled-components";
import {
  AnimationLine,
  Content,
  Animation,
  Circle,
} from "../../component/Placeholder/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ImgSection = styled.div`
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  margin: 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
  ${Animation}
`;

const ReviewContent = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Box = styled.div`
  width: 80%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  row-gap: 8px;
`;

function Placeholder() {
  return (
    <Container>
      <div>
        <ImgSection />
        <Content $padding="16px" $rowGap={12} $borderRadius="0 0 32px 32px">
          <ReviewContent>
            <Circle />
            <Box>
              <AnimationLine $height={24} $width={20} />
              <AnimationLine $height={16} $width={50} />
              <Content $padding="16px 0" $rowGap={12}>
                <AnimationLine $height={16} />
                <AnimationLine $height={16} $width={80} />
              </Content>
            </Box>
          </ReviewContent>
        </Content>
      </div>

      <Content $padding="16px" $rowGap={12} $borderRadius="32px">
        <ReviewContent>
          <Circle />
          <Box>
            <AnimationLine $height={24} $width={20} />
            <AnimationLine $height={16} $width={50} />
            <Content $padding="16px 0" $rowGap={12}>
              <AnimationLine $height={16} />
              <AnimationLine $height={16} $width={80} />
            </Content>
          </Box>
        </ReviewContent>
        <ReviewContent>
          <Circle />
          <Box>
            <AnimationLine $height={24} $width={20} />
            <AnimationLine $height={16} $width={50} />
            <Content $padding="16px 0" $rowGap={12}>
              <AnimationLine $height={16} />
              <AnimationLine $height={16} $width={80} />
            </Content>
          </Box>
        </ReviewContent>
        <ReviewContent>
          <Circle />
          <Box>
            <AnimationLine $height={24} $width={20} />
            <AnimationLine $height={16} $width={50} />
            <Content $padding="16px 0" $rowGap={12}>
              <AnimationLine $height={16} />
              <AnimationLine $height={16} $width={80} />
            </Content>
          </Box>
        </ReviewContent>
      </Content>
    </Container>
  );
}

export default Placeholder;
