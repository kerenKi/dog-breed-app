import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogimages from "./dogimages";
import question from "./question";
import getwinner from "./getwinner";

export default combineReducers({
  dogbreeds, dogimages, question, getwinner
});
