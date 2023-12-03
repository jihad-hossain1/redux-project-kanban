import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiT = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});

export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } =
  baseApiT;
export default baseApiT;
