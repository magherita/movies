import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";

// register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get user token upon successful login
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // save to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // set token to auth header
      setAuthToken(token);
      // decode token to retrieve user data
      const decoded = jwtDecode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set current user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// log out user
export const logoutUser = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("jwtToken");
  // remove auth header  for future requests
  setAuthToken(false);
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
