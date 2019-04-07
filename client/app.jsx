/* eslint-disable no-unused-vars */
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import Body from "./components/body";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/* eslint-disable no-unused-vars */
import reducers from "./reducers/combinedReducers";

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

window.store = store;

render(<Body store={ store } />, document.getElementById("root"));