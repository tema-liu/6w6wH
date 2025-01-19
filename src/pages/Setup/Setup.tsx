import styled from "styled-components";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PartialUserSetupForm } from "../../type/formType";
import { postSignUp } from "../../apis/postSignUp";

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

  const { register, handleSubmit } = useForm({
    defaultValues: {
      country: "Indonesia",
      gender: "Male",
      birthDay: "2000-01-01",
    },
  });

  useEffect(() => {
    if (!email || !userName || !userPhoto) {
      // 如果必須的資料不存在，跳轉到 /popular
      navigate("/popular", { replace: true });
    }
  }, [email, userName, userPhoto, navigate]);

  const onSubmit = async (formData: PartialUserSetupForm) => {
    console.log(formData);
    const setupData = {
      ...formData,
      email: email,
      userName: userName,
      userPhoto: userPhoto,
    };
    try {
      const sighUpRes = await postSignUp(setupData);
      console.log(sighUpRes);
      if (!sighUpRes.status) {
        navigate("/popular", { replace: true });
        return;
      }
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log(error);
    }
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
      </Container>
    </Wrapper>
  );
}

export default Setup;
