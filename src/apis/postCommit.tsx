import { PostCommitForm } from "../type/formType";
import { ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postCommit = async (
  data: PostCommitForm
): Promise<ResponseData<PostCommitForm>> => {
  const url = `${apiUrl}/api/reviews`;
  const formData = new FormData();

  // 將 photos 陣列添加到 FormData
  data.photos.forEach((photo, index) => {
    formData.append(`photos${index + 1}`, photo);
  });

  // 添加其他欄位
  //資料轉字串
  formData.append("placeID", String(data.placeId));
  formData.append("starCount", String(data.starCount));
  formData.append(`tags`, data.tags.join(","));
  formData.append("comment", data.comment);
  formData.forEach((value, key) => {
    console.log(`${key}:`, value);
  });

  const options = {
    method: "POST",
    body: formData,
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗
    console.log(json);
    // 統一回傳格式，簡化錯誤處理
    if (!res.ok || !json?.status) {
      return {
        statusCode: res.status || 404,
        status: false,
        message: json?.message || "上傳失敗",
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
