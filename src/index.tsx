import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

import App from "./App";
import store from "./Store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
