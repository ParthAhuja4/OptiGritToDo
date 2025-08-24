import { useDispatch } from "react-redux";
import { toggleComplete, remove } from "../store/toDoSlice";
import { Paper, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, setInput, setEditId }) => {
  const dispatch = useDispatch();

  return (
    <Paper className="flex items-center justify-between p-3 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
          className="w-5 h-5 cursor-pointer accent-indigo-500"
        />
        <Typography
          className={`${
            todo.completed
              ? "line-through opacity-60 text-gray-500 dark:text-gray-400"
              : "text-gray-800 "
          }`}
        >
          {todo.text}
        </Typography>
      </div>

      <div>
        <IconButton
          color="primary"
          onClick={() => {
            setEditId(todo.id);
            setInput(todo.text);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => dispatch(remove(todo.id))}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default TodoItem;
