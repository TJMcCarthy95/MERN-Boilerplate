import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import prmoise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [
  prmoise(),
  thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

switch(process.env.NODE_ENV) {
  case "development": {
    middleware.push(createLogger({
      collapsed: true
    }));
    break;
  }
  default: break;
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store
