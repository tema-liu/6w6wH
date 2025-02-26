//==========呼叫API使用型別===========
export type ResponseData<T = unknown> = {
  statusCode: number; // 狀態碼
  status: boolean; // 狀態
  message: string; // 回應訊息
  data?: T;
  [key: string]: unknown; // 允許額外的未知 key，值的型別為 unknown
};

//=========Reviews====================================
export type Reply = {
  replyId: number; // 留言ID
  userId: number; // 留言人ID
  userName: string; // 留言人名稱
  userPhoto: string;
  comment: string; // 留言內容
  createTime: Date; // 發布時間
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
  commentId: number; // 評論ID
  userId: number; // 評論人ID
  userName: string; // 評論人名稱
  userPhoto: string;
  photos: Photo[]; //照片
  starCount: number; // 星星數量
  comment: string | null; // 評論內容
  replyCount?: number;
  createTime: Date; // 發布時間
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
  displayName?: string;
  storeId?: number;
};

//hotReview===================================================
export type ReviewOrReply = {
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
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
  [key: string]: string; // 動態索引簽名
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
  id: number;
  advertise?: Advertise | null; // 廣告資料
  starCount?: number; // 星星數量
  tags?: Tag[] | null; // 標籤列表
  isFavorited: boolean; // 是否收藏
  placeId: string; // Google 地點 ID
  location: Location; // 經緯度
  displayName: string; // 店名
  photos: Photo[]; // 店鋪照片
  address?: string | null; // 地址
  enAddress?: string | null; // 英文地址
  book?: string | null; // 預約網址
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

export type AddPlaceRes = {
  storeId: number;
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
  userId: number | null;
  userName: string | null;
  userPhoto: string | null;
  email?: string;
};
//search===================================
export type CommentCard = {
  commentId: number;
  userPhoto: string | null; // 頭像
  content: string; // 簡短的內容
};

export type SearchResult = {
  id: number;
  placeId: string;
  displayName: string;
  photos: Photo[];
  starCount: number;
  isAdvertise: boolean;
  isFavorited: boolean;
  reviewCount: number;
  repliesCount: number;
  tags: Tag[];
  comments: CommentCard[];
};
//popular=========================
// Advertise
export type PopularAdvertise = {
  adId: number;
  url: string;
  photo: string;
};

export type PopularStore = {
  id: number;
  displayName: string;
  photos: string[];
  starCount: number;
  comment: {
    commitId: number;
    userPhoto: string | null;
    content: string;
  };
};

//Profile=========================
export type ProfileType = {
  userPhoto: string;
  name: string;
  comeFrom: string;
  nowLiveIn: string;
  bio: string;
  country:
    | "Taiwan"
    | "Vietnam"
    | "Cambodia"
    | "Philippines"
    | "Indonesia"
    | "Thailand";
  gender: string | number;
  birthDay: string;
  badge: "level1" | "level2" | "level3" | "level4" | "level5" | "level6";
  isFollowed: boolean;
};

//Notify============================

// 一般通知的數據結構
export type GeneralNotificationData = {
  userName: string;
  userPhoto: string;
  commentId?: string; // 貼文的ID (可選)
  userId?: string; // 用來導流進入追蹤者頁面 (可選)
  likeType?: "review" | "reply"; // 喜歡的是貼文還是留言 (僅在 action="like" 時需要)
};

// 一般通知
export type GeneralNotification = {
  id: number;
  isCheck: boolean;
  type: "general";
  action: "like" | "follow" | "respond";
  data: GeneralNotificationData;
};

// 廣告通知
export type AdvertiseNotification = {
  id: number;
  isCheck: boolean;
  type: "advertise";
  data: Advertise;
};

// 通知的主類型 (聯合型別)
export type Notification = GeneralNotification | AdvertiseNotification;

//UserCommit=============================
// 店家評論型別
export type CommentData = {
  storeId?: number; // 店家id (僅用戶評論有)
  displayName?: string; // 店家名稱 (僅用戶評論有)
  commentId: number; // 評論 ID
  userName: string; // 評論人名稱
  photos: string[] | null; // 照片
  starCount: 1 | 2 | 3 | 4 | 5; // 星星數量
  comment: string | null; // 評論內容
  createTime: Date; // 發布時間
  likeCount: number; // 愛心數
  replyCount: number; // 留言數量
  isLike: boolean; // 是否已按愛心
  tags: string[]; // 標籤 (如: [Food, Traffic])
};

// 主型別
export type UserCommentData = {
  comment: null | CommentData[]; // 用戶評論資料
  following: null | Comment[]; // 關注者資料
};
