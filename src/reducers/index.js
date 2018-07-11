import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';

const rootReducer = combineReducers({
  nowPlaying: movieReducer
})

export default rootReducer;