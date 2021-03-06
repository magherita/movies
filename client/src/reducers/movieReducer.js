import { SET_SEARCHED_MOVIES } from "../actions/types";

const initialState = {
  isLoaded: false,
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        isLoaded: true,
        movies: action.payload
      };
    default:
      return state;
  }
}
