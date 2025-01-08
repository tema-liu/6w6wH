import {
  AuthState,
  ResponseData,
  SearchStationTag,
  SearchTag,
} from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const getSearchTags = async (): Promise<ResponseData<SearchTag[]>> => {
  const url = `${apiUrl}/api/searchconditions`;

  try {
    const res = await fetch(url);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗

    // 統一回傳格式，簡化錯誤處理
    if (!res.ok || !json?.status) {
      return {
        statusCode: res.status || 404,
        status: false,
        message: json?.message || "沒有找到標籤",
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

export const postLogin = async (
  token: string
): Promise<ResponseData<AuthState>> => {
  const url = `${apiUrl}/api/user/googlelogin?id=${token}`;
  // 檢查 HTTP 回應是否成功
  try {
    const res = await fetch(url);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗

    // 統一回傳格式，簡化錯誤處理
    if (!res.ok || !json?.status) {
      return {
        statusCode: res.status || 404,
        status: false,
        message: json?.message || "登入失敗",
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
