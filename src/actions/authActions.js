import axios from "axios";
import { signInResponse } from "../redux/authSlice";
import { setAuthToken } from "./utilActions";

// Register User
export const registerUser = (dispatch, userData) => {
  // Reset any errors that may have occured in previous signup attempts
  axios
    .post("http://localhost:9000/api/auth/signup", userData)
    .then((res) => {
      authenticateUser(res, dispatch);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

export const loginUser = (dispatch, userData) => {
  axios
    .post("http://localhost:9000/api/auth/signin", userData)
    .then((res) => {
      authenticateUser(res, dispatch);
    })
    .catch((err) => {
      console.log("FAILED SIGN IN", err);
    });
};

const authenticateUser = (res, dispatch) => {
  const { token } = res.data;
  localStorage.setItem("jwtToken", token);

  const { username } = res.data.user;
  localStorage.setItem("username", username);

  setAuthToken(token);

  dispatch(signInResponse({ username: username }));

  window.location.href = "./home";
};
