import styled from "styled-components";
import bugIcon from "../assets/bug2.png";
import { TitleBoxIcon, TitleBoxText } from "../component/TitleBox";

const Overlay = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000080;
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;

  &:target {
    visibility: visible;
    opacity: 1;
  }
`;
const TitleBox = styled.div`
  text-align: center;
  margin: 0 24px;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.colors.outline2};
  padding: 2px 16px 0 16px;
`;
const Text = styled(TitleBoxText)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

const Popup = styled.div`
  transition: all 5s ease-in-out;
  position: relative;
  top: 10%;
`;
const Info = styled.div`
  border-radius: 0 0 16px 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  margin: 0 24px;
`;

type PureProps = {
  id: string; // id 是字串
  content: React.ReactNode; // content 是 React 節點，可以是字串、HTML 或 React 元素
  text: string;
  isActive: boolean;
};

function Pure({ id, content, text, isActive }: PureProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 如果點擊的是 Overlay 本身 (非彈窗內部)
    if (isActive && e.target instanceof Element && e.target.id === "popup") {
      window.location.hash = "#close";
    }
  };

  return (
    <Overlay id={id} onClick={isActive ? handleOverlayClick : undefined}>
      <Popup>
        <TitleBox>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <Text>{text}</Text>
        </TitleBox>
        <Info> {content}</Info>
      </Popup>
    </Overlay>
  );
}

export default Pure;
