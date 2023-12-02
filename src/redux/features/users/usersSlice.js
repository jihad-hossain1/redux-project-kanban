import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "jihad",
  email: "jihadkhan@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
