import { apiSlice } from "../api/apiSlice";
import { editArticle, publishedArticles } from "./articlesSlice";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (page) => `/article/get?page=${page}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            publishedArticles(
              result.data?.articles?.filter(
                (article) => article.status === "published"
              )
            )
          );
        } catch (err) {
          // do nothing
        }
      },
      providesTags: ["Article"],
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
      query: (id) => ({
        url: `/article/edit/${id}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(editArticle(result.data.editArticle));
        } catch (err) {
          // do nothing
        }
      },
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
} = articlesApi;
