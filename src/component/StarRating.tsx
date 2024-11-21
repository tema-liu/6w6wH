import styled from "styled-components";
import star1 from "../assets/1.png";
import star2 from "../assets/2.png";
import star3 from "../assets/3.png";
import star4 from "../assets/4.png";
import star5 from "../assets/5.png";

interface StarRatingProps {
  star: 1 | 2 | 3 | 4 | 5;
  width?: number;
  height?: number;
  marginLeft?: number;
}

const StarImg = styled.img`
  //星星預設長寬
  width: ${({ width }) => (width ? width : 152)}px;
  height: ${({ height }) => (height ? height : 24)}px;
`;

export const StarRating = ({ star, width, height }: StarRatingProps) => {
  // 假設您有不同數量的星星圖片
  const starImages = {
    1: star1, // 1顆星的圖片
    2: star2, // 2顆星的圖片
    3: star3, // 3顆星的圖片
    4: star4, // 4顆星的圖片
    5: star5, // 5顆星的圖片
  };

  // 如果傳入的星星數量在 1-5 之間，顯示對應的圖片
  return star >= 1 && star <= 5 ? (
    <StarImg
      width={width}
      height={height}
      src={starImages[star]}
      alt={`${star} stars`}
    />
  ) : null;
};
