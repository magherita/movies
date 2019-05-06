import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cinema: movieReducer,
  details: detailsReducer
});
