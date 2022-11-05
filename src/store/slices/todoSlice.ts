import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../Types/ITodo";

interface ITodoSliceState {
  todos: ITodo[];
}

const initialState: ITodoSliceState = {
  todos: [
    {
      id: "id1",
      title: "Title1",
      completed: false,
    },
    {
      id: "id2",
      title: "Title2",
      completed: true,
    },
    {
      id: "id3",
      title: "Title3",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const todoSliceActions = todoSlice.actions;
export default todoSlice.reducer;
