import styled from "styled-components";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { FieldErrors, useForm } from "react-hook-form";

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;
const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  resize: none;
  width: 100%;
  height: 160px;
`;
const BtnBox = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 24px;
`;
type ContactUsForm = {
  contactUs: string;
};

function ContactInfo({ closeWindow }: { closeWindow: () => void }) {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<ContactUsForm>({
    mode: "onChange",
  });

  const onSubmit = (formData: ContactUsForm) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="contactUs">What do you want to tell 6w6wH?</Label>
      <Textarea
        id="contactUs"
        placeholder="If you have any reporting system issues, feedback, or cross-industry cooperation issues, you can report them to us here."
        {...register("contactUs", {
          required: "No spaces",
        })}
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

export default ContactInfo;
