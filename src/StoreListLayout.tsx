import {
  Outlet,
  useNavigate,
  useLocation,
  useMatch,
  matchPath,
} from "react-router-dom";
import FooterNav from "./component/layout/FooterNav";

function StoreListLayout() {
  const location = useLocation();
  const notFooterRenderPage = ["/review/:id", "/setup", "/otherProfile"];
  const haveStoreListActive = notFooterRenderPage.some((pathPattern) =>
    matchPath(pathPattern, location.pathname)
  );

  return (
    <>
      <Outlet /> {/* 用於渲染子路由內容 */}
      {!haveStoreListActive && <FooterNav />}
    </>
  );
}

export default StoreListLayout;
