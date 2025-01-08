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
type Tags = string[];

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
  tags: Tags;
  starCount: number;
  comment: string;
  photos: addPhoto;
  placeId: number;
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
