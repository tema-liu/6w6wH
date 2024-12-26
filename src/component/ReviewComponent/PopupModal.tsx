import styled, { keyframes } from "styled-components";
import bugIcon from "../../assets/bug2.png";
import { TitleBoxIcon, TitleBoxText } from "../TitleBox";

// 淡入動畫
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 淡出動畫
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Overlay = styled.div<{ $isVisible: boolean }>`
  z-index: 5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000080;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.2s
    ease-out;
`;

const TitleBox = styled.div`
  text-align: center;
  margin: 0 24px;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.colors.outline2};
  padding: 4px 16px 0 16px;
`;
const Text = styled(TitleBoxText)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  padding-bottom: 2px;
`;

const Popup = styled.div<{ $isVisible: boolean }>`
  transition: all 0.5s ease-in-out;
  position: relative;
  top: 12%;
  margin: 0 auto;
  max-width: 956px;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.5s
    ease-out;
`;
const Info = styled.div`
  border-radius: 0 0 16px 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  margin: 0 24px;
`;
const GeneralInfo = styled(Info)`
  border-radius: 16px;
`;

type PopupModalProps = {
  content: React.ReactNode; // content 是 React 節點，可以是字串、HTML 或 React 元素
  text: string;
  canActive?: boolean; //是否可點擊黑色區域關閉
  isActive?: boolean;
  onClose?: () => void;
};

type GeneralPopupModal = {
  content: React.ReactNode; // content 是 React 節點，可以是字串、HTML 或 React 元素
  canActive?: boolean; //是否可點擊黑色區域關閉
  isActive?: boolean;
  onClose?: () => void;
};

export function PopupModal({
  content,
  text,
  canActive = false,
  isActive = false,
  onClose,
}: PopupModalProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canActive && e.target instanceof Element && onClose) {
      onClose(); // 調用傳入的關閉函數
    }
  };

  return (
    <Overlay
      $isVisible={isActive}
      onClick={canActive ? handleOverlayClick : undefined}
    >
      <Popup
        $isVisible={isActive}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TitleBox>
          <TitleBoxIcon src={bugIcon} alt="bugIcon" />
          <Text>{text}</Text>
        </TitleBox>
        <Info>{content}</Info>
      </Popup>
    </Overlay>
  );
}

export function GeneralPopupModal({
  content,
  canActive = false,
  isActive = false,
  onClose,
}: GeneralPopupModal) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canActive && e.target instanceof Element && onClose) {
      onClose(); // 調用傳入的關閉函數
    }
  };

  return (
    <Overlay
      $isVisible={isActive}
      onClick={canActive ? handleOverlayClick : undefined}
    >
      <Popup
        $isVisible={isActive}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <GeneralInfo>{content}</GeneralInfo>
      </Popup>
    </Overlay>
  );
}
