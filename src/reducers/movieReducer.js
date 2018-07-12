export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOW_PLAYING':
      return [...state, ...action.nowPlaying];
    default:
      return state;
  }
}