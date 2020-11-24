import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types.js";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      // If token is expired, logout user, else authorize
      const currentTime = Date.now() / 1000;
      if (res.data.exp < currentTime) {
        dispatch({
          type: AUTH_ERROR,
        });
      } else {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Login User
export const login = (userData, history) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  axios
    .post("/api/auth", userData, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// Register User
export const register = (userData, history) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  axios
    .post("/api/users", userData, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// Setup config/header and token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
