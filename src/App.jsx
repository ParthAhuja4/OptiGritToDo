import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, add, update } from "./store/toDoSlice";
import { Container, Paper, Typography } from "@mui/material";

import Header from "./components/Header";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
import ClearButton from "./components/ClearButton";

const App = () => {
  const todos = useSelector((state) => state.toDo.todos);
  const dispatch = useDispatch();
  const [hydrated, setHydrated] = useState(false);

  // editing state
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Load todos
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) dispatch(setTodos(JSON.parse(stored)));
    setHydrated(true);
  }, [dispatch]);

  // Save todos
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, hydrated]);

  const handleAddOrUpdate = () => {
    if (!input.trim()) return alert("Enter a valid task!");

    if (editId) {
      dispatch(update({ id: editId, text: input.trim() }));
      setEditId(null);
    } else {
      dispatch(add(input.trim()));
    }
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 transition-colors">
      <div className="top-0.5 mb-[10vh]">
        <Typography
          variant="h3"
          className="font-extrabold text-gray-800 dark:text-gray-100 text-center"
        >
          To Do App with Local Storage
        </Typography>
      </div>
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          className="rounded-2xl shadow-xl p-6 backdrop-blur-md bg-white/90 dark:bg-gray-900 transition-colors"
        >
          <Header />
          <TodoInput
            input={input}
            setInput={setInput}
            editId={editId}
            handleAddOrUpdate={handleAddOrUpdate}
          />
          <TodoList setInput={setInput} setEditId={setEditId} />
          <ClearButton />
        </Paper>
      </Container>
    </div>
  );
};

export default App;
