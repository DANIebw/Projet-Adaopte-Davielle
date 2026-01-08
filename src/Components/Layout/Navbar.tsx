// import React from "react";
import { NavLink } from "react-router-dom";
// NavLink sert à naviguer entre les pages sans recharger le site. C’est l’équivalent React de <a href="">, mais en mieux.

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 16px", borderBottom: "1px solid #ddd" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <strong>Animaux</strong> {/* Juste un texte/logo pour ta navbar */}
        <NavLink to="/" style={{ textDecoration: "none" }}>
          Accueil
        </NavLink>
        <NavLink to="/animals" style={{ textDecoration: "none" }}>
          Voir les animaux
        </NavLink>
      </div>
    </nav>
  );
}
