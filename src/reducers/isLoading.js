const reducer = (state = false, action) => {
  switch(action.type) {
    case 'FETCHING':
      return true;
    case 'FETCHING_END':
      return false;
    default:
      return state
  }
}


export default reducer;
