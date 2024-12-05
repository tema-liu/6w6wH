import { Icon } from "./LayoutComponents";
import { useState } from "react";
import styled from "styled-components";
type fillProps = {
  $fill?: boolean; // 或者根据需要调整类型
};

const LikeIcon = styled(Icon)<fillProps>`
  font-variation-settings: ${({ $fill }) => ($fill ? "'FILL' 1" : "'FILL' 0")};
  color: ${({ theme, $fill }) =>
    $fill ? theme.colors.container1 : theme.colors.gray600};
`;

function HeartIcon({ isLike }: { isLike: boolean }) {
  const [Liked, setIsLiked] = useState(isLike);

  const clickHandler = () => {
    setIsLiked(!Liked);
  };

  return (
    <LikeIcon
      onClick={clickHandler}
      $fill={Liked}
      className="material-symbols-outlined"
    >
      favorite
    </LikeIcon>
  );
}

export default HeartIcon;
