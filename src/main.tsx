import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthenticated: boolean; // 驗證是否登入
};

function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

function App() {
  return <h1>app</h1>;
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const isAuthenticated = false; // 假設從 Context、Redux 或其他方法取得登入狀態

  createRoot(rootElement).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          {/* 此放popular */}
          <Route path="/addShop" element={<App />} />
          <Route path="/search" element={<App />} />
          <Route path="/storeList" element={<App />} />
          <Route path="/storeList/:id" element={<App />} />
          <Route path="/notification" element={<App />} />
          <Route path="/login" element={<App />} />
          <Route path="/faqs" element={<App />} />
          <Route path="/TermsAndConditions" element={<App />} />
          <Route path="/PrivacyPolicy" element={<App />} />
          <Route path="/Add&EditStoreInformation" element={<App />} />
          {/* 用 ProtectedRoute 包裹需要驗證的路由 */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/settings" element={<div>設定頁內容</div>} />
            <Route path="/editProfile" element={<div>設定頁內容</div>} />
            <Route path="/profile" element={<div>個人檔案頁</div>} />
          </Route>
          <Route path="*" element={<App />} />
        </Route>
        <Route path="/review/:id" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  throw new Error("Root element not found");
}
