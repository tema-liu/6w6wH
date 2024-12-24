import styled from "styled-components";
import { Wrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { Container } from "../SearchResult/style";

function EditProfile() {
  return (
    <Wrapper>
      <Header title="Edit Profile" menu={true} />
      <Container></Container>
    </Wrapper>
  );
}

export default EditProfile;
