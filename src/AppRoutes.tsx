import StoreDetail from "./pages/StoreDetail/StoreDetail.tsx";
import Reviews from "./pages/Reviews/Reviews.tsx";
import SearchResult from "./pages/SearchResult/SearchResult.tsx";
import Search from "./pages/Search/Search.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreListLayout from "./StoreListLayout.tsx";
import Popular from "./pages/Popular/Popular.tsx";
import AddStore from "./pages/AddStore/AddStore.tsx";
import PostComment from "./pages/PostComment/PostComment.tsx";
import Notification from "./pages/Notification/Notification.tsx";
import Login from "./pages/Login/Login.tsx";
import Setup from "./pages/Setup/Setup.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import OtherProfile from "./pages/Profile/OtherProfile.tsx";
import EditProfile from "./pages/EditProfile/EditProfile.tsx";
import Menu from "./pages/Menu/Menu.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import Faqs from "./pages/Faqs/Faqs.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.tsx";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectRoute.tsx";

function AppRoutes() {
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

          {/*評論頁面*/}
          <Route path="/review/:id" element={<Reviews />} />
          {/* {瀏覽個人頁面} */}
          <Route path="/otherProfile" element={<OtherProfile />} />
          {/* 登入頁面 */}
          <Route path="/login" element={<Login />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          {/* 用 ProtectedRoute 包裹需要驗證的路由 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/menu" element={<Menu />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            {/* 通知 */}
            <Route path="/notification" element={<Notification />} />
          </Route>
          {/* 404頁面 */}
          <Route path="*" element={<Popular />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
