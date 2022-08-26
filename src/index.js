import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const store = createStore(reducers, applyMiddleware(thunk));
import Routes from './Routes'
ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  
    document.getElementById("root")
  );
