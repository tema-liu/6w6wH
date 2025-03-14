import Header from "../../component/Layout/Header";
import { Container, Wrapper } from "../../component/Layout/LayoutComponents";
import siteIcon from "../../assets/6w6wH.svg";
import styled from "styled-components";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postLogin } from "../../apis/postLogin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginData } from "../../utils/redux/auth/slice";
import { RootState } from "../../utils/redux/store";

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
  text-align: center;
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
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();
  const googleLoginWidth = isSmallScreen ? "359px" : "408px";
  const dispatch = useDispatch();
  const location = useLocation();

  // 獲取用戶之前想要訪問的頁面
  const from = location.state?.from?.pathname || "/profile";

  // 檢查是否已登入
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.token);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true }); // 已登入時重定向到目標頁面
    }
  }, [isLoggedIn, navigate, from]);

  const loginLogic = async (credentialResponse: CredentialResponse) => {
    try {
      const response = await postLogin(credentialResponse.credential!);
      console.log(response);

      if (response.message === "firstSignUp！") {
        navigate("/setup", {
          state: {
            email: response.data?.email,
            userName: response.data?.userName,
          },
        });
        return;
      }

      dispatch(
        fetchLoginData({
          token: response.data?.token ?? null,
          userId: response.data?.userId ?? null,
          userName: response.data?.userName ?? null,
          userPhoto: response.data?.userPhoto ?? null,
        })
      );

      console.log("Navigating to:", from);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <WebIcon src={siteIcon} alt="siteIcon" />
          <BrnBox>
            <GoogleLogin
              size="large"
              logo_alignment="center"
              text="signin"
              shape="pill"
              locale="en"
              width={googleLoginWidth}
              onSuccess={(credentialResponse: CredentialResponse) => {
                loginLogic(credentialResponse);
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
