import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../redux/features/tasks/taskSlice";
import userSlice from "../redux/features/users/usersSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
