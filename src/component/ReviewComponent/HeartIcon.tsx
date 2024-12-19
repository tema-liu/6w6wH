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

function HeartIcon() {
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <LikeIcon
      onClick={clickHandler}
      $fill={isLiked}
      className="material-symbols-outlined"
    >
      favorite
    </LikeIcon>
  );
}

export default HeartIcon;
