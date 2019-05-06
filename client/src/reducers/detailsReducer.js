import { SET_MOVIE_DETAILS } from "../actions/types";

const initialState = {
  isLoaded: false,
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        isLoaded: true,
        movie: action.payload
      };
    default:
      return state;
  }
}
