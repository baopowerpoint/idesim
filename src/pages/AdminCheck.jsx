import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function AdminCheck({ children }) {
  const { user } = useAuthContext();
  return user && user.email === "baopowerpoint@gmail.com" ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
}

export default AdminCheck;
