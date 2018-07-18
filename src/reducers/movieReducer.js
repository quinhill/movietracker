export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOW_PLAYING':
      return [...action.nowPlaying];
    case 'TOGGLE_FAVORITE':
      return state.map(movie => {
        if (movie.id == action.id) {
          movie = {...movie, favorite: !movie.favorite};
        } 
        return movie;
      });
    default:
      return state;
  }
};