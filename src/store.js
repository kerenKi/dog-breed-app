
// Imports
import { createStore } from "redux";
import reducer from "./reducer";

// DEV tools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Creation of store
const store = createStore(reducer, enhancer);

// Exporting store
export default store;
