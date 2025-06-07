import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p><Link to="/profile">Ir a Perfil</Link></p>
    </div>
  );
}