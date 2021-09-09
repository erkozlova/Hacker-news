import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./index.css";
import { App } from "./App.js";
import { store } from "./store";
import { theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Hacker-news">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
