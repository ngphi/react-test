const OFFSET = 20

const defaultState = {
  offset: OFFSET,
  urls: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {offset: state.offset + OFFSET, urls: [...state.urls, ...action.urls]}
    default:
      return state
  }
}


export default reducer;
