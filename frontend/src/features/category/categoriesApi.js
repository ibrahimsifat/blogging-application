import { apiSlice } from "../api/apiSlice";
import { insertCategory } from "./categoriesSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category/get`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(insertCategory(result.data));
        } catch (err) {
          // do nothing
        }
      },
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category/add",
        method: "POST",
        body: data,
      }),
    }),
    getCategory: builder.query({
      query: (slug) => ({
        url: `/category/get/${slug}`,
        method: "GET",
      }),
    }),

    updateCategory: builder.mutation({
      query: ({ slug, data }) => ({
        url: `/category/${slug}`,
        method: "PATCH",
        data,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} = categoriesApi;
