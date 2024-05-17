import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, props, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated === true ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
