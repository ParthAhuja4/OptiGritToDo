import { TextField, Button, Stack } from "@mui/material";

const TodoInput = ({ input, setInput, editId, handleAddOrUpdate }) => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} className="mb-6">
      <TextField
        fullWidth
        variant="outlined"
        label={editId ? "Update Task" : "New Task"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOrUpdate}
        className="rounded-xl px-6"
      >
        {editId ? "Update" : "Add"}
      </Button>
    </Stack>
  );
};

export default TodoInput;
