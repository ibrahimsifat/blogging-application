import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  editTags: {},
  searchString: "",
  publishedTags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    insertTags: (state, action) => {
      state.tagsSlice = action.payload;
    },
    editTag: (state, action) => {
      state.editTag = action.payload;
    },
    search: (state, action) => {
      state.searchString = action.payload;
    },
    publishedTags: (state, action) => {
      state.publishedTags = action.payload;
    },
  },
});

export const { insertTag, editTag, search, publishedTags } = tagsSlice.actions;
export default tagsSlice.reducer;
