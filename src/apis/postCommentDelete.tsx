import { AuthState, ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postCommentDelete = async (
  commentId: number,
  token: string
): Promise<ResponseData<AuthState>> => {
  console.log("commentId", commentId);
  const url = `${apiUrl}/api/comments/delete`;
  // 檢查 HTTP 回應是否成功
  const options = {
    method: "POST",
    body: JSON.stringify({ commentId: commentId }),
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗
    console.log("刪除評論結果: " + JSON.stringify(json));

    // 統一回傳格式，簡化錯誤處理
    if (!res.ok) {
      return {
        statusCode: res.status,
        status: false,
        message: `HTTP 錯誤，狀態碼：${res.status}`,
      };
    }

    // 檢查回應中的 status 屬性
    if (!json.status) {
      return {
        statusCode: res.status,
        status: false,
        message: json?.message || "評論刪除失敗",
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
