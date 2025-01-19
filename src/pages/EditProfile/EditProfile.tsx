import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { FieldErrors, useForm } from "react-hook-form";
import PhotoCard from "./PhotoCard";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { EditForm } from "./styled";
import { EditProfileForm } from "../../type/formType";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { defaultUserPhoto } from "../../constants/srcPaths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const token = useSelector((state: RootState) => state.auth.token);
  const profile = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<EditProfileForm>({
    defaultValues: {
      name: profile.name,
      comeFrom: profile.comeFrom,
      nowLiveIn: profile.nowLiveIn,
      bio: profile.bio,
      country: profile.country,
      gender: profile.gender,
      birthDay: profile.birthDay,
      userPhoto: profile.userPhoto ? profile.userPhoto : defaultUserPhoto,
    },
  });

  const onSubmit = (formData: EditProfileForm) => {
    console.log(formData);
  };
  const onError = (errors: FieldErrors<EditProfileForm>) => {
    console.log(errors.userPhoto?.message);
  };

  const photoUrl = watch("userPhoto");
  useEffect(() => {
    if (!profile.name) navigate("/profile");
  });

  return (
    <Wrapper>
      <Header title="Edit Profile" menu={true} />
      <Container>
        <EditForm onSubmit={handleSubmit(onSubmit, onError)}>
          <PhotoCard
            register={register}
            firstPhoto={photo}
            photoUrl={photoUrl}
            errorMessage={errors.userPhoto?.message}
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
                  value: /\S/,
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
                "Taiwan",
                "Thailand",
                "Vietnam",
                "Philippines",
                "Cambodia",
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
              {...register("birthDay")}
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
