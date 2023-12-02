import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userSpecificTask: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updatedStatus: (state, { payload }) => {
      let target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpecificTask = state.tasks.filter(
        (item) => item.assignTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updatedStatus, userTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
