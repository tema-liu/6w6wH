import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { FieldErrors, useForm } from "react-hook-form";
import PhotoCard from "./PhotoCard";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { EditForm } from "./styled";

type EditProfileForm = {
  photo: string;
  name: string;
  comeFrom: string;
  nowLiveIn: string;
  bio: string;
  country: string;
  gender: string;
  birth: string;
};

function EditProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<EditProfileForm>({
    defaultValues: {
      name: "Ala",
      comeFrom: "Java",
      nowLiveIn: "kaohsiung",
      bio: "Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.",
      country: "Indonesia",
      gender: "Male",
      birth: "2024-12-19",
      photo: photo,
    },
  });

  const onSubmit = (formData: EditProfileForm) => {
    console.log(formData);
  };
  const onError = (errors: FieldErrors<EditProfileForm>) => {
    console.log(errors.photo?.message);
  };

  const photoUrl = watch("photo") || photo;

  return (
    <Wrapper>
      <Header title="Edit Profile" menu={true} />
      <Container>
        <EditForm onSubmit={handleSubmit(onSubmit, onError)}>
          <PhotoCard
            register={register}
            firstPhoto={photo}
            photoUrl={photoUrl}
            errorMessage={errors.photo?.message}
          />
          <Content>
            <InputLabelPair
              fieldError="No spaces"
              $isError={!!errors.name}
              type="text"
              idFor="name"
              label="Name"
              autoComplete="name"
              {...register("name", {
                required: "No spaces",
                pattern: {
                  value: /\S/, //输入至少包含一个非空白字符
                  message: "No spaces",
                },
              })}
            />

            <InputLabelPair
              type="text"
              idFor="comeFrom"
              label="Come from"
              {...register("comeFrom")}
            />
            <InputLabelPair
              type="text"
              idFor="nowLiveIn"
              label="Now live in"
              {...register("nowLiveIn")}
            />
            <InputLabelPair
              type="textArea"
              idFor="bio"
              label="Bio"
              {...register("bio")}
            />
            <InputLabelPair
              idFor="country"
              label="Country"
              type="select"
              autoComplete="off"
              options={[
                "Indonesia",
                "China",
                "Japan",
                "South Korea",
                "Thailand",
                "Malaysia",
                "Singapore",
                "Vietnam",
                "Philippines",
                "India",
                "United States",
                "United Kingdom",
                "France",
                "Germany",
                "Canada",
                "Australia",
                "New Zealand",
                "Brazil",
                "Mexico",
              ]}
              {...register("country")}
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
              {...register("birth")}
            />
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
