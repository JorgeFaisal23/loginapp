import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Profile from "./paginas/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const { loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}