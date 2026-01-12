// import React from "react";
import { NavLink } from "react-router-dom";
// NavLink sert à naviguer entre les pages sans recharger le site. C’est l’équivalent React de <a href="">, mais en mieux.
import { FiHome, FiBookOpen } from "react-icons/fi";
import { FcSearch } from "react-icons/fc";
import { FaPaw, FaHeart } from "react-icons/fa";
import { LuRabbit, LuFish } from "react-icons/lu";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#f6efe8",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <nav style={{ padding: "12px 16px", borderBottom: "1px solid #ddd" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <strong>Animaux</strong> {/* Juste un texte/logo pour ta navbar */}
          {/* LEFT: logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              minWidth: 160,
            }}
          >
            <FaPaw size={18} />
            <strong style={{ fontWeight: 800, fontSize: 25 }}>
              <span>Ada</span>
              <span style={{ color: "#ff6d38" }}>opte</span>
            </strong>
          </div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <FiHome size={18} />
            Accueil
          </NavLink>
          <NavLink to="/animals" style={{ textDecoration: "none" }}>
            j'adopte{" "}
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Guide l'adoption
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Devenir bénévole
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
