import styled from "styled-components";
import { PrimaryBtn } from "../Button/PrimaryBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 0.38px;
`;

const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

type ModelInfoProps = {
  title: string; // 標題文字
  text?: string; // 內容文字
  btnText: string; // 按鈕文字
  btnClick: () => void; // 確定按鈕的點擊事件
  cancelClick: () => void; // 取消按鈕的點擊事件
};

function ModelInfo({
  title,
  text,
  btnText,
  btnClick,
  cancelClick,
}: ModelInfoProps) {
  return (
    <Container>
      <TextContent>
        <Title>{title}</Title>
        {text && <Text>{text}</Text>}
      </TextContent>
      <BtnBox>
        <PrimaryBtn
          $padding="9px 0"
          $borderRadius={8}
          $border="1px solid #FF0000"
          $fontWeight={700}
          $bgColor="light"
          content={btnText}
          onClick={btnClick}
          $boxShadow="none"
        />
        <PrimaryBtn
          $padding="9px 0"
          $borderRadius={8}
          $boxShadow="none"
          $fontWeight={700}
          $bgColor="outline2"
          content={"Cancel"}
          onClick={cancelClick}
        />
      </BtnBox>
    </Container>
  );
}

export default ModelInfo;
