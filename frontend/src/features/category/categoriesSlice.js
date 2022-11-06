import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  editCategory: {},
  searchString: "",
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
  },
});

export const { insertCategory, editCategory, search } = categoriesSlice.actions;
export default categoriesSlice.reducer;
