import { createSlice } from "@reduxjs/toolkit";
import { getSearchTags, getStationTags } from "../../../apis/getTagsList";
import { Dispatch } from "../store";
import { SearchStationTag, SearchTag } from "../../../type/type";

type TagsState = {
  cityTags: {
    north: SearchStationTag[];
    center: SearchStationTag[];
    south: SearchStationTag[];
    east: SearchStationTag[];
  } | null;
  categoryTags: SearchTag[] | null;
  friendlyTags: SearchTag[] | null;
  status: string;
  error: string | null;
};

const initialState: TagsState = {
  cityTags: null,
  categoryTags: null,
  friendlyTags: null,
  status: "idle", // idle | succeeded | failed
  error: null,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    fetchTagsSuccess(state, action) {
      state.status = "succeeded";
      state.cityTags = action.payload.cityTags;
      state.categoryTags = action.payload.categoryTags;
      state.friendlyTags = action.payload.friendlyTags;
    },
    fetchTagsFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    clearTags(state) {
      state.cityTags = null;
      state.categoryTags = null;
      state.friendlyTags = null;
    },
  },
});

const filter = <T extends Record<string, any>>(
  data: T[],
  filterKey: keyof T,
  group: string
) => {
  return data.filter((tag) => tag[filterKey] === group);
};

export const fetchTagsData =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const cityResult = await getStationTags();
      const result = await getSearchTags();

      //如果status為true賦值cityTags跟categoryTags,friendlyTags
      if (cityResult.status && result.status) {
        const cityTags = {
          north: filter(cityResult.data!, "area", "North"),
          center: filter(cityResult.data!, "area", "Center"),
          south: filter(cityResult.data!, "area", "South"),
          east: filter(cityResult.data!, "area", "East"),
        };
        const categoryTags = filter(result.data!, "group", "Category");
        const friendlyTags = filter(result.data!, "group", "Friendly");

        dispatch(fetchTagsSuccess({ cityTags, categoryTags, friendlyTags }));
      } else {
        throw new Error("Failed to fetch tags");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.name !== "AbortError") {
          dispatch(fetchTagsFailed(error.message));
        }
      } else {
        // 如果不是 Error 類型，出現錯誤訊息
        dispatch(fetchTagsFailed("An unknown error occurred"));
      }
    }
  };

export const { fetchTagsSuccess, fetchTagsFailed, clearTags } =
  tagsSlice.actions;

export const tagsReducer = tagsSlice.reducer;
