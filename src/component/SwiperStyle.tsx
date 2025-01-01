import { Swiper } from "swiper/react";
import styled from "styled-components";

export const SwiperContainer = styled(Swiper)`
  position: relative;
  height: 248px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: ${({ theme }) => theme.colors.outline1};
  display: flex;
  align-items: center;
  --swiper-pagination-color: #fff;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 0.5;

  .swiper-pagination-bullet {
    box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
type ButtonProps = {
  $bottom?: string; // 定義屬性類型，可選屬性
};

export const Button = styled.div<ButtonProps>`
  bottom: ${({ $bottom }) => ($bottom ? $bottom : "104px")};
  margin-top: 0px;
  top: auto;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &::after {
    content: none;
  }
`;
