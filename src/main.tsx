import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyle from "./utils/styled-components/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* <GoogleOAuthProvider clientId="274028404949-uou5r18tkq1dns3alkqcpvo5183lq839.apps.googleusercontent.com"> */}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
      {/* </GoogleOAuthProvider> */}
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
