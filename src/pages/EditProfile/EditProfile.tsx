import styled from "styled-components";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import PhotoCard from "./PhotoCard";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { useForm } from "react-hook-form";

const EditForm = styled.form`
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

type EditProfileForm = {
  name: string;
  comeFrom: string;
};

function EditProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditProfileForm>();
  const onSubmit = (formData: EditProfileForm) => {
    console.log(formData);
  };

  return (
    <Wrapper>
      <Header title="Edit Profile" menu={true} />
      <Container>
        <EditForm onSubmit={handleSubmit(onSubmit)}>
          {/* <PhotoCard /> */}
          <Content>
            <InputLabelPair
              fieldError="No spaces"
              $isError={!!errors.name}
              type="text"
              idFor="name"
              label="Name"
              {...register("name", {
                required: true,
                pattern: {
                  value: /\S/, //输入至少包含一个非空白字符
                  message: "No spaces", // 错误消息
                },
              })}
            />
            <InputLabelPair
              type="text"
              idFor="comeFrom"
              label="Come from"
              {...register("comeFrom")}
            />
            {/* <InputLabelPair type="text" idFor="nowLiveIn" label="Now live in" />
            <InputLabelPair type="text" idFor="comeFrom" label="Come from" />
            <InputLabelPair type="textArea" idFor="bio" label="Bio" />
            <InputLabelPair
              idFor="country"
              label="Country"
              type="select"
              options={[
                { value: "indonesia", label: "Indonesia" },
                { value: "china", label: "China" },
                { value: "japan", label: "Japan" },
                { value: "south_korea", label: "South Korea" },
                { value: "thailand", label: "Thailand" },
                { value: "malaysia", label: "Malaysia" },
                { value: "singapore", label: "Singapore" },
                { value: "vietnam", label: "Vietnam" },
                { value: "philippines", label: "Philippines" },
                { value: "india", label: "India" },
                { value: "united_states", label: "United States" },
                { value: "united_kingdom", label: "United Kingdom" },
                { value: "france", label: "France" },
                { value: "germany", label: "Germany" },
                { value: "canada", label: "Canada" },
                { value: "australia", label: "Australia" },
                { value: "new_zealand", label: "New Zealand" },
                { value: "brazil", label: "Brazil" },
                { value: "mexico", label: "Mexico" },
              ]}
            />
            <InputLabelPair
              idFor="sex"
              label="Gender"
              type="select"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              defaultValue="male"
            />
            <InputLabelPair
              idFor="birth"
              label="Birth date"
              type="date"
              defaultValue="2024-12-19"
            /> */}
          </Content>
          <PrimaryBtn
            $fill={true}
            $fontWeight={700}
            iconName="how_to_reg"
            content="Submit"
            type="submit"
          />
        </EditForm>
      </Container>
    </Wrapper>
  );
}

export default EditProfile;
