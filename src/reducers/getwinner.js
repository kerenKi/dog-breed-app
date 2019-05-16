const reducer = (state = null, action = {}) => {
    switch (action.type) {
      // Get winner breed
      case "GET_WINNER_RANDOM_PIC":
        return action.payload;
      default:
        return state;
    }
  };
  
  // Reducer: export
  export default reducer;
  