import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./components/Background.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { ThemeProvider } from "@emotion/react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid bgcolor={"background.default"} color={"text.primary"}>
        <section id="bg">
          <ul id="shape">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <Routes>
          <Route path="*" element={<Login setMode={setMode} mode={mode} />} />
          <Route
            path="Login"
            element={<Login setMode={setMode} mode={mode} />}
          />
          <Route
            path="SignUp"
            element={<SignUp setMode={setMode} mode={mode} />}
          />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
