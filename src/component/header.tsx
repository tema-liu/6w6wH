import styled from "styled-components";
import beforeBtn from "../assets/navigate_before.png";

const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
  display: flex;
  align-items: center;
  justify-content: center; /* 使標題在主軸上居中 */
  position: sticky;
  z-index: 15;
  top: 0;
  box-shadow: 0px 8px 16px 4px #0000000a, 0px 4px 8px 0px #0000001a;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title2};
  img {
    width: 20.57px;
    padding-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const BeforeBtn = styled.img`
  width: 7.4px;
  height: 12px;
  position: absolute;
  left: 20px; /* 確保箭頭在左側，可以根據需要調整距離 */
  cursor: pointer;
`;

interface HeaderProps {
  title: string; // 這裡應該是 string 類型
  isBefore?: boolean;
}

const Header = ({ title, isBefore = true }: HeaderProps) => {
  return (
    <Wrapper>
      {isBefore && <BeforeBtn src={beforeBtn} alt="beforeBtn" />}
      <Title>
        <img src="/Frame65.png" alt="icon" /> {title}
      </Title>
    </Wrapper>
  );
};

export default Header;
