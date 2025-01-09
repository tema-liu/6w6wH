import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { postAuth } from "../../apis/postAuth";

function ProtectedRoute() {
  const userToken = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  const location = useLocation();
  //假設沒有token則跳轉登入頁

  useEffect(() => {
    if (!userToken) {
      navigate("/login", { replace: true, state: { from: location } });
      return;
    }
    const verifyAuth = async () => {
      try {
        const response = await postAuth(userToken);
        console.log(response);

        if (!response.status) {
          navigate("/login", { replace: true, state: { from: location } });
        }
      } catch (error) {
        console.error("驗證失敗：", error);
        navigate("/login", { replace: true, state: { from: location } }); // 驗證異常時跳轉
        // return;
      }
    };

    verifyAuth();
  }, []);

  return <Outlet />;
}

export default ProtectedRoute;
