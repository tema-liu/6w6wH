import styled from "styled-components";
import { Icon } from "./LayoutComponents";

type buttonStyleProps = {
  $bgColor?: string;
  $iconColor?: string;
  $padding?: string;
};

type buttonProps = {
  iconName?: string;
  content: string;
  $bgColor?: string;
  $iconColor?: string;
  onClick?: () => void; // 可選的點擊事件處理函式
  type?: string;
  $padding?: string;
};

const IconImg = styled(Icon)<buttonStyleProps>`
  color: ${({ $iconColor, theme }) => $iconColor && theme.colors[$iconColor]};
`;

const Btn = styled.button<buttonStyleProps>`
  width: 100%;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.outline3};
  border-radius: 16px;
  padding: ${({ $padding }) => ($padding ? $padding + "px" : "13px 0")};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;

export function PrimaryBtn({
  iconName,
  content,
  $bgColor,
  $iconColor,
  $padding,
  onClick,
}: buttonProps) {
  return (
    <Btn $padding={$padding} onClick={onClick} $bgColor={$bgColor}>
      {iconName && (
        <IconImg $iconColor={$iconColor} className="material-symbols-outlined">
          {iconName}
        </IconImg>
      )}
      {content}
    </Btn>
  );
}
