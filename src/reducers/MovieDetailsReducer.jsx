import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const MovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.FETCH_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default MovieDetailsReducer;
