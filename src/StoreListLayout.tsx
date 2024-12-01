import { Outlet, useNavigate, useParams } from "react-router-dom";
import FooterNav from "./component/FooterNav";

function StoreListLayout() {
  return (
    <div>
      <Outlet /> {/* 用於渲染子路由內容 */}
      <FooterNav />
    </div>
  );
}

export default StoreListLayout;
