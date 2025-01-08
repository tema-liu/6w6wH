import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";

function ProtectedRoute() {
  const userToken = useSelector((state: RootState) => state.auth.token);

  //假設沒有token則跳轉登入頁
  if (!userToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
