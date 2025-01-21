import { useState } from "react";
import styled from "styled-components";
import useDebounce from "../../hooks/useDebounce";
import { postCollectShop } from "../../apis/postCollectShop";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import useAuthVerify from "../../hooks/useAuthVerify ";

interface CollectIconProps {
  $right?: number;
  $isCollect: boolean;
}
interface ComponentProps {
  right?: number;
  isFavoriteData: boolean;
  storeId: number;
}

const Icon = styled.div<CollectIconProps>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.warning};
  opacity: ${({ $isCollect }) => ($isCollect ? 1 : 0.75)};
  border-radius: 4px 4px 0 0; /* 上方圓角 */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  padding: 4px;

  .ribbon {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 28px;
    background-color: ${({ theme, $isCollect }) =>
      $isCollect
        ? theme.colors.warning
        : theme.colors.light}; /* 如果點擊後背景為黃色 */
    border-radius: 4px 4px 0 0; /* 上方圓角 */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  }
  &:active {
    opacity: 1;
    .ribbon {
      background-color: ${({ theme }) => theme.colors.warning};
    }
  }
  &:hover {
    opacity: 1;
    .ribbon {
      background-color: ${({ theme }) => theme.colors.warning};
    }
  }
`;

const IconDiv = styled.div<CollectIconProps>`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 0;
  right: ${(props) => props.$right}px;
  opacity: ${({ $isCollect }) => ($isCollect ? 1 : 0.75)};
  transition: all 0.25s ease;
  filter: ${({ $isCollect }) =>
    $isCollect
      ? `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))`
      : "none"};

  &:active {
    opacity: 1;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))
      drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
  }
  &:hover {
    opacity: 1;
  }
`;

const CollectIcon = ({ right, isFavoriteData, storeId }: ComponentProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(token);

  const [isFavorite, setFavorite] = useState(isFavoriteData);
  const [isAuth, setAuth] = useState(false);

  useDebounce(isFavorite, 1000, async () => {
    const collectShop = await postCollectShop(storeId, token);
    console.log(collectShop);
  });

  const clickHandler = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!isAuth) {
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return; // 如果驗證失敗結束函式
      }
      setAuth(!isAuth);
    }

    setFavorite(!isFavorite);
  };
  return (
    <IconDiv
      $right={right}
      onClick={(e) => {
        clickHandler(e);
      }}
      $isCollect={isFavorite}
    >
      <Icon $isCollect={isFavorite}>
        <div className="ribbon"></div>
      </Icon>
    </IconDiv>
  );
};

export default CollectIcon;
