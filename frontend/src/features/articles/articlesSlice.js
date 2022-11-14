import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  editArticle: {},
  searchString: "",
  publishedArticles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    insertArticle: (state, action) => {
      state.categoriesSlice = action.payload;
    },
    editArticle: (state, action) => {
      state.editArticle = action.payload;
    },
    search: (state, action) => {
      state.searchString = action.payload;
    },
    publishedArticles: (state, action) => {
      state.publishedArticles = action.payload;
    },
  },
});

export const { insertArticle, editArticle, search, publishedArticles } =
  articlesSlice.actions;
export default articlesSlice.reducer;
