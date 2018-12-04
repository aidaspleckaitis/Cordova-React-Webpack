import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/state";
import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
