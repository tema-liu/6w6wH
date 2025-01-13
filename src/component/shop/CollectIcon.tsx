import { useState } from "react";
import styled from "styled-components";
import useDebounce from "../../hooks/useDebounce";

interface CollectIconProps {
  $right?: number;
  $isCollect: boolean;
}
interface ComponentProps {
  right?: number;
  isFavoriteData: boolean;
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
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
  &:active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

const CollectIcon = ({ right, isFavoriteData }: ComponentProps) => {
  const [isFavorite, setFavorite] = useState(isFavoriteData);

  useDebounce(isFavorite, 1000, () => {
    console.log("收藏成功");
  });
  return (
    <IconDiv
      $right={right}
      onClick={() => setFavorite(!isFavorite)}
      $isCollect={isFavorite}
    >
      <Icon $isCollect={isFavorite}>
        <div className="ribbon"></div>
      </Icon>
    </IconDiv>
  );
};

export default CollectIcon;
