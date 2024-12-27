import styled from "styled-components";
import { Icon } from "../layout/LayoutComponents";
import { useNavigate } from "react-router-dom";

interface ReviewProps {
  $marginRight?: number;
  content?: string;
  setPostCommentOut?: React.Dispatch<React.SetStateAction<boolean>>;
  navigate?: string;
}

const Review = styled.button<ReviewProps>`
  gap: 6px;
  display: flex;
  flex: 0;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.outline3};
  padding: 12px 16px;
  margin-right: ${({ $marginRight }) =>
    $marginRight ? `${$marginRight}px` : 0};
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
  span {
    cursor: pointer;
  }
`;

export const ReviewBtn = ({ $marginRight, content, navigate }: ReviewProps) => {
  const navigator = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const path = `/postComment/${navigate}`;
    navigator(path);
  };

  return (
    <Review onClick={clickHandler} $marginRight={$marginRight}>
      <Icon $isPointer={true} className="material-symbols-outlined">
        reviews
      </Icon>
      {content}
    </Review>
  );
};
