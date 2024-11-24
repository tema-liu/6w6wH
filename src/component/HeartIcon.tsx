import { IconImg } from "./LayoutComponents";
import heartIcon from ".././assets/heart.png";
import heartClick from ".././assets/heartClick.png";
import { useState } from "react";

function HeartIcon() {
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <IconImg
      onClick={clickHandler}
      src={isLiked ? heartClick : heartIcon}
      alt="heart"
    />
  );
}

export default HeartIcon;
