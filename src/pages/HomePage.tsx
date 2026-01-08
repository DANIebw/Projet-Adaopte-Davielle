import { useNavigate } from "react-router-dom";
// changer de page sans recharger

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: 16 }}>
      <h1>Bienvenue 🐾</h1>
      <p>Découvre des animaux et programme une rencontre.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button
          onClick={() => navigate("/animals?type=chat&loc=Nantes")}
          type="button"
        >
          Rechercher
        </button>

        <button onClick={() => navigate("/animals")} type="button">
          Voir tous les animaux
        </button>
      </div>
    </main>
  );
}
