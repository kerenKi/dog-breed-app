const reducer = (state = [], action = {}) => {
  switch (action.type) {
    // Add score
    case "SET_GAMESCORE":
      return [...state, action.payload];
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
