import { ReportComment } from "../type/formType";
import { ResponseData } from "../type/type";

const apiUrl = import.meta.env.REACT_APP_API_URL;
export const postReportComments = async (
  reportForm: ReportComment,
  token: string | null
): Promise<ResponseData> => {
  const url = `${apiUrl}/api/comments/report`;
  // 檢查 HTTP 回應是否成功
  try {
    const res = await fetch(url, {
      method: "POST", // 使用 POST 方法
      headers: {
        "Content-Type": "application/json", // 設置為 JSON 格式
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reportForm),
    });
    console.log(res);
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
        message: json?.message || "收藏失敗",
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
