import noUserPhoto from "../assets/emptyPhoto/Item-1.png";
import reviewPhoto from "../assets/emptyPhoto/Frame 1984077588.png";
const apiUrl = import.meta.env.VITE_API_URL;
export const commentPicture = `${apiUrl}/Picture/Comment/`;
export const storePicture = `${apiUrl}/Picture/Store/`;
export const userPicture = `${apiUrl}/Picture/User/`;

//預設照片區
export const defaultUserPhoto = noUserPhoto;
export const defaultReviewUserPhoto = reviewPhoto;
