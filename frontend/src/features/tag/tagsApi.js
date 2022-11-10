import { apiSlice } from "../api/apiSlice";
import { editTag, publishedTags } from "./tagsSlice";

export const tagsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: (page) => `/tag/get?page=${page}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            publishedTags(
              result.data?.tags?.filter((tag) => tag.status === "published")
            )
          );
        } catch (err) {
          // do nothing
        }
      },
      providesTags: ["Tag"],
    }),
    addTag: builder.mutation({
      query: (data) => ({
        url: "/tag/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),
    getTag: builder.query({
      query: (id) => ({
        url: `/tag/edit/${id}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(editTag(result.data.editTag));
        } catch (err) {
          // do nothing
        }
      },
    }),

    updateTag: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/tag/update/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Tag"],
    }),
    updateTagStatus: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/tag/update/status/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Tag"],
    }),

    deleteTag: builder.mutation({
      query: (id) => ({
        url: `/tag/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const {
  useAddTagMutation,
  useGetTagQuery,
  useGetTagsQuery,
  useUpdateTagMutation,
  useUpdateTagStatusMutation,
  useDeleteTagMutation,
} = tagsApi;
