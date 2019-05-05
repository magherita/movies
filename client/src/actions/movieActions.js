import axios from "axios";
import { GET_ERRORS, SET_MOVIE_DETAILS, SET_SEARCHED_MOVIES } from "./types";

// search movies
export const searchMovies = movieData => dispatch => {
  axios
    .post("/api/movies/search", movieData)
    .then(res => {
      if (res.data.Search) {
        dispatch(setSearchedMovies(res.data.Search));
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

//get movie details
export const movieDetails = movieData => dispatch => {
  axios
    .post("/api/movies/id", movieData)
    .then(res => {
      dispatch(setMovieDetails(res.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

// set selected movie
export const setMovieDetails = movie => {
  return {
    type: SET_MOVIE_DETAILS,
    payload: movie
  };
};

// set searched movies
export const setSearchedMovies = movies => {
  return {
    type: SET_SEARCHED_MOVIES,
    payload: movies
  };
};
