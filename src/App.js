import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";

// The function that toggles between themes
function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>

        <footer>
          <small>
            <b>Sun</b> icon made by{" "}
            <a href="https://www.flaticon.com/authors/smalllikeart">
              smalllikeart
            </a>{" "}
            from <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
          <small>
            <b>Moon</b> icon made by{" "}
            <a href="https://www.freepik.com/home">Freepik</a> from{" "}
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
