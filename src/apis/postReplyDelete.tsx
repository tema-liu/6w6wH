import { ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postReplyDelete = async (
  id: number,
  token: string
): Promise<ResponseData<void>> => {
  const url = `${apiUrl}/api/messages/delete`;
  // 檢查 HTTP 回應是否成功
  const options = {
    method: "POST",
    body: JSON.stringify({ replyId: id }),
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗
    console.log("刪除留言結果: " + JSON.stringify(json));

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
        message: json?.message || "留言刪除失敗",
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
