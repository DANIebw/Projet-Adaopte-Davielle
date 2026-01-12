// import React from "react";
import { NavLink } from "react-router-dom";
// NavLink sert à naviguer entre les pages sans recharger le site. C’est l’équivalent React de <a href="">, mais en mieux.
import { FiHome } from "react-icons/fi";
import { FaBone } from "react-icons/fa";
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
      <nav
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 25 }}>
          <strong>🐾Ada</strong>
          <strong style={{ color: "#ff6d38" }}>opte</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            alignItems: "center",
          }}
        >
          <NavLink to="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiHome size={18} />
              <strong>Accueil</strong>
            </div>
          </NavLink>
          <NavLink
            to="/animals"
            aria-label="Page J'adopte"
            // style={{ textDecoration: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBone />
              <strong>j'adopte</strong>
            </div>
          </NavLink>
          <NavLink to="/Guide">
            <div style={{ display: "flex", alignItems: "center" }}>
              <LuFish size={18} />
              <strong>Guide l'adoption</strong>
            </div>
          </NavLink>
          <NavLink to="/benevole">
            <div style={{ display: "flex", alignItems: "center" }}>
              <LuRabbit size={18} />
              <strong>Devenir bénévole</strong>
            </div>
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <button
            type="button"
            aria-label="Faire un don"
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              border: "none",
              background: "#f15b4a",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
            onClick={() => console.log("Don cliqué")}
          >
            Faire un don🫶
          </button>
        </div>
      </nav>
    </header>
  );
}
