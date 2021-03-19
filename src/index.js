import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import profilePicReducer from "./store/users";
import ui from './store/ui'

import App from "./App.jsx";

const rootReducer = combineReducers({ ui, profilePicReducer });

const store = configureStore({
  reducer: rootReducer,
});

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
