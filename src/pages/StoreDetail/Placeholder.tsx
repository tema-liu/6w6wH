import styled from "styled-components";
import {
  AnimationLine,
  Content,
  Animation,
} from "../../component/Placeholder/Layout";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 32px 32px 0 0;
  margin: 0;
  overflow: hidden; // 這很重要！確保圖片不會超出圓角範圍
  ${Animation}
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 8px;
`;

const Box = styled.div`
  display: flex;
  column-gap: 8px;
`;

const Tab = styled.div`
  border-radius: 32px 32px 0 0;
  height: 46px;
  ${Animation}
  margin-top: -46px;
`;

function Placeholder() {
  return (
    <>
      <Container />
      <Content $padding="16px 16px 70px 16px" $rowGap={12}>
        <MainTop>
          <AnimationLine $height={24} />
          <AnimationLine $height={24} $width={40} />
        </MainTop>
        <AnimationLine $height={16} />
        <AnimationLine $height={16} />
      </Content>
      <Tab />
      <Content $padding="24px 24px 32px 24px " $rowGap={32}>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
        <Box>
          <AnimationLine $height={16} $width={5} />
          <AnimationLine $height={16} />
        </Box>
      </Content>
    </>
  );
}

export default Placeholder;
