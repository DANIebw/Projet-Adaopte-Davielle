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
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 35 }}>
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
            <div
              style={{ fontSize: 18, display: "flex", alignItems: "center" }}
            >
              <FiHome size={22} />
              <strong>Accueil</strong>
            </div>
          </NavLink>
          <NavLink
            to="/animals"
            aria-label="Page J'adopte"
            // style={{ textDecoration: "none" }}
          >
            <div
              style={{ fontSize: 20, display: "flex", alignItems: "center" }}
            >
              <FaBone size={22} />
              <strong>j'adopte</strong>
            </div>
          </NavLink>
          <NavLink to="/Guide">
            <div
              style={{ fontSize: 20, display: "flex", alignItems: "center" }}
            >
              <LuFish size={22} />
              <strong>Guide l'adoption</strong>
            </div>
          </NavLink>
          <NavLink to="/benevole">
            <div
              style={{ fontSize: 20, display: "flex", alignItems: "center" }}
            >
              <LuRabbit size={22} />
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
              padding: "20px 35px",
              borderRadius: 999,
              border: "none",
              background: "#f15b4a",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 18,
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
