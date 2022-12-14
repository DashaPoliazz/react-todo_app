import ReactDOM from "react-dom";

import "./styles/index.css";
import "./styles/todo-list.css";
import "./styles/filters.css";

import { Provider } from "react-redux";

import { store } from "./store";

import { App } from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
