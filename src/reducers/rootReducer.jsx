import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import MovieDetailsReducer from './MovieDetailsReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  movieDetailsData: MovieDetailsReducer,
});

export default rootReducer;
