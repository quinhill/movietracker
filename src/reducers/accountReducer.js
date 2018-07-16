export const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return action.newUser;
    case 'LOG_IN':
      return action.user;
    case 'LOG_OUT':
      return { message: action.message };
    case 'PROMPT_CREATE':
      return { message: action.message };
    case 'ADD_USER_FAVORITE':
      if (state.favorites) {
        return {...state, favorites: [...state.favorites, action.favorite]};
      } else {
        return {...state, favorites: [action.favorite]}
      }
    case 'REMOVE_USER_FAVORITE':
    let newFavorites;
      if (state.favorites) {
        newFavorites = state.favorites.filter(favorite => (
          favorite.id != action.id
        ));
      }
      console.log(newFavorites)
      return {...state, favorites: newFavorites} 
    case 'LOGIN_USER_FAVORITES':
      return {...state, favorites: [...action.favorites]};
    default:
      return state;
  } 
};