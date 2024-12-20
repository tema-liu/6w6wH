import { Icon } from "../layout/LayoutComponents";
import { useState } from "react";
import styled from "styled-components";
type fillProps = {
  $fill?: boolean; // 或者根据需要调整类型
};

const LikeIcon = styled(Icon)<fillProps>`
  font-variation-settings: ${({ $fill }) => ($fill ? "'FILL' 1" : "'FILL' 0")};
  color: ${({ theme, $fill }) =>
    $fill ? theme.colors.container1 : theme.colors.gray600};
  cursor: pointer;
`;

function HeartIcon({
  isLike,
  likeCount,
}: {
  isLike: boolean;
  likeCount: number;
}) {
  const [Liked, setIsLiked] = useState(isLike);
  const [count, setCount] = useState(likeCount);
  const clickHandler = () => {
    setIsLiked(!Liked);
    setCount((prev) => {
      return Liked ? prev - 1 : prev + 1;
    });
  };

  return (
    <>
      <h4>{count === 0 ? "" : count}</h4>
      <LikeIcon
        onClick={clickHandler}
        $fill={Liked}
        className="material-symbols-outlined"
      >
        favorite
      </LikeIcon>
    </>
  );
}

export default HeartIcon;
