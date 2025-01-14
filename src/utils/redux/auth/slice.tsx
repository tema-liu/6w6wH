import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../type/type";

const initialState: AuthState = {
  token: null,
  userId: null,
  userName: null,
  userPhoto: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchLoginData(state, action: PayloadAction<AuthState>) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userPhoto = action.payload.userPhoto;
    },

    clearLoginData(state) {
      state.token = null;
      state.userId = null;
      state.userName = null;
      state.userPhoto = null;
    },
  },
});

export const { fetchLoginData, clearLoginData } = authSlice.actions;
export const authReducer = authSlice.reducer;
