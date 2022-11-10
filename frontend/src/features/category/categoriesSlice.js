import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  editCategory: {},
  searchString: "",
  publishedCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    insertCategories: (state, action) => {
      state.categoriesSlice = action.payload;
    },
    editCategory: (state, action) => {
      state.editCategory = action.payload;
    },
    search: (state, action) => {
      state.searchString = action.payload;
    },
    publishedCategories: (state, action) => {
      state.publishedCategories = action.payload;
    },
  },
});

export const { insertCategory, editCategory, search, publishedCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
