import React from "react";
import ToggleTheme from "./components/ToggleTheme";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./app/theme";
import { selectTheme } from "./features/theme/themeSlice";
import { useSelector } from "react-redux";

export const App = () => {
  const themeState = useSelector(selectTheme);
  console.log(themeState);
  return (
      <ThemeProvider theme={themeState.isDarkMode ? darkTheme : lightTheme}>
        <ToggleTheme />
      </ThemeProvider>
  );
};

export default App;
