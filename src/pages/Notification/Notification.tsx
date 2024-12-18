import styled from "styled-components";
import { Container, Wrapper } from "../../component/LayoutComponents";
import Header from "../../component/header";
import NotifyCard from "./NotifyCard";

const NotifyContainer = styled(Container)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

function Notification() {
  return (
    <Wrapper>
      <Header title="Notification" />
      <NotifyContainer>
        <NotifyCard
          notification={{
            type: "general",
            action: "like",
          }}
        />
        <NotifyCard
          notification={{
            type: "general",
            action: "respond",
          }}
        />
        <NotifyCard
          notification={{
            type: "advertise",
          }}
        />
      </NotifyContainer>
    </Wrapper>
  );
}

export default Notification;
