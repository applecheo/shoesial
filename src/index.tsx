import React from "react";
import ReactDOM from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[400],
    },
    secondary: {
      main: green[500],
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
