import styled from "styled-components";
import beforeBtn from "../assets/navigate_before.png";

const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center; /* 使標題在主軸上居中 */
  position: relative;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title2};
  img {
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
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Wrapper>
      <BeforeBtn src={beforeBtn} alt="beforeBtn" />
      <Title>
        <img src="/Frame65.png" alt="icon" /> {title}
      </Title>
    </Wrapper>
  );
};

export default Header;
