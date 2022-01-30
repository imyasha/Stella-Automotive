import { movieActionTypes } from "./types";
const moviesInitialState = {
  loading: false,
  movies: [],
  movie: {},
  totalCount: 0,
  errors: {},
};

const movieReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case movieActionTypes.GET_MOVIES:
      return { ...state, ...action.payload, loading: false };
    case movieActionTypes.GET_MOVIE:
      return { ...state, ...action.payload, loading: false };
    case movieActionTypes.LOADING:
      return { ...state, loading: true };
    case movieActionTypes.GET_ERRORS:
      return { ...state, errors: action.payload, loading: false };
    case movieActionTypes.CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
  }
};

export default movieReducer;
