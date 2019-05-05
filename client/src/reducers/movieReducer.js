import { SET_MOVIE_DETAILS, SET_SEARCHED_MOVIES } from "../actions/types";

const initialState = {
  isLoaded: false,
  movie: {},
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        isLoaded: true,
        movie: action.payload,
        movies: []
      };
    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        isLoaded: true,
        movie: {},
        movies: action.payload
      };
    default:
      return state;
  }
}
