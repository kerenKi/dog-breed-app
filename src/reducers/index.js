import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogimages from "./dogimages";
import question from "./question";
import getwinner from "./getwinner";
import gamescore from "./gamescore";
import randompic from "./randompic";
import questionresult from "./questionresult";
import getDisplayScore from "./getDisplayScore"


export default combineReducers({
  dogbreeds,
  dogimages,
  question,
  getwinner,
  gamescore,
  questionresult,
randompic,
  getDisplayScore

});
