import axios from "axios";
import { signInResponse } from "../redux/authSlice";
import { setAuthToken } from "./utilActions";

// Register User
export const registerUser = (dispatch, userData) => {
  // Reset any errors that may have occured in previous signup attempts
  axios
    .post("http://localhost:3000/auth/signup", userData)
    .then((res) => {
      authenticateUser(res, dispatch, null);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

export const loginUser = (dispatch, userData, groupId) => {
  axios
    .post("http://localhost:3000/auth/login", userData)
    .then((res) => {
      authenticateUser(res, dispatch, groupId);
    })
    .catch((err) => {
      console.log("FAILED SIGN IN", err);
    });
};

const authenticateUser = (res, dispatch, groupId) => {
  console.log(res.data);
  const { token, username } = res.data;
  localStorage.setItem("jwtToken", token);
  localStorage.setItem("username", username);

  setAuthToken(token);

  dispatch(signInResponse({ username: username }));

  if (groupId) {
    window.location.href = `./groups/${groupId}`;
  } else {
    window.location.href = "./home";
  }
};
