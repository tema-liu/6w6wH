import styled from "styled-components";
import cubes from "../assets/cubes.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px 0 8px;
  background-color: ${({ theme }) => theme.colors.gray300}; /* 設定底色 */
  background-image: url(${cubes}); /* 替換為你的圖片路徑 */
  background-repeat: repeat; /* 讓背景圖片無限重複 */
  background-size: auto; /* 預設大小，可依需求調整 */
  background-position: top left; /* 圖片從左上角開始重複排列 */
`;
const Container = styled.div`
  width: 100%;
  max-width: 768px;
  background-color: transparent;
`;

export { Wrapper, Container };
