import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  LoginButton,
  LoginButtonRow,
  LoginHeader,
  LoginInput,
  LoginLogo,
  LoginBanner,
  LoginBody,
  NotAMember,
  AuthWidget,
  AuthWidgetContainer,
} from "./style";
import logo from "../Landing/logo512.png";
import { loginUser } from "../../../actions/authActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  if (isAuthenticated) {
    navigate("/home");
  }

  const login = () => {
    loginUser(
      dispatch,
      { username: username, password: password },
      location.state?.groupId
    );
  };

  return (
    <AuthWidgetContainer container>
      <AuthWidget item xs={11} md={4} lg={3}>
        <LoginBanner>
          <LoginLogo src={logo} />
        </LoginBanner>
        <LoginBody>
          <LoginHeader>Sign In</LoginHeader>
          <div>
            <LoginInput
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></LoginInput>
          </div>
          <div>
            <LoginInput
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></LoginInput>
          </div>
          <LoginButtonRow>
            <LoginButton onClick={() => login()}>Login</LoginButton>
            <NotAMember>
              Not a member? <Link to="/register">Sign up</Link>
            </NotAMember>
          </LoginButtonRow>
        </LoginBody>
      </AuthWidget>
    </AuthWidgetContainer>
  );
};

export default Login;
