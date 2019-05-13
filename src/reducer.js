const reducer = (state = null, action = {}) => {
  switch (action.type) {
    // Setting dog breeds
    case "SET_DOGBREEDS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
