import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice.js";

const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
