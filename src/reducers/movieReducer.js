export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      const newState = [...state, ...action.nowPlaying];
      console.log(newState)
    default:
      return state;
  }
}