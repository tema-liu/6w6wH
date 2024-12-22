import styled from "styled-components";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <Wrapper>
      <Header isBefore={false} menu={true} />
      <Container>
        <ProfileCard></ProfileCard>
      </Container>
    </Wrapper>
  );
}

export default Profile;
