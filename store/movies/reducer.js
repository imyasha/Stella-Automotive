import { movieActionTypes } from "./types";
const moviesInitialState = {
  loading: false,
  movies: [],
  movie: {}
};

const movieReducer = (state = moviesInitialState, action) => {
  switch(action.type) {
    case movieActionTypes.GET_MOVIES:
      return {...state, ...action.payload, loading: false};
    case movieActionTypes.GET_MOVIE:
      return {...state, ...action.payload, loading: false};
    case movieActionTypes.LOADING:
      return {...state, loading: true};
    default:
      return state;
  }
}

export default movieReducer;