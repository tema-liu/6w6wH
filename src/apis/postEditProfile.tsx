import { EditProfileForm } from "../type/formType";
import { ResponseData } from "../type/type"; // 假設型別定義在 types 檔案中

const apiUrl = import.meta.env.VITE_API_URL;

export const postEditProfile = async (
  data: EditProfileForm,
  token: string | null
): Promise<ResponseData<EditProfileForm>> => {
  const url = `${apiUrl}/api/user/revise`;
  const formData = new FormData();
  // 添加其他欄位
  //資料轉字串
  formData.append("name", data.name);
  formData.append("country", data.country);
  formData.append("birthday", data.birthDay);
  formData.append("gender", String(data.gender));
  formData.append("nowLiveIn", data.nowLiveIn);
  formData.append("bio", data.bio);
  formData.append("comeFrom", data.comeFrom);
  data.userPhoto && formData.append("photo", data.userPhoto[0]);
  // Console log FormData
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
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
    console.log(json);
    return json;
  } catch (error) {
    return {
      statusCode: 404,
      status: false,
      message: "發生未知錯誤，請稍後再試",
    };
  }
};
