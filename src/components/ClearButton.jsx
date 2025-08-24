import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { clear } from "../store/toDoSlice";

const ClearButton = () => {
  const todos = useSelector((state) => state.toDo.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) return null;

  return (
    <Button
      fullWidth
      variant="outlined"
      color="secondary"
      className="mt-6 rounded-xl"
      onClick={() => dispatch(clear())}
    >
      Clear All
    </Button>
  );
};

export default ClearButton;
