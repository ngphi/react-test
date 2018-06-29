const reducer = (state = false, action) => {
  switch(action.type) {
    case 'FETCHTING':
      return true;
    case 'FETCHTING_END':
      return false;
    default:
      return state
  }
}


export default reducer;
