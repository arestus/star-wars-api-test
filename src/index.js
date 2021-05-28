import React from "react";
import ReactDOM from "react-dom";
import "@styles/index.css";
import App from "@containers/App";
import store from "@store/store";
import { Provider } from "react-redux";
import ThemeProvider from "@context/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
