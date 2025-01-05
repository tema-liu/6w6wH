import { configureStore } from "@reduxjs/toolkit";
import { tagsReducer } from "./tagList/slice";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
