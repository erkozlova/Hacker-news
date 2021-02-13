const test_reducer = (state = 'none', action) => {
  switch(action.type) {
    case 'Hello':
      return 'hi';
    case 'Goodbye':
      return "bye";
      default:
        return state;
  }

}

export default test_reducer;