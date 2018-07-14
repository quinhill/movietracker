export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOW_PLAYING':
      return [ ...action.nowPlaying];
    default:
      return state;
  }
}