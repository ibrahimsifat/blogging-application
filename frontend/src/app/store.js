import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
// import counterReducer from '../features/counter/counterSlice';
import articlesSliceReducer from "../features/articles/articlesSlice";
import authSliceReducer from "../features/auth/authSlice";
import categoriesSliceReducer from "../features/category/categoriesSlice";
import tagsSliceReducer from "../features/tag/tagsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    category: categoriesSliceReducer,
    tag: tagsSliceReducer,
    article: articlesSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
