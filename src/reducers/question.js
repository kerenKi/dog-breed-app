const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case "GET_QUESTION":
      return action.payload;
    default:
      return state;
  }
};

// Reducer: export
export default reducer;
