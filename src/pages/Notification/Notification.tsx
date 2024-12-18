import styled from "styled-components";
import { Container, Wrapper } from "../../component/LayoutComponents";
import Header from "../../component/header";
import NotifyCard from "./NotifyCard";

function Notification() {
  return (
    <Wrapper>
      <Header title="Notification" />
      <Container>
        <NotifyCard />
      </Container>
    </Wrapper>
  );
}

export default Notification;
