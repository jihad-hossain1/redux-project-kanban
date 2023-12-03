import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../redux/features/tasks/taskSlice";
import userSlice from "../redux/features/users/usersSlice";
import baseApi from "./features/api/baseApi";
import baseApiT from "./features/api/baseApiT";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiT.reducerPath]: baseApiT.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApiT.middleware),
});

export default store;
