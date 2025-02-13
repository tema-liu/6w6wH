import styled from "styled-components";
import icon from "../assets/Frame65Large.svg";
import { Icon as IconImg } from "./Layout/LayoutComponents";

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  padding: 8px 0;
`;
type ImgPops = {
  $isIconDark: boolean;
};

const Img = styled.img<ImgPops>`
  width: 56.57px;
  height: 88px;
  margin: 0 auto;
  filter: ${({ $isIconDark }) => ($isIconDark ? "grayscale(1)" : "none")};
`;

type BtnProps = {
  $fontWeight: number;
};

const Button = styled.button<BtnProps>`
  font-size: 17px;
  line-height: 22px;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
  letter-spacing: -0.41px;
  padding: 12px 24px;
  margin: 8px auto 0 auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.outline3};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

type EmptyDisplayProps = {
  $fontWeight?: number;
  $isIconDark?: boolean;
  webIcon?: boolean;
  content: string; // 定義 content 是字串
  iconStyle?: string; // 定義 iconStyle 是字串
  btnText?: string; // 定義 btnText 是字串
  children?: React.ReactNode; // children 是可選的 React 節點
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  showButton?: boolean; //是否顯示按鈕
};

const EmptyDisplay: React.FC<EmptyDisplayProps> = ({
  $fontWeight = 400,
  $isIconDark = false,
  content,
  iconStyle,
  btnText,
  children,
  onClick,
  webIcon,
  showButton = true,
}) => {
  return (
    <ImgContainer>
      <Img $isIconDark={$isIconDark} src={icon} alt="6w6wHIcon" />
      <Title>{content}</Title>
      {children}

      {showButton && (
        <Button $fontWeight={$fontWeight} onClick={onClick}>
          {iconStyle && (
            <IconImg $isPointer={true} className="material-symbols-outlined">
              {iconStyle}
            </IconImg>
          )}
          {webIcon && <BtnIcon src={icon} />}
          {btnText}
        </Button>
      )}
    </ImgContainer>
  );
};

export default EmptyDisplay;
