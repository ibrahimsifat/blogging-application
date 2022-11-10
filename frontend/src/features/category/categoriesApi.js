import { apiSlice } from "../api/apiSlice";
import { editCategory, publishedCategories } from "./categoriesSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (page) => `/category/get?page=${page}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            publishedCategories(
              result.data?.categories?.filter(
                (category) => category.status === "published"
              )
            )
          );
        } catch (err) {
          // do nothing
        }
      },
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (id) => ({
        url: `/category/edit/${id}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(editCategory(result.data.editCategory));
        } catch (err) {
          // do nothing
        }
      },
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/category/update/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Category"],
    }),
    updateCategoryStatus: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/category/update/status/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useUpdateCategoryStatusMutation,
} = categoriesApi;
