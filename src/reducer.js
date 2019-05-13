const reducer = (state = null, action = {}) => {
  switch (action.type) {
    // Initial listing of dog breeds
    case "SET_DOGBREEDS":
      return action.payload;
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
