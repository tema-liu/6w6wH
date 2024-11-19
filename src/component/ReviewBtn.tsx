import styled from "styled-components";
import review from "../assets/Component 1.png";

interface ReviewProps {
  marginRight?: number;
  content?: string;
}

const ReviewIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const Review = styled.button<ReviewProps>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.outline3};
  padding: 12px 16px;
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : 0)};
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  &:hover {
    background-color: ${({ theme }) => theme.colors.container3};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.container3};
  }
`;

export const ReviewBtn = ({ marginRight, content }: ReviewProps) => {
  return (
    <Review marginRight={marginRight}>
      <ReviewIcon src={review} alt="review" />
      {content}
    </Review>
  );
};
