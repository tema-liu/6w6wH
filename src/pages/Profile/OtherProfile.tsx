import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";

function OtherProfile() {
  return (
    <Wrapper>
      <Header isBefore={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        <ProfileCard isUserProfile={false} />
        <ReviewListItem />
      </ContainerPd16>
    </Wrapper>
  );
}

export default OtherProfile;
