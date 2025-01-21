import styled from "styled-components";
import { Icon } from "../Layout/LayoutComponents";

type buttonStyleProps = {
  $bgColor?: string;
  $iconColor?: string;
  $padding?: string;
  $margin?: string;
  $fill?: boolean;
  $fontWeight?: number;
  $Width?: string;
  $borderRadius?: number;
  $boxShadow?: string;
  $border?: string;
  $color?: string;
  $opacity?: number;
};

type buttonProps = {
  $Width?: string;
  iconName?: string;
  content?: string;
  $bgColor?: string;
  $iconColor?: string;
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | (() => void);
  type?: "button" | "submit" | "reset";
  $padding?: string;
  $margin?: string;
  $fill?: boolean;
  $fontWeight?: number;
  $borderRadius?: number;
  $boxShadow?: string;
  $border?: string;
  $color?: string;
  $opacity?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconImg = styled(Icon)<buttonStyleProps>`
  cursor: pointer;
  color: ${({ $iconColor, theme }) => $iconColor && theme.colors[$iconColor]};
  font-variation-settings: ${({ $fill }) => ($fill ? "'FILL' 1" : "'FILL' 0")};
`;

const Btn = styled.button<buttonStyleProps>`
  opacity: ${({ $opacity }) => ($opacity ? $opacity : 1)};
  width: ${({ $Width }) => ($Width ? $Width : "100%")};
  border: ${({ $border }) => ($border ? $border : "none")};
  color: ${({ $color, theme }) =>
    $color ? theme.colors[$color] : theme.colors.gray900};
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
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow
      ? $boxShadow
      : "0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a"};
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
`;

export function PrimaryBtn({
  children,
  iconName,
  type,
  onClick,
  content,
  $Width,
  $margin,
  $bgColor,
  $iconColor,
  $padding,
  $fill,
  $fontWeight,
  $borderRadius,
  $boxShadow,
  $border,
  $color,
  $opacity,
  ...props
}: buttonProps) {
  return (
    <Btn
      $opacity={$opacity}
      $color={$color}
      $boxShadow={$boxShadow}
      type={type}
      $Width={$Width}
      $margin={$margin}
      $padding={$padding}
      onClick={onClick}
      $bgColor={$bgColor}
      $borderRadius={$borderRadius}
      $border={$border}
      $fontWeight={$fontWeight}
      {...props}
    >
      {iconName && (
        <IconImg
          $isPointer={true}
          $fill={$fill}
          $iconColor={$iconColor}
          className="material-symbols-outlined"
        >
          {iconName}
        </IconImg>
      )}
      {children}
      {content && content}
    </Btn>
  );
}
