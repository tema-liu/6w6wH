import styled from "styled-components";
import { Icon } from "../layout/LayoutComponents";

const Button = styled.button`
  column-gap: 8px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  padding: 16px;
`;
type btnProps = {
  title: string;
  iconName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function GrayButton({ title, iconName, ...props }: btnProps) {
  return (
    <Button {...props}>
      <Icon $color="gray600" className="material-symbols-outlined">
        {iconName}
      </Icon>
      {title}
    </Button>
  );
}

export default GrayButton;
