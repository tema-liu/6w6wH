import { createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "../../../type/type";

const initialState: ProfileType = {
  userPhoto: "",
  name: "",
  comeFrom: "",
  nowLiveIn: "",
  bio: "",
  country: "Indonesia",
  gender: "Male",
  birthDay: "",
  badge: "level1",
  isFollowed: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfile(state, action) {
      state.userPhoto = action.payload.userPhoto;
      state.name = action.payload.name;
      state.comeFrom = action.payload.comeFrom;
      state.nowLiveIn = action.payload.nowLiveIn;
      state.bio = action.payload.bio;
      state.country = action.payload.country;
      state.gender = action.payload.gender;
      state.birthDay = action.payload.birthDay;
      state.badge = action.payload.badge;
      state.isFollowed = action.payload.isFollowed;
    },

    clearProfile(state) {
      state.userPhoto = "";
      state.name = "";
      state.comeFrom = "";
      state.nowLiveIn = "";
      state.bio = "";
      state.country = "Indonesia";
      state.gender = "";
      state.birthDay = "";
      state.badge = "level1";
      state.isFollowed = false;
    },
  },
});

export const { fetchProfile, clearProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
