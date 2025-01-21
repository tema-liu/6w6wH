import { Icon } from "../Layout/LayoutComponents";
import { useState } from "react";
import styled from "styled-components";
import useAuthVerify from "../../hooks/useAuthVerify ";
import { RootState } from "../../utils/redux/store";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { postCommentLike } from "../../apis/postCommentLike";
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
  type,
  likeId,
  isLike,
  likeCount,
}: {
  type: "comment" | "reply";
  likeId: number;
  isLike: boolean;
  likeCount: number;
}) {
  const [Liked, setIsLiked] = useState(isLike);
  const [count, setCount] = useState(likeCount);
  const [isAuth, setAuth] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(token);
  const option = {
    type: type,
    id: likeId,
  };
  useDebounce(Liked, 1000, async () => {
    await postCommentLike(option, token);
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
    setIsLiked(!Liked);
    setCount((prev) => {
      return Liked ? prev - 1 : prev + 1;
    });
  };

  return (
    <>
      <h4>{count === 0 ? "" : count}</h4>
      <LikeIcon
        $isPointer={true}
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
