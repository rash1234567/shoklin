import React from "react";
import { Navigate} from "react-router-dom";
import { useUserAuth } from '../contexts/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
   return <Navigate to="/SignIn" />;
  }
  return children;
};

export default ProtectedRoute;