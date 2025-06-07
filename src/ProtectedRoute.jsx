import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = ({ children }) => {
const { user, loading } = useAuth();

if (loading) {
return <div className="text-center mt-10">Cargando...</div>; // o un spinner
}

if (!user) {
return <Navigate to="/login" replace />;
}

return children;
};

export default ProtectedRoute;