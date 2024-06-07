import { useState } from "react";
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import "./App.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#161616",
        light: "#ffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Appbar />
        <Home />
        <About />
        <Project />
        <Skill />
      </>
    </ThemeProvider>
  );
}

export default App;
