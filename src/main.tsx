import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyle from "./utils/styled-components/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store.tsx";

const rootElement = document.getElementById("root");
const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENTID;
if (rootElement) {
  createRoot(rootElement).render(
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
} else {
  throw new Error("Root element not found");
}
