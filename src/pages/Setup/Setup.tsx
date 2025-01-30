import styled from "styled-components";
import { Container, Wrapper } from "../../component/Layout/LayoutComponents";
import Header from "../../component/Layout/Header";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PartialUserSetupForm } from "../../type/formType";
import { postSignUp } from "../../apis/postSignUp";
import { GeneralPopupModal } from "../../component/PopupModel/PopupModal";
import EmptyDisplay from "../../component/EmptyDisplay";

const SetupForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

function Setup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, userPhoto, userName } = location.state || {};
  const [isSubmit, setSubmit] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      country: "Indonesia",
      gender: "Male",
      birthDay: "2000-01-01",
    },
  });

  useEffect(() => {
    if (!email || !userName) {
      // 如果必須的資料不存在，跳轉到 /popular
      navigate("/", { replace: true });
    }
  }, [email, userName, userPhoto, navigate]);

  const onSubmit = async (formData: PartialUserSetupForm) => {
    const setupData = {
      ...formData,
      email: email,
      userName: userName,
      userPhoto: null,
    };
    const sighUpRes = await postSignUp(setupData);
    if (!sighUpRes.status) {
      navigate("*", { replace: true });
      return;
    }
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
      navigate("/login", { replace: true });
    }, 2000);
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <SetupForm onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <InputLabelPair
              idFor="country"
              label="Country"
              type="select"
              {...register("country")}
              fieldError="required"
              options={[
                "Taiwan",
                "Cambodia",
                "Philippines",
                "Indonesia",
                "Thailand",
                "Vietnam",
              ]}
            />
            <InputLabelPair
              idFor="gender"
              label="Gender"
              type="select"
              options={["Male", "Female", "Other"]}
              {...register("gender")}
            />
            <InputLabelPair
              idFor="birth"
              label="Birth date"
              type="date"
              min="1905-01-01"
              max="2010-12-31"
              {...register("birthDay")}
            />
          </Content>
          <PrimaryBtn
            iconName="how_to_reg"
            content="Submit"
            $fill={true}
            $fontWeight={700}
          />
        </SetupForm>
        {isSubmit && (
          <GeneralPopupModal
            isActive={isSubmit}
            canActive={false}
            content={
              <EmptyDisplay
                showButton={false}
                content="Sign-up complete! Redirecting to login."
              />
            }
          />
        )}
      </Container>
    </Wrapper>
  );
}

export default Setup;
