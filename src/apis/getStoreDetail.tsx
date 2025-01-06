import { ResponseData, StoreData } from "../type/type";
const apiUrl = import.meta.env.VITE_API_URL;

export const getStoreDetail = async (
  id: number
): Promise<ResponseData<StoreData>> => {
  const url = `${apiUrl}/api/stores/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("HTTP 錯誤，狀態碼：", res.status);
      return {
        statusCode: res.status,
        status: false,
        message: `HTTP 錯誤，狀態碼：${res.status}`,
      };
    }

    const json = await res.json();
    console.log("回應資料：", json);

    // 檢查回應中的 status 屬性
    if (!json.status) {
      return {
        statusCode: res.status,
        status: false,
        message: json?.message || "沒有店家資料",
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
