import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormTags } from "../../type/formType";

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
  value: number;
  idFor: string;
  name: string;
  register: UseFormRegister<FormTags>; //不一定需要表單驗證
  required: boolean;
};

function CheckBox({ value, idFor, name, register, required }: CheckProps) {
  return (
    <>
      <Input
        type="checkbox"
        id={idFor}
        value={value}
        {...register("tags", {
          validate: required
            ? (value) => value.length > 0 || "至少選擇一個標籤"
            : undefined, // 如果非必填，則不應用驗證規則
        })}
      />
      <Label htmlFor={idFor}>
        <span>{name}</span>
      </Label>
    </>
  );
}
export default CheckBox;
