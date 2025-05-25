// src/components/RequireAdmin.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}

const RequireAdmin: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth(); // pastikan loading & user ada

  if (loading) return <p>Loading...</p>;
  if (!user || user.role !== "admin") return <Navigate to="/login" />;

  return <>{children}</>; // atau return children;
};

export default RequireAdmin;
