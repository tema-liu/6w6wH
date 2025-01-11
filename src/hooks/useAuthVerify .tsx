import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { clearLoginData } from "../redux/auth/slice"; // Redux action
import { postAuth } from "../apis/postAuth"; // 驗證 API

//用於驗證是否已登入
const useAuthVerify = (userToken: string | null) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userToken) {
      const verifyAuth = async () => {
        try {
          const response = await postAuth(userToken!);
          console.log(response);

          if (!response.status) {
            // 清除本地存儲和 Redux 狀態
            localStorage.removeItem("userToken");
            dispatch(clearLoginData());

            // 跳轉到登入頁
            navigate("/login", { replace: true, state: { from: location } });
          }
        } catch (error) {
          console.error("驗證失敗", error);
        }
      };

      // 僅在有 token 時執行
      verifyAuth();
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [userToken, dispatch, navigate, location]);
};

export default useAuthVerify;
