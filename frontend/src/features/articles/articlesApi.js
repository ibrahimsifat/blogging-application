import { apiSlice } from "../api/apiSlice";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (page) => `/article/get?page=${page}`,

      providesTags: ["Article"],
    }),
    getPublishedArticles: builder.query({
      query: (page) => `/article/get/published?page=${page}`,
    }),
    addArticle: builder.mutation({
      query: (data) => ({
        url: "/article/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Article"],
    }),
    getArticle: builder.query({
      query: (slug) => ({
        url: `/article/get/${slug}`,
        method: "GET",
      }),
    }),
    getArticleById: builder.query({
      query: (id) => ({
        url: `/article/edit/${id}`,
        method: "GET",
      }),
    }),

    updateArticle: builder.mutation({
      query: (data) => {
        return {
          url: `/article/update`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Article"],
    }),
    updateArticleStatus: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/article/update/status/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Article"],
    }),

    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/article/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Article"],
    }),
  }),
});

export const {
  useAddArticleMutation,
  useDeleteArticleMutation,
  useGetArticleQuery,
  useGetArticlesQuery,
  useLazyGetArticleQuery,
  useUpdateArticleMutation,
  useUpdateArticleStatusMutation,
  useGetArticleByIdQuery,
  useGetPublishedArticlesQuery,
} = articlesApi;
