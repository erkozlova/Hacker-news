import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./index.css";
import { App } from "./App";
import { store } from "./store";
import { theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
