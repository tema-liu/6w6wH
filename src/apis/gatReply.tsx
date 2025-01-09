import { Comment, Reply, ResponseData } from "../type/type";
const apiUrl = import.meta.env.VITE_API_URL;

export const getReply = async (
  id: number,
  token: string | null
): Promise<ResponseData<Comment>> => {
  const url = `${apiUrl}/api/getreply/${id}`;

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // 如果有 token，則加入 Authorization 標頭
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        status: false,
        message: `HTTP 錯誤，狀態碼：${res.status}`,
      };
    }

    const json = await res.json();
    console.log(json);
    // 檢查回應中的 status 屬性
    if (!json.status) {
      return {
        statusCode: res.status,
        status: false,
        message: json?.message || "沒有評論留言資料",
      };
    }

    return json; // 正常返回
  } catch (error) {
    console.error("發生錯誤：", error);
    return {
      statusCode: 500,
      status: false,
      message: "發生未知錯誤，請稍後再試",
    };
  }
};
