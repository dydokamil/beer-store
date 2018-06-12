import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import Beers from "./components/Beers";
import Filter from "./components/Filter";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Filter />
      <Beers />
    </React.Fragment>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
