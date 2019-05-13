// Store: imports
import { createStore } from "redux";
import reducer from "./reducer";

// Connect dev tools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Store: creation
const store = createStore(reducer, enhancer);

// Store: exporting
export default store;
