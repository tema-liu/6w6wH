import { ResponseData } from "../type/type";

const apiUrl = import.meta.env.VITE_API_URL;
export const postContactus = async (
  content: string,
  token: string | null
): Promise<ResponseData> => {
  const url = `${apiUrl}/api/contactus`;
  // 檢查 HTTP 回應是否成功
  try {
    console.log(token);
    const res = await fetch(url, {
      method: "POST", // 使用 POST 方法
      headers: {
        "Content-Type": "application/json", // 設置為 JSON 格式
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ contact: content }),
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
        message: json?.message || "聯絡失敗",
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
