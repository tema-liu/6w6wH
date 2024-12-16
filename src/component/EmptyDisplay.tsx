import styled from "styled-components";
import Icon from "../assets/Frame65Large.svg";
import { Icon as IconImg } from "./LayoutComponents";

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  padding: 8px 0 16px 0;
`;
const Img = styled.img`
  width: 56.57px;
  height: 88px;
  margin: 0 auto;
`;

const Button = styled.button`
  font-size: 17px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: -0.41px;
  padding: 12px 24px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.outline3};
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

type EmptyDisplayProps = {
  content: string; // 定義 content 是字串
  iconStyle: string; // 定義 iconStyle 是字串
  btnText: string; // 定義 btnText 是字串
  children?: React.ReactNode; // children 是可選的 React 節點
  onClick?: () => void;
};

const EmptyDisplay: React.FC<EmptyDisplayProps> = ({
  content,
  iconStyle,
  btnText,
  children,
  onClick,
}) => {
  return (
    <ImgContainer>
      <Img src={Icon} alt="6w6wHIcon" />
      <Title>{content}</Title>
      {children}
      <Button onClick={onClick}>
        <IconImg className="material-symbols-outlined">{iconStyle}</IconImg>
        {btnText}
      </Button>
    </ImgContainer>
  );
};

export default EmptyDisplay;
