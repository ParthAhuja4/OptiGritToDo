import { Stack, Typography, Switch } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <Typography
        variant="h3"
        className="font-extrabold text-gray-800  text-center sm:text-left"
      >
        Manage your tasks efficiently
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        className="self-center sm:self-auto"
      >
        <Typography className="text-gray-600  text-sm">Theme</Typography>
        <Switch onChange={toggleTheme} />
      </Stack>
    </div>
  );
};

export default Header;
