import styled from "styled-components";
import { Icon } from "./LayoutComponents";

interface ReviewProps {
  $marginRight?: number;
  content?: string;
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
    background-color: ${({ theme }) => theme.colors.container3};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

export const ReviewBtn = ({ $marginRight, content }: ReviewProps) => {
  return (
    <Review $marginRight={$marginRight}>
      <Icon className="material-symbols-outlined">reviews</Icon>
      {content}
    </Review>
  );
};
