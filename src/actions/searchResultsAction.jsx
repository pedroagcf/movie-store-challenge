import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchSearchTermRequest = () => {
  return {
    type: actionTypes.FETCH_SEARCH_TERM_REQUEST,
  };
};

export const fetchSearchTermSuccess = (searchTermData) => {
  return {
    type: actionTypes.FETCH_SEARCH_TERM_SUCCESS,
    payload: searchTermData,
  };
};

export const fetchSearchTermError = (error) => {
  return {
    type: actionTypes.FETCH_SEARCH_TERM_ERROR,
    payload: error,
  };
};

const fetchSearchTerm = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchSearchTermRequest());
    Axios.get(endpoints.SEARCH_TERM + searchTerm)
      .then((res) => {
        dispatch(
          fetchSearchTermSuccess(res.status === 204 ? { items: [] } : res.data)
        );
        console.log(res.data);
      })
      .catch((error) => {
        dispatch(fetchSearchTermSuccess(error.message));
      });
  };
};

export default fetchSearchTerm;
