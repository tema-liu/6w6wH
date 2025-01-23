import { forwardRef } from "react";
import styled from "styled-components";

// 通用元件的樣式
const Label = styled.label`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const Input = styled.input`
  margin: 8px 0 2px 0;
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  letter-spacing: -0.41px;
  border-radius: 8px;
  width: 100%;
  display: block;
  -webkit-appearance: none; /*確保在 IOS瀏覽器中正常顯示 */
  &::-webkit-date-and-time-value {
    text-align: left;
  }
  &:-webkit-autofill {
    background-color: transparent !important; /* 背景设为透明 */
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.gray100} inset !important; /* 移除背景色的阴影效果 */
  }
`;

const TextArea = styled.textarea`
  margin: 8px 0 2px 0;
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  height: 96px;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  letter-spacing: -0.41px;
  border-radius: 8px;
  width: 100%;
  display: block;
  resize: none;
`;

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  letter-spacing: -0.41px;
  border-radius: 8px;
  width: 100%;
  display: block;
  margin: 8px 0 2px 0;
`;
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: ""; /* 使用 Unicode 或文字製作箭頭 */
    position: absolute;
    top: 55%;
    right: 23px; /* 箭頭與右側的距離 */
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.gray900}; /* 控制箭頭的寬高 */
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
  }
`;
type FieldErrorProps = {
  $isError: boolean;
};
const FieldError = styled.span<FieldErrorProps>`
  padding-left: 16px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.gray600};
`;

type InputLabelPairProps = {
  $isError: boolean;
  idFor: string; //id跟for對應
  fieldError?: string; //注意事項
  label: string; // label 的文字
  type:
    | "text"
    | "number"
    | "date"
    | "email"
    | "password"
    | "select"
    | "textArea"; // 支援的 input 類型
  options?: string[]; // 若是 select 類型，則有 options 屬性
  [key: string]: any;
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
`;

export const InputLabelPair = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  InputLabelPairProps // 支援不同類型的 ref
>(({ $isError, fieldError, idFor, label, type, options, ...props }, ref) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={idFor}>{label}</Label>

      {/* 判斷元件是input,select或textarea */}
      {type === "textArea" ? (
        <TextArea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={idFor}
          {...props}
        />
      ) : type === "select" ? (
        <SelectContainer>
          <Select
            id={idFor}
            {...props}
            ref={ref as React.Ref<HTMLSelectElement>}
          >
            {options?.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </SelectContainer>
      ) : (
        <Input
          ref={ref as React.Ref<HTMLInputElement>}
          id={idFor}
          type={type}
          {...props}
        />
      )}
      {fieldError && <FieldError $isError={$isError}>{fieldError}</FieldError>}
    </div>
  );
});
