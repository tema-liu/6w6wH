import { PostCommitForm } from "../type/formType";
import { ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postCommit = async (
  data: PostCommitForm,
  token: string | null
): Promise<ResponseData<PostCommitForm>> => {
  const url = `${apiUrl}/api/reviews`;
  const formData = new FormData();
  // 添加其他欄位
  //資料轉字串
  formData.append("placeID", data.placeId);
  formData.append("tags", `${data.tags.join(",")}`);
  formData.append("comment", data.comment);
  formData.append("starCount", String(data.starCount));
  // 將 photos 陣列添加到 FormData
  data.photos.forEach((photo, index) => {
    formData.append(`photo${index + 1}`, photo);
  });

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json().catch(() => null); // 防止 JSON 解析失敗
    console.log("這是回傳的資料: " + JSON.stringify(json));
    console.log(token);
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
