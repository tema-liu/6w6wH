import { configureStore } from "@reduxjs/toolkit";
import { tagsReducer } from "./tagList/slice";
import { authReducer } from "./auth/slice";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
