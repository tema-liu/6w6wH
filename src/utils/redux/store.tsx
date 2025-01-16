import { configureStore } from "@reduxjs/toolkit";
import { tagsReducer } from "./tagList/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { profileReducer } from "./userProfile/slice";

const persistConfig = {
  key: "auth",
  storage,
};
//包裝reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    auth: persistedReducer, //持久化資料
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
