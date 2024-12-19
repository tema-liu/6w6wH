import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import siteIcon from "../../assets/6w6wH.svg";
import styled from "styled-components";
import googleIcon from "../../assets/Social Icons.svg";
import { PrimaryBtn } from "../../component/Button/PrimaryBtn";
// import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WebIcon = styled.img`
  margin-bottom: 48px;
`;
const TextContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray600};
  p a {
    color: ${({ theme }) => theme.colors.gray600};
    text-decoration: underline;
  }
`;

function Login() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}
          <WebIcon src={siteIcon} alt="siteIcon" />
          <PrimaryBtn
            $margin="16px 0px"
            $padding="16px 0"
            content={
              <>
                <img src={googleIcon} />
                Log in with Google
              </>
            }
            $bgColor="gray100"
          />
          <TextContent>
            <p>
              {"I agree to 6w6wH of Use and "}
              <Link to={"/privacyPolicy"}>Privacy Policy</Link>
            </p>
          </TextContent>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Login;
