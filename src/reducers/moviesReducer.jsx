import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      console.log('REDUCER');

      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case actionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
