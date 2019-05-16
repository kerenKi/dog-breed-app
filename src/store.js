// Store: imports
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";

// Thunks: import
import ReduxThunk from "redux-thunk";

// DEV tools: setup
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

// Thunks: Add middleware
const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

// Store: creation and export
const store = createStore(reducer, enhancer);
export default store;
