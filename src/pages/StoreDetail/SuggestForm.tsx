import { useForm } from "react-hook-form";
import { checkBoxList } from "./data/suggestForm";
import {
  InputCheck,
  Input,
  InputText,
  Form,
  Label,
  TextAreaTitle,
} from "./style/suggestForm";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { useEffect, useState } from "react";
import { postStoreReport } from "../../apis/postStoreReport";
import Spinner from "../../component/Placeholder/Spinners";

type textForm = {
  errorText: string[];
  suggestText: string;
};

function SuggestForm({
  storeId,
  windowOpen,
}: {
  storeId: number;
  windowOpen: () => void;
}) {
  //按鈕狀態
  const [isBtnDisabled, setBtnDisabled] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const { register, handleSubmit, watch } = useForm<textForm>({
    mode: "onChange", // 每次輸入時觸發驗證
    defaultValues: {
      errorText: [],
      suggestText: "",
    },
  });
  //監聽每次form表變化是否為空值
  const watchAllFields = watch();
  const haveOneValidate = () => {
    return Object.values(watchAllFields).some((value) => {
      // 處理字串陣列
      if (Array.isArray(value)) {
        return value.length > 0;
      } else if (typeof value === "string") {
        // 處理字串
        return value && value.toString().trim() !== "";
      }
    });
  };

  //控制按鈕觸發送出表單
  useEffect(() => {
    setBtnDisabled(haveOneValidate());
  }, [watchAllFields]);

  const onSubmit = async (formData: textForm) => {
    //送出的表單資料
    setSubmit(true);
    const postData = { ...formData, storeId: storeId };
    await postStoreReport(postData);
    setSubmit(false);
    windowOpen();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {checkBoxList.map((item) => {
        return (
          <InputCheck key={item.idFor}>
            <Input
              id={item.idFor}
              value={item.errorText}
              type="checkbox"
              {...register("errorText")}
            />
            <Label htmlFor={item.idFor}>{item.errorText}</Label>
          </InputCheck>
        );
      })}
      <TextAreaTitle>Other issues?</TextAreaTitle>
      <InputText
        placeholder="Write down your suggestions at this place"
        {...register("suggestText")}
      />
      <PrimaryBtn
        $color={!isSubmit && isBtnDisabled ? "gray900" : "gray600"}
        $borderRadius={8}
        $fontWeight={700}
        $boxShadow="none"
        $padding={isSubmit ? "11px 0" : "12px 16px"}
        $bgColor={!isSubmit && isBtnDisabled ? "outline2" : "gray400"}
        children={
          <>
            {isSubmit ? (
              <Spinner size="4px" pointColor="gray600" />
            ) : (
              <p>Submit</p>
            )}
          </>
        }
        disabled={!isBtnDisabled && !isSubmit}
      />
    </Form>
  );
}

export default SuggestForm;
