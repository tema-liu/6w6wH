import { PrimaryBtn } from "../Button/PrimaryBtn";
import { useForm } from "react-hook-form";
import { Textarea, Label, BtnBox } from "../../pages/Menu/style/contactInfo";

type textForm = {
  textArea: string;
};

type TextAreaInfoProps = {
  title: string;
  idFor: string;
  closeWindow: () => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInfo({
  title,
  idFor,
  closeWindow,
  ...props
}: TextAreaInfoProps) {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<textForm>({
    mode: "onChange",
  });

  const onSubmit = async (formData: textForm) => {
    try {
      console.log(formData);
    } catch (error) {
      console.log("錯誤", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor={idFor}>{title}</Label>
      <Textarea
        id={idFor}
        {...register("textArea", {
          required: "No spaces",
          pattern: {
            value: /\S/, //输入至少包含一个非空白字符
            message: "No spaces", // 错误消息
          },
        })}
        {...props}
      ></Textarea>

      <BtnBox>
        <PrimaryBtn
          type="button"
          $color="gray600"
          $border="1px solid #D4D4D4"
          $boxShadow="none"
          $fontWeight={700}
          $bgColor="light"
          $borderRadius={8}
          content="Cancel"
          onClick={() => {
            closeWindow();
          }}
        />
        <PrimaryBtn
          $color={isValid ? "gray900" : "gray600"}
          $borderRadius={8}
          $fontWeight={700}
          $boxShadow="none"
          $bgColor={isValid ? "outline2" : "gray400"}
          content="Submit"
          disabled={!isValid}
          // 禁用按鈕直到表單有效
        />
      </BtnBox>
    </form>
  );
}

export default TextAreaInfo;
