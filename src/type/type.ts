//=========Reviews====================================
type Reply = {
  replyID: string; // 留言ID
  userID: string; // 留言人ID
  userName: string; // 留言人名稱
  userPhoto: string;
  comment: string; // 留言內容
  postedAt: Date; // 發布時間
  medal: string | null; // 獎牌
  likeCount: number; // 愛心數
  isLike: boolean; // 是否已按愛心
};

export type Comment = {
  commentID: string; // 評論ID
  userID: string; // 評論人ID
  userName: string; // 評論人名稱
  userPhoto: string;
  photo: string[]; //照片
  starCount: number; // 星星數量
  comment: string | null; // 評論內容
  postedAt: Date; // 發布時間
  likeCount: number; // 愛心數
  isLike: boolean; // 是否已按愛心
  tag: string[]; // 評價標籤
  medal: string | null; // 獎牌
  reply: null | Reply[]; // 留言回覆
};

export type ResponseData = {
  statusCode: number; // 狀態碼
  status: boolean; // 狀態
  message: string; // 回應訊息
  data: Comment; // 單一店家評論資料
};
