import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogimages from "./dogimages";
import question from "./question";

export default combineReducers({
  dogbreeds, dogimages, question
});
