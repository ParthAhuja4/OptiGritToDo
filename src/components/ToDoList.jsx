import { useSelector } from "react-redux";
import TodoItem from "./ToDoItem";
import { Stack } from "@mui/material";

const TodoList = ({ setInput, setEditId }) => {
  const todos = useSelector((state) => state.toDo.todos);

  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet!</p>;
  }

  return (
    <Stack spacing={2} className="mb-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setInput={setInput}
          setEditId={setEditId}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
