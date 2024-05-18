import React from "react";
import { LandingLink, LandingLogo, LandingBanner } from "./style";
import logo from "./logo512.png";
import { AuthWidget, AuthWidgetContainer } from "../Login/style";

const Landing = () => {
  return (
    <AuthWidgetContainer container>
      <AuthWidget item xs={11} md={4} lg={3}>
        <LandingBanner>
          <LandingLogo src={logo} />
        </LandingBanner>
        <LandingLink to="/login">Login</LandingLink>
        <LandingLink to="/register">Register</LandingLink>
      </AuthWidget>
    </AuthWidgetContainer>
  );
};

export default Landing;
