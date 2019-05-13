// Store: import
import { createStore } from "redux";
import reducer from "./reducer";

// DEV tools setup
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Store: creation
const store = createStore(reducer, enhancer);

// Store: export
export default store;
