import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { accountReducer } from './accountReducer';

const rootReducer = combineReducers({
  nowPlaying: movieReducer,
  accounts: accountReducer
})

export default rootReducer;