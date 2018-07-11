export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, { title: action.title, 
                          id: action.id, 
                          overview: action.overview, 
                          poster: action.poster,
                          ratings: action.ratings } ];
    default:
      return state;
  }
}