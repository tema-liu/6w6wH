import { UserSetupForm } from "../type/formType";
import { AuthState, ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postSignUp = async (
  formData: UserSetupForm
): Promise<ResponseData<AuthState>> => {
  const url = `${apiUrl}/user/register`;
  // 檢查 HTTP 回應是否成功

  try {
    const res = await fetch(url, {
      method: "POST", // 使用 POST 方法
      headers: {
        "Content-Type": "application/json", // 設置為 JSON 格式
      },
      body: JSON.stringify(formData), // 將 formData 轉換為 JSON 字串
    });

    // 統一回傳格式，簡化錯誤處理
    if (!res.ok) {
      return {
        statusCode: res.status,
        status: false,
        message: `HTTP 錯誤，狀態碼：${res.status}`,
      };
    }

    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗
    if (!json?.status) {
      return {
        statusCode: res.status || 404,
        status: false,
        message: json?.message || "註冊失敗",
      };
    }

    return json;
  } catch (error) {
    return {
      statusCode: 404,
      status: false,
      message: "發生未知錯誤，請稍後再試",
    };
  }
};
