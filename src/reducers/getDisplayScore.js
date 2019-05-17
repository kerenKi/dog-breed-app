const reducer = (state = [], action = {}) => {
    switch (action.type) {
      // Add score
        case "DISPLAY_USERSCORE":
        return  action.payload;    
      default:
        return state;
    }
  };
  
  // Reducer: export
  export default reducer;
  