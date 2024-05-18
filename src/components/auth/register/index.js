import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlreadyAMember,
  RegisterBanner,
  RegisterBody,
  RegisterButton,
  RegisterButtonRow,
  RegisterContainer,
  RegisterHeader,
  RegisterInput,
  RegisterLogo,
} from "./style";
import logo from "../Landing/logo512.png";
import { registerUser } from "../../../actions/authActions";
import { useDispatch } from "react-redux";
import { AuthWidget, AuthWidgetContainer } from "../Login/style";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    registerUser(dispatch, {
      username: username,
      password: password,
      name: name,
    });
  };

  return (
    <AuthWidgetContainer container>
      <AuthWidget item xs={11} md={4} lg={3}>
        <RegisterBanner>
          <RegisterLogo src={logo} />
        </RegisterBanner>
        <RegisterBody>
          <RegisterHeader>Sign up</RegisterHeader>
          <div>
            <RegisterInput
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></RegisterInput>
          </div>
          <div>
            <RegisterInput
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></RegisterInput>
          </div>
          <div>
            <RegisterInput
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></RegisterInput>
          </div>
          <RegisterButtonRow>
            <RegisterButton onClick={() => register()}>
              Register Account
            </RegisterButton>
            <AlreadyAMember>
              Already a member? <Link to="/login">Sign in</Link>
            </AlreadyAMember>
          </RegisterButtonRow>
        </RegisterBody>
      </AuthWidget>
    </AuthWidgetContainer>
  );
};

export default Register;
