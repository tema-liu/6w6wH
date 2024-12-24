import styled from "styled-components";
import { Icon } from "../layout/LayoutComponents";

type buttonStyleProps = {
  $bgColor?: string;
  $iconColor?: string;
  $padding?: string;
  $margin?: string;
  $fill?: boolean;
  $fontWeight?: number;
  $Width?: string;
  $borderRadius?: number;
};

type buttonProps = {
  $Width?: string;
  iconName?: string;
  content: React.ReactNode;
  $bgColor?: string;
  $iconColor?: string;
  onClick?: () => void; // 可選的點擊事件處理函式
  type?: string;
  $padding?: string;
  $margin?: string;
  $fill?: boolean;
  $fontWeight?: number;
  $borderRadius?: number;
};

const IconImg = styled(Icon)<buttonStyleProps>`
  color: ${({ $iconColor, theme }) => $iconColor && theme.colors[$iconColor]};
  font-variation-settings: ${({ $fill }) => ($fill ? "'FILL' 1" : "'FILL' 0")};
`;

const Btn = styled.button<buttonStyleProps>`
  width: ${({ $Width }) => ($Width ? $Width : "100%")};
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.outline3};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius + "px" : "16px"};
  padding: ${({ $padding }) => ($padding ? $padding : "12px 16px")};
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
`;

export function PrimaryBtn({
  iconName,
  content,
  $Width,
  $margin,
  $bgColor,
  $iconColor,
  $padding,
  $fill,
  $fontWeight,
  $borderRadius,
  onClick,
}: buttonProps) {
  return (
    <Btn
      $Width={$Width}
      $margin={$margin}
      $padding={$padding}
      onClick={onClick}
      $bgColor={$bgColor}
      $borderRadius={$borderRadius}
      $fontWeight={$fontWeight}
    >
      {iconName && (
        <IconImg
          $fill={$fill}
          $iconColor={$iconColor}
          className="material-symbols-outlined"
        >
          {iconName}
        </IconImg>
      )}
      {content}
    </Btn>
  );
}
