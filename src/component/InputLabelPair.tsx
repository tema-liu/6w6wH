import styled from "styled-components";

// 通用元件的樣式
const Label = styled.label`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const FormControl = styled.input`
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
`;

const FormControl1 = styled.textarea`
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

const SelectControl = styled.select`
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

const FieldError = styled.span`
  padding-left: 16px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${({ theme }) => theme.colors.gray600};
`;

type InputLabelPairProps = {
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
  options?: { value: string; label: string }[]; // 若是 select 類型，則有 options 屬性
  [key: string]: any; // 允許傳遞其他所有的 props，如 onChange、defaultValue 等
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

export const InputLabelPair = ({
  fieldError,
  idFor,
  label,
  type,
  options,
  ...props
}: InputLabelPairProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={idFor}>{label}</Label>

      {type === "textArea" ? (
        <FormControl1 />
      ) : type === "select" ? (
        <SelectContainer>
          <SelectControl id={idFor} {...props}>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectControl>
        </SelectContainer>
      ) : (
        <FormControl id={idFor} type={type} {...props} />
      )}
      {fieldError && <FieldError>{fieldError}</FieldError>}
    </div>
  );
};
