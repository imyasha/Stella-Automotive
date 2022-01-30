import axios from "axios";
import { movieActionTypes } from "./types";

// OMDB not support limit of the movies
// just show result of harry for now.
export const getMovies = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(`${process.env.OMDB_URL}?s=harry&apikey=${process.env.APIKEY}`)
    .then((res) => {
      const payload = {
        movies: res.data.Search,
      };
      dispatch({
        type: movieActionTypes.GET_MOVIES,
        payload,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
};

export const getMoviesByTitle = (title) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(`${process.env.OMDB_URL}?s=${title}&apikey=${process.env.APIKEY}`)
    .then((res) => {
      const payload = {
        movies: res.data.Search,
      };
      dispatch({
        type: movieActionTypes.GET_MOVIES,
        payload,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
};

export const getDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(`${process.env.OMDB_URL}?i=${id}&apikey=${process.env.APIKEY}&plot=full`)
    .then((res) => {
      const payload = { movie: res.data };
      dispatch({
        type: movieActionTypes.GET_MOVIE,
        payload,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
};

export const getPage =
  ({ pageIndex, keyword }) =>
  (dispatch) => {
    dispatch(setLoading());
    axios
      .get(
        `${process.env.OMDB_URL}?s=${keyword}&page=${pageIndex}&apikey=${process.env.APIKEY}`
      )
      .then((res) => {
        const payload = { movie: res.data };
        dispatch({
          type: movieActionTypes.GET_MOVIE,
          payload,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

export const setLoading = () => {
  return {
    type: movieActionTypes.LOADING,
  };
};
