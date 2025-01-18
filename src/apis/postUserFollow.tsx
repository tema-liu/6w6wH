import { ResponseData } from "../type/type";
const apiUrl = import.meta.env.VITE_API_URL;

export const postUserFollow = async (
  followId: number,
  token: string | null
): Promise<ResponseData> => {
  const url = `${apiUrl}/users/follow`;

  // 檢查 HTTP 回應是否成功
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({
      userId: followId,
    }),
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗

    // 統一回傳格式，簡化錯誤處理
    if (!res.ok || !json?.status) {
      return {
        statusCode: res.status || 404,
        status: false,
        message: json?.message || "沒有店家資料",
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
