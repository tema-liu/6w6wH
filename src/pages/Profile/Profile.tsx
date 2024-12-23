import styled from "styled-components";
import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "./ProfileCard";
import ReviewListItem from "./ReviewListItem";

function Profile() {
  return (
    <Wrapper>
      <Header isBefore={false} menu={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        <ProfileCard />
        <ReviewListItem />
      </ContainerPd16>
    </Wrapper>
  );
}

export default Profile;
