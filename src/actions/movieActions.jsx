import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchMoviesRequest = () => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};

export const fetchMoviesError = (error) => {
  return {
    type: actionTypes.FETCH_MOVIES_ERROR,
    payload: error,
  };
};

export const incrementPage = () => {
  return {
    type: actionTypes.INCREMENT_PAGE,
  };
};

export const decrementPage = () => {
  return {
    type: actionTypes.DECREMENT_PAGE,
  };
};

const fetchMovies = (page) => {
  console.log('fetch movies ' + page);
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    Axios.get(`${endpoints.MOVIES}&page=${page}`)
      .then((res) => {
        dispatch(fetchMoviesSuccess(res.data));
        console.log(res.data);
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error.message));
      });
  };
};

export default fetchMovies;
