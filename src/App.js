import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Game from "./components/GameExperience/Game";
import Landing from "./components/auth/landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/privateRoute";

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Game darkness={darkHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
