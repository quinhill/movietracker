export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
};