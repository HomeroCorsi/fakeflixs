import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const ProtectedRoutes = ({ children, url }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  }

  return <Navigate to={url} />;
};

export default ProtectedRoutes;
