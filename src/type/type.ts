//==========呼叫API使用型別===========
export type ResponseData<T = unknown> = {
  statusCode: number; // 狀態碼
  status: boolean; // 狀態
  message: string; // 回應訊息
  data?: T;
};

//=========Reviews====================================
export type Reply = {
  replyID: string; // 留言ID
  userID: string; // 留言人ID
  userName: string; // 留言人名稱
  userPhoto: string;
  comment: string; // 留言內容
  postedAt: Date; // 發布時間
  country:
    | "Taiwan"
    | "Cambodia"
    | "Philippines"
    | "Indonesia"
    | "Thailand"
    | "Vietnam";
  badge: "level1" | "level2" | "level3" | "level4" | "level5" | "level6"; // 獎牌
  likeCount: number; // 愛心數
  isLike: boolean; // 是否已按愛心
};
export type Photo = {
  Id: number;
  StoreId: number;
  PictureUrl: string;
};

export type Comment = {
  commentID: string; // 評論ID
  userID: string; // 評論人ID
  userName: string; // 評論人名稱
  userPhoto: string;
  photo: Photo[]; //照片
  starCount: number; // 星星數量
  comment: string | null; // 評論內容
  replyCount?: number;
  postedAt: Date; // 發布時間
  likeCount: number; // 愛心數
  isLike: boolean; // 是否已按愛心
  tags: string[]; // 評價標籤
  country:
    | "Taiwan"
    | "Cambodia"
    | "Philippines"
    | "Indonesia"
    | "Thailand"
    | "Vietnam";
  badge: "level1" | "level2" | "level3" | "level4" | "level5" | "level6"; // 獎牌
  reply?: null | Reply[]; // 留言回覆
};

//hotReview===================================================
export type ReviewOrReply = null | {
  popular: Comment;
  review: Comment;
  latest: Comment;
};

//storeDetail=============================================
export type Advertise = {
  photo: string; // 廣告照片
  url: string; // 廣告網址
  title: string; // 廣告標題
  slogan: string; // 廣告標語
};

type OpeningHours = {
  Monday?: string | null;
  Tuesday?: string | null;
  Wednesday?: string | null;
  Thursday?: string | null;
  Friday?: string | null;
  Saturday?: string | null;
  Sunday?: string | null;
};

type Tag = {
  tagName: string;
  count: number;
};

export type Location = {
  lat: number;
  lng: number;
};

export type StoreData = {
  advertise?: Advertise | null; // 廣告資料
  starCount?: number; // 星星數量
  tags?: Tag[] | null; // 標籤列表
  isFavorited: boolean; // 是否收藏
  placeId: string; // Google 地點 ID
  location: Location; // 經緯度
  displayName: string; // 店名
  photos?: Photo[]; // 店鋪照片
  address?: string | null; // 地址
  enAddress?: string | null; // 英文地址
  Book?: string | null; // 預約網址
  budget?: string | null; // 預算
  phone?: string | null; // 電話
  url?: string | null; // 網址
  opening_hours?: OpeningHours | null; // 營業時間
};

//AddShop=================================
export type AddPlaceList = {
  location: Location;
  photos: string[];
  placeId: string;
  displayName: string;
  address: string;
};

//Tag===========================
export type SearchTag = {
  id: number;
  group: "Category" | "Friendly";
  name: string;
};

export type SearchStationTag = {
  id: number;
  area: string;
  country: string;
  countryName: string;
};

//storeResult===========================
export type StoreResult = {
  placeId: string; //Google的ID
  displayName: string; //店名
  photo: string; //店家照片
  starCount: number; //星星數量
  isAdvertise: boolean; //是否為贊助店家
  isFavorited: boolean; //是否收藏
  reviewCount: number; //留言數
  tags: [
    { tagName: string; count: number },
    { tagName: string; count: number }
  ];
  comment: {
    commentId: number; //評論ID
    userPhoto: string; //使用者圖片
    content: string; //評論內容
  };
};

//Login=========================
export type AuthState = {
  token: string | null;
  userId: string | null;
  userName: string | null;
  userPhoto: string | null;
  email?: string;
};
