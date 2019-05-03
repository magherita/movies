import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // add token to each http request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
