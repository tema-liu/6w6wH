import Header from "../../component/layout/header";
import { Container, Wrapper } from "../../component/layout/LayoutComponents";
import siteIcon from "../../assets/6w6wH.svg";
import styled from "styled-components";
import googleIcon from "../../assets/Social Icons.svg";
import { PrimaryBtn } from "../../component/button/PrimaryBtn";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { postLogin } from "../../apis/postLogin";
import { useEffect, useState } from "react";

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

const BrnBox = styled.div`
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 16px 0;
  width: 408px; /* 根據需求調整寬度 */
  text-align: center;

  @media screen and (max-width: 400px) {
    width: 375px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  iframe[id^="gsi_"] {
    margin: 0 !important;
    display: flex;
    justify-content: center;
    width: 100% !important;
    height: 70px !important;
  }
`;

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => window.innerWidth <= 400
  );

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 400);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
}

function Login() {
  const isSmallScreen = useIsSmallScreen();
  const googleLoginWidth = isSmallScreen ? "230px" : "250px";

  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <WebIcon src={siteIcon} alt="siteIcon" />
          {/* <PrimaryBtn
            type="button"
            $margin="16px 0px"
            $padding="16px 0"
            children={
              <>
                <img src={googleIcon} />
                Log in with Google
              </>
            }
            onClick={() => {
              googleLogin();
            }}
            $bgColor="gray100"
          /> */}
          <BrnBox>
            <GoogleLogin
              size="medium"
              logo_alignment="center"
              text="signin"
              shape="pill"
              locale="en"
              width={googleLoginWidth}
              onSuccess={async (credentialResponse) => {
                try {
                  console.log(credentialResponse.credential);
                  const response = await postLogin(
                    credentialResponse.credential ?? ""
                  );
                  console.log("Login successful:", response);
                } catch (error) {
                  console.error("Login failed:", error);
                }
              }}
            />
          </BrnBox>
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
