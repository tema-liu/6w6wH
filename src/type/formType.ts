import { Location } from "./type";

// 新增店家表單==================
export type AddPlaceList = {
  location: Location;
  photos: string[] | null;
  placeId: string;
  displayName: string;
  address: string;
  tags: string[];
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

//editProfile
export type EditProfileForm = {
  photo: string;
  name: string;
  comeFrom: string;
  nowLiveIn: string;
  bio: string;
  country: string;
  gender: string;
  birth: string;
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
  userPhoto: string;
};

//search=============
export type SearchOption = {
  cityId: string;
  location: Location;
  locationType: "station" | "user";
  tags: number[];
};
