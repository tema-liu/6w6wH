import styled from "styled-components";
import beforeBtn from "../../assets/navigate_before.png";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/Frame65Large.svg";
import { useEffect, useRef, useState } from "react";

type HeaderStyleProps = {
  $isScrollTop: boolean;
};

const Wrapper = styled.header<HeaderStyleProps>`
  width: 100%;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.gray200};
  display: flex;
  align-items: center;
  justify-content: center; /* 使標題在主軸上居中 */
  position: sticky;
  z-index: 15;
  top: ${({ $isScrollTop }) => ($isScrollTop ? "0px" : "-48px")};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 8px 16px 4px #0000000a, 0px 4px 8px 0px #0000001a;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title2};
  column-gap: 4px;
  padding: 8px 0;
  line-height: 28px;
  letter-spacing: 0.35px;

  img {
    width: 20.57px;
    height: 32px;
  }
`;
const BeforeBtn = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  cursor: pointer;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Arrow = styled.img`
  width: 7.4px;
  height: 12px; /* 確保箭頭在左側，可以根據需要調整距離 */
`;

const Menu = styled.span`
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

interface HeaderProps {
  title?: string; // 這裡應該是 string 類型
  isBefore?: boolean;
  navigate?: string;
  menu?: boolean;
}

const Header = ({
  title,
  isBefore = true,
  navigate,
  menu = false,
}: HeaderProps) => {
  const navigator = useNavigate();
  const [isScrollTop, setScrollTop] = useState(true);
  const prevScrollY = useRef(window.scrollY || 0); // 使用 useRef 來儲存前一個滾動位置

  //如果有指定函數返回指定函數操作，其餘返回上一頁
  const handleBeforeClick = () => {
    if (navigate) {
      navigator(navigate);
    } else {
      navigator(-1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // 修正 Safari誤差
      const currentScrollY = Math.max(0, window.scrollY);

      if (
        currentScrollY >= maxScrollHeight - 2 || // 避免 Safari誤判
        currentScrollY < prevScrollY.current
      ) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper $isScrollTop={isScrollTop}>
      {isBefore && (
        <BeforeBtn onClick={handleBeforeClick}>
          <Arrow src={beforeBtn} alt="beforeBtn" />
        </BeforeBtn>
      )}
      {title && (
        <Title>
          <img src={icon} alt="icon" />
          {title}
        </Title>
      )}
      {menu && (
        <Menu
          className="material-symbols-outlined"
          onClick={() => {
            navigator("/menu");
          }}
        >
          menu
        </Menu>
      )}
    </Wrapper>
  );
};

export default Header;
