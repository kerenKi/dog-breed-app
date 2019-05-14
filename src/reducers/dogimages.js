const reducer = (state = null, action = {}) => {
    switch (action.type) {
      // Show images of dog breeds
      case "SET_DOGIMAGES":
        return action.payload;
      default:
        return state;
    }
  };
  
  // Reducer: export
  export default reducer;
  