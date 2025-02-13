import { createRoot } from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyle from "./utils/styled-components/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store, { persistor } from "./utils/redux/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import "./utils/i18n/i18n.ts";
import { Suspense } from "react";

const rootElement = document.getElementById("root");
const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENTID;
if (rootElement) {
  createRoot(rootElement).render(
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <Suspense>
              <ThemeProvider theme={theme}>
                <AppRoutes />
              </ThemeProvider>
            </Suspense>
          </PersistGate>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
} else {
  throw new Error("Root element not found");
}
