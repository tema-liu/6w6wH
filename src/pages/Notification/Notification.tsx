import styled from "styled-components";
import { Container, Wrapper } from "../../component/LayoutComponents";
import Header from "../../component/header";
import NotifyCard from "./NotifyCard";
import EmptyDisplay from "../../component/EmptyDisplay";

const NotifyContainer = styled(Container)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      {/* <EmptyContainer>
        <EmptyDisplay
          content="There are no notifications yet"
          iconStyle="local_fire_department"
          btnText="View popular threads"
        />
      </EmptyContainer> */}
    </Wrapper>
  );
}

export default Notification;
