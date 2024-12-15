import styled from "styled-components";

const Input = styled.input`
  @keyframes changeBackground {
    0% {
      background-color: ${({ theme }) => theme.colors.container1};
    }
    100% {
      background-color: white;
    }
  }

  appearance: none;
  display: none;
  height: 0;
  width: 0;

  &:checked + label {
    span {
      color: ${({ theme }) => theme.colors.gray900};
      animation: changeBackground 1s forwards; /* 設置動畫 */
    }

    // 左側紅色條
    &::before {
      content: "";
      width: 8px;
      height: 100%;
      background: ${({ theme }) => theme.colors.container1};
    }
  }
  //取消後動畫
  &:not(:checked) + label {
    span {
      transition: color 0.25s ease;
    }
    &::before {
      content: "";
      transition: background 0.25s ease;
    }
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  cursor: pointer;
  span {
    padding: 12px 16px 12px 8px;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.19px;
    color: ${({ theme }) => theme.colors.gray600};
  }

  &::before {
    content: "";
    width: 8px;
    height: 100%;
    background: ${({ theme }) => theme.colors.light};
  }
`;

type CheckProps = {
  content: string;
  isChecked: boolean; // 是否選中
  onChange: (tag: string) => void;
};

function CheckBox({ content, isChecked, onChange }: CheckProps) {
  return (
    <>
      <Input
        type="checkbox"
        id={content}
        checked={isChecked}
        onChange={() => onChange(content)}
      />
      <Label htmlFor={content}>
        <span>{content}</span>
      </Label>
    </>
  );
}

export default CheckBox;
