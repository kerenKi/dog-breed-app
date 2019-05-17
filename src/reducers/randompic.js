import { SET_RANDOMPIC } from "../actions/GetRandomPic";

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    // Add score
    case SET_RANDOMPIC:
      return action.payload;
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
