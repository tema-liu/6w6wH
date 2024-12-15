import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyle from "./utils/styled-components/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
