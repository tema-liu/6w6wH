import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
import { InputLabelPair, Content } from "../../component/InputLabelPair";
import { useForm } from "react-hook-form";
import PhotoCard from "./PhotoCard";
import { EditForm } from "./styled";
import { EditProfileForm } from "../../type/formType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { defaultUserPhoto, userPicture } from "../../constants/srcPaths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postEditProfile } from "../../apis/postEditProfile";
import { getUserProfile } from "../../apis/getUserProfile";
import { fetchProfile } from "../../utils/redux/userProfile/slice";

function EditProfile() {
  const token = useSelector((state: RootState) => state.auth.token);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstPhoto = profile.userPhoto
    ? userPicture + profile.userPhoto
    : defaultUserPhoto;
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
      userPhoto: firstPhoto,
    },
  });

  const onSubmit = async (formData: EditProfileForm) => {
    const processedPhoto =
      formData.userPhoto === firstPhoto ? "" : formData.userPhoto;
    const form = {
      ...formData,
      userPhoto: processedPhoto,
    };

    //修改個人資料
    await postEditProfile(form, token);
    const userProfile = await getUserProfile(Number(userId), token);
    if (userProfile.status) {
      const userData = userProfile.data;
      const gender =
        userData?.gender === 0
          ? "Male"
          : userData?.gender === 1
          ? "Female"
          : "Other";
      dispatch(
        fetchProfile({
          name: userData?.name,
          userPhoto: userData?.userPhoto,
          comeFrom: userData?.comeFrom,
          nowLiveIn: userData?.nowLiveIn,
          bio: userData?.bio,
          country: userData?.country,
          gender: gender,
          birthDay: userData?.birthDay,
          badge: userData?.badge,
          isFollowed: userData?.isFollowed,
        })
      );
      navigate("/profile");
    } else {
      navigate("*");
    }
  };

  const photoUrl = watch("userPhoto");

  useEffect(() => {
    if (!profile.name) navigate("/profile");
  });

  return (
    <Wrapper>
      <Header title="Edit Profile" menu={true} />
      <Container>
        <EditForm onSubmit={handleSubmit(onSubmit)}>
          <PhotoCard
            register={register}
            firstPhoto={firstPhoto}
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
