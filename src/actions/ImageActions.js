function fetchImages(offset) {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=qxPoBrk6VizrCO8Qgd7dRhpw7jq8R9rk&limit=20&offset=${offset}`);
}

export function loadImages() {
  return function (dispatch, getState) {
    const offset = getState().images.offset;

    dispatch({type: 'FETCHING'});

    return fetchImages(offset)
      .then((response) => response.json())
      .then(({data}) => {
        dispatch({type: 'FETCHING_END'});

        dispatch({
          type: 'FETCH_IMAGES',
          urls: data.map(({images, user}) => ({
            url: images.downsized_medium.url,
            avatarUrl: user.avatar_url,
            username: user.username
          }))
        })
      })
  }
}
