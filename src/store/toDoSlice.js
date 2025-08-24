import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clear: (state) => {
      state.todos = [];
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { add, remove, update, toggleComplete, clear, setTodos } =
  toDoSlice.actions;

export default toDoSlice.reducer;
