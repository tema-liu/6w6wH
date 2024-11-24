import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyle from "./GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import StoreDetail from "./pages/StoreDetail/StoreDetail.tsx";
import Reviews from "./pages/Reviews/Reviews.tsx";
import SearchResult from "./pages/SearchResult/SearchResult.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <SearchResult />
    </ThemeProvider>
  </StrictMode>
);
