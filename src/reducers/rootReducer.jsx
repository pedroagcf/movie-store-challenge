import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import MovieDetailsReducer from './MovieDetailsReducer';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  movieDetailsData: MovieDetailsReducer,
  searchResultsData: searchResultsReducer,
});

export default rootReducer;
