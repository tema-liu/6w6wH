import Header from "../../component/header";
import { Container, Wrapper } from "../../component/LayoutComponents";
import siteIcon from "../../assets/6w6wH.svg";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <img src={siteIcon} alt="siteIcon" />
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Login;
