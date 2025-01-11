import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";

import useAuthVerify from "../../hooks/useAuthVerify ";

function ProtectedRoute() {
  const userToken = useSelector((state: RootState) => state.auth.token);

  //開始驗證
  useAuthVerify(userToken);

  return <Outlet />;
}

export default ProtectedRoute;
