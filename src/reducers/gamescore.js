const reducer = (state = [], action = {}) => {
  switch (action.type) {
    // Add score
    case "SET_GAMESCORE":
      return [...state, action.payload];
    // Set the scoer to be an empty array  
    case "RESET_GAMESCORE":
      return action.payload  
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
