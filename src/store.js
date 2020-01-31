import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {};
let store;

if (process.env.NODE_ENV === "development") {
  const devTools =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : null;

  store = createStore(rootReducer, initialState, compose(devTools));
} else {
  store = createStore(rootReducer, initialState);
}

export default store;
