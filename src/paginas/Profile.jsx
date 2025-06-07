import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
  return <div className="text-center mt-10">Cargando...</div>; // o un spinner
  }
  
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h2>Perfil Privado</h2>
      <h2>{user.email}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}