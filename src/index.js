import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/_main.scss";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userss from "./store/reducers/users";

const rootReducer = combineReducers({
  users: userss,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
