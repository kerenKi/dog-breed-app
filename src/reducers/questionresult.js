const reducer = (state = null, action = {}) => {
  switch (action.type) {
    // Add question result
    case "SET_QUESTION_RESULT":
      return action.payload;
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
