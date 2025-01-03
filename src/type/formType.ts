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
export type FormTags = {
  tags: number[];
  cityId: string;
  [key: string]: unknown; // 允許其他屬性，但類型為未知
};
