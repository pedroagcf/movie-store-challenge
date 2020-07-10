import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  page: 1,
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  let { page } = state;
  console.log('reducer page' + page);

  switch (action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
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

    case actionTypes.INCREMENT_PAGE:
      console.log('here');

      return {
        ...state,
        page: page + 1,
      };
    case actionTypes.DECREMENT_PAGE:
      return {
        ...state,
        page: page === 1 ? 1 : page - 1,
      };

    default:
      return state;
  }
};
export default moviesReducer;
