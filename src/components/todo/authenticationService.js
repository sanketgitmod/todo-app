import axios from "axios";
import { API_URL } from "./../../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

var executeJwtAuthenticationService = (username, password) => {
  return axios.post(`${API_URL}/authenticate`, {
    username,
    password,
  });
};

var registerSuccessfulLoginForJwt = (username, token) => {
  sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  setupAxiosInterceptors(createJWTToken(token));
};

var createJWTToken = (token) => {
  return "Bearer " + token;
};

var logout = () => {
  return sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
};

var isUserLoggedIn = () => {
  var user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  if (user === null) return false;
  return true;
};

var setupAxiosInterceptors = (token) => {
  axios.interceptors.request.use((config) => {
    if (isUserLoggedIn()) {
      config.headers.authorization = token;
    }
    return config;
  });
};

export {
  logout,
  isUserLoggedIn,
  setupAxiosInterceptors,
  executeJwtAuthenticationService,
  registerSuccessfulLoginForJwt,
  createJWTToken,
};
