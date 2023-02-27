const initialState = "Hello World!";

function myReducer(state = initialState, action) {
  switch(action.type) {
    // Handle any actions you need here
    default:
      return state;
  }
}

export default myReducer;
