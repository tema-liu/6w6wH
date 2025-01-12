import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { clearLoginData } from "../redux/auth/slice"; // Redux action
import { postAuth } from "../apis/postAuth"; // 驗證 API

// 用於驗證是否已登入
const useAuthVerify = (userToken: string | null) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const verifyAuth = useCallback(async () => {
    try {
      if (!userToken) {
        navigate("/login", { replace: true, state: { from: location } });
        return false;
      }

      const response = await postAuth(userToken);
      console.log(response);

      if (!response.status) {
        // 清除Redux 狀態
        dispatch(clearLoginData());

        // 跳轉到登入頁
        navigate("/login", { replace: true, state: { from: location } });
        return false;
      }
    } catch (error) {
      console.error("驗證失敗", error);
    }
    return true;
  }, [dispatch, navigate, location]);

  return verifyAuth;
};

export default useAuthVerify;
