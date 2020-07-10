import { actionTypes, endpoints, API_KEY } from '../utils/js/constants';
import Axios from 'axios';

export const fetchMovieDetailsRequest = () => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_REQUEST,
  };
};

export const fetchMovieDetailsSuccess = (movieDetailsData) => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
    payload: movieDetailsData,
  };
};

export const fetchMovieDetailsError = (error) => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_ERROR,
    payload: error,
  };
};

const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieDetailsRequest());
    Axios.get(
      `${endpoints.DETAIL_MOVIE + movieId}?api_key=${API_KEY}&language=pt-BR`
    )
      .then((res) => {
        dispatch(fetchMovieDetailsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchMovieDetailsError(error.message));
      });
  };
};

export default fetchMovieDetails;
