import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Game from "./components/GameExperience/Game";
import Landing from "./components/auth/landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/privateRoute";
import { signInResponse } from "./redux/authSlice";
import { useDispatch } from "react-redux";
import { setAuthToken } from "./actions/utilActions";
import { GroupsPage } from "./components/Groups/GroupsPage";
import { GroupPage } from "./components/Groups/GroupPage";

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const dispatch = useDispatch();

  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    const username = localStorage.username;
    setAuthToken(token);

    dispatch(signInResponse({ username: username }));
    window.href = "./home";
  }

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/groups/:id" element={<GroupsPage />} />
          <Route exact path="/groups" element={<GroupsPage />} />
          <Route exact path="/group/:id" element={<GroupPage />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Game darkness={darkHandler} />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
