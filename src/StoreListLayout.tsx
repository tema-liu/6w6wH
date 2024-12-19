import { Outlet, useNavigate, useLocation, useMatch } from "react-router-dom";
import FooterNav from "./component/layout/FooterNav";

function StoreListLayout() {
  const location = useLocation();
  const isReviewPage = useMatch("/review/:id");

  return (
    <>
      <Outlet /> {/* 用於渲染子路由內容 */}
      {!isReviewPage && <FooterNav />}
    </>
  );
}

export default StoreListLayout;
