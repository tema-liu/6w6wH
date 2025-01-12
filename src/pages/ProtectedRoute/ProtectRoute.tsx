import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";

import useAuthVerify from "../../hooks/useAuthVerify ";
import { useEffect } from "react";

function ProtectedRoute() {
  const userToken = useSelector((state: RootState) => state.auth.token);
  const authVerify = useAuthVerify(userToken);

  //開始驗證
  useEffect(() => {
    const verify = async () => {
      const isAuthenticated = await authVerify();
      if (!isAuthenticated) {
        return;
      }
    };

    verify();
  }, [authVerify]);

  return <Outlet />;
}

export default ProtectedRoute;
