// React: imports
import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// BrowserRouter: import
import { BrowserRouter } from "react-router-dom";

// Redux: imports
import store from "./store";
import { Provider } from "react-redux";

// APP wrapped in Redux store and BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
