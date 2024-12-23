import styled from "styled-components";
import cubes from "../../assets/cubes.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray300}; /* 設定底色 */
  background-image: url(${cubes}); /* 替換為你的圖片路徑 */
  background-repeat: repeat; /* 讓背景圖片無限重複 */
  background-size: auto; /* 預設大小，可依需求調整 */
  background-position: top left; /* 圖片從左上角開始重複排列 */
`;
const Container = styled.div`
  padding: 16px 8px 0 8px;
  width: 100%;
  flex: 1;
  background-color: transparent;
`;

const ContainerPd16 = styled.div`
  padding: 16px 8px;
  width: 100%;
  flex: 1;
  background-color: transparent;
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
type IconProps = {
  $color?: string;
  $fontSize?: string;
};

const Icon = styled.span<IconProps>`
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize + "px" : "24px")};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.gray900};
  cursor: default;
`;

export { Wrapper, Container, ContainerPd16, IconImg, Icon, Img };
