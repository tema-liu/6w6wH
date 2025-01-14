import { PrimaryBtn } from "../button/PrimaryBtn";
import { useForm } from "react-hook-form";
import { Textarea, Label, BtnBox } from "../../pages/Menu/style/contactInfo";
import { postReportComments } from "../../apis/postReportComments";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import useAuthVerify from "../../hooks/useAuthVerify ";

type textForm = {
  textArea: string;
};

type TextAreaInfoProps = {
  reviewOrReply: "review" | "reply";
  title: string;
  idFor: string;
  closeWindow: () => void;
  reportId: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaInfo({
  reportId,
  reviewOrReply,
  title,
  idFor,
  closeWindow,
  ...props
}: TextAreaInfoProps) {
  const token = useSelector((state: RootState) => state.auth.token);
  const type = reviewOrReply === "review" ? "comment" : "reply";
  const authVerify = useAuthVerify(token);
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<textForm>({
    mode: "onChange",
  });

  const onSubmit = async (formData: textForm) => {
    try {
      const reportComment = {
        type: type, // comment,reply
        commentId: reportId, //被檢舉評論ID
        ReportReason: formData.textArea, //檢舉原因
      };
      const isAuthenticated = await authVerify();
      // 驗證是否登入
      if (!isAuthenticated) {
        return;
      }
      //送出檢舉表單
      const res = await postReportComments(reportComment, token);
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
