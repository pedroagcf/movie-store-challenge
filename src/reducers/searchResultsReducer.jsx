import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_TERM_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_SEARCH_TERM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_SEARCH_TERM_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default searchResultsReducer;
