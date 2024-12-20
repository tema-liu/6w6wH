import Pure from "./ReviewComponent/Pure";
import styled from "styled-components";
import photo from "../assets/Frame65Large.svg";

type windowProps = {
  num?: number;
  content: string;
  func?: () => void;
  isActive: boolean;
  onClose?: () => void;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  padding-bottom: 24px;
  row-gap: 8px;
`;

const Img = styled.img`
  width: 56.57px;
  height: 88px;
`;

const ThankyouTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: center;
`;
const PointText = styled.h5`
  color: ${({ theme }) => theme.colors.gray600};
`;

const Btn = styled.button`
  width: 100%;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.outline2};
  padding: 9px 0;
`;

function GoodJobWindow({ content, num, func, isActive, onClose }: windowProps) {
  return (
    <Pure
      isActive={isActive}
      canActive={false}
      text="Good job"
      onClose={onClose}
      content={
        <>
          <Content>
            <Img src={photo} alt="logo_done" />
            <ThankyouTitle>
              Thank you for your contribution to the community
            </ThankyouTitle>
            <PointText>{`+${num ? num : 1} points`}</PointText>
          </Content>
          <Btn onClick={func}>{content}</Btn>
        </>
      }
    />
  );
}

export default GoodJobWindow;
