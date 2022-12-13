import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
function UserCheck({ children }) {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/" replace={true} />;
}

export default UserCheck;
