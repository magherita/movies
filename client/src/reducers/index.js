import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cinema: movieReducer,
  dashboard: dashboardReducer
});
