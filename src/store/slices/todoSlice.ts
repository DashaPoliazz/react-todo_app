import { createSlice } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

interface ITodoSliceState {
  todos: ITodo[];
}

const initialState: ITodoSliceState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const todoSliceActions = todoSlice.actions;
export default todoSlice;
