import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;

  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

const Popup = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;

type PureProps = {
  id: string; // id 是字串
  content: React.ReactNode; // content 是 React 節點，可以是字串、HTML 或 React 元素
};

function Pure({ id, content }: PureProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 如果點擊的是 Overlay 本身 (非彈窗內部)
    if (e.target instanceof Element && e.target.id === "popup") {
      window.location.hash = "#close"; // 清空 hash 值，關閉彈窗
    }
  };

  return (
    <Overlay id={id} onClick={handleOverlayClick}>
      <Popup>{content}</Popup>
    </Overlay>
  );
}

export default Pure;
