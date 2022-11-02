import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    insertCategory: (state, action) => {
      state.categoriesSlice = action.payload;
    },
  },
});

export const { insertCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
