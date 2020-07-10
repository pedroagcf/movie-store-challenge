export const actionTypes = {
  FETCH_MOVIES_REQUEST: 'FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
  FETCH_MOVIE_DETAILS_REQUEST: 'FETCH_MOVIE_DETAILS_REQUEST',
  FETCH_MOVIE_DETAILS_SUCCESS: 'FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_ERROR: 'FETCH_MOVIE_DETAILS_ERROR',
  FETCH_SEARCH_TERM_REQUEST: 'FETCH_SEARCH_TERM_REQUEST',
  FETCH_SEARCH_TERM_SUCCESS: 'FETCH_SEARCH_TERM_SUCCESS',
  FETCH_SEARCH_TERM_ERROR: 'FETCH_SEARCH_TERM_ERROR',
  DECREMENT_PAGE: 'DECREMENT_PAGE',
  INCREMENT_PAGE: 'INCREMENT_PAGE',
};

export const API_KEY = 'cce53a95ec0e855addeb85b092a5d1b3';
export const PATH_BANNER = 'http://image.tmdb.org/t/p/w185/';

export const endpoints = {
  MOVIES: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false`,
  DETAIL_MOVIE: `https://api.themoviedb.org/3/movie/`,
  SEARCH_TERM: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
};

// https://api.themoviedb.org/3/search/movie?api_key=cce53a95ec0e855addeb85b092a5d1b3&query=Jack+Reacher
