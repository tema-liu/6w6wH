import StoreDetail from "./pages/StoreDetail/StoreDetail.tsx";
import Reviews from "./pages/Reviews/Reviews.tsx";
import SearchResult from "./pages/SearchResult/SearchResult.tsx";
import Search from "./pages/Search/Search.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import StoreListLayout from "./StoreListLayout.tsx";
import Popular from "./pages/Popular/Popular.tsx";
import AddStore from "./pages/AddStore/AddStore.tsx";
import PostComment from "./pages/PostComment/PostComment.tsx";

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

function AppRoutes() {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreListLayout />}>
          {/* 首頁 */}
          <Route index element={<Popular />} />
          {/* 新增店家 */}
          <Route path="/addShop" element={<AddStore />} />
          {/* 搜尋 */}
          <Route path="/search" element={<Search />} />
          {/* 店家列表 */}
          <Route path="/storeList" element={<SearchResult />} />
          {/* 店家詳細 */}
          <Route path="/storeList/:id" element={<StoreDetail />} />
          {/* 發送評論 */}
          <Route path="/postComment/:id" element={<PostComment />} />
          {/* 通知 */}
          <Route path="/notification" element={<App />} />
          {/*評論頁面*/}
          <Route path="/review/:id" element={<Reviews />} />
          {/* 登入頁面 */}
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
          {/* 404頁面 */}
          <Route path="*" element={<Popular />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;