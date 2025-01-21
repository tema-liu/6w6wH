import { Location } from "./type";

// 新增店家表單==================
export type AddPlaceList = {
  location: Location;
  photos: string[] | null;
  placeId: string;
  displayName: string;
  address: string;
  tags: number[];
};

//tags=======================
type Tags = number[];

export type TagsField = {
  tags: Tags;
};

export type FormTags = {
  tags: Tags;
  cityId: string;
  [key: string]: unknown; // 允許其他屬性，但類型為未知
};

//postCommit=======================
export type addPhoto = File[];
export type PostCommitForm = {
  tags: number[];
  starCount: number;
  comment: string;
  photos: addPhoto;
  placeId?: string;
  storeId?: string;
  commentPictures?: string[];
};

//postCommentReply
export type CommentReply = {
  commentId: number;
  userId: number;
  comment: string;
};

//editProfile
export type EditProfileForm = {
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
};

//userSetUp========================
export type PartialUserSetupForm = {
  country: string;
  gender: string;
  birthDay: string;
};
export type UserSetupForm = {
  country: string;
  gender: string;
  birthDay: string;
  email: string;
  userName: string;
  userPhoto: null;
};

//search=============
export type SearchOption = {
  cityId: string;
  location: Location;
  locationType: "station" | "user";
  tags: number[];
};

//ReportComment=======================
export type ReportComment = {
  type: string; // comment,reply
  commentId: number; //被檢舉評論ID
  ReportReason: string; //檢舉原因
};

//CommentLike=======================
export type CommentLike = {
  type: "comment" | "reply";
  id: number;
};

//ReportStore===================
export type ReportStore = {
  errorText: string[];
  suggestText: string;
  storeId: number;
};
