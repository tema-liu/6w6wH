import { Outlet, useNavigate, useParams } from "react-router-dom";
import FooterNav from "./component/FooterNav";

function StoreListLayout() {
  return (
    <>
      <Outlet /> {/* 用於渲染子路由內容 */}
      <FooterNav />
    </>
  );
}

export default StoreListLayout;
