import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { accountReducer } from './accountReducer';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  nowPlaying: movieReducer,
  user: accountReducer,
  favorites: favoritesReducer
})

export default rootReducer;