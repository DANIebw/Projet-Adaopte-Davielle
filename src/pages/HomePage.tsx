import { useNavigate } from "react-router-dom";
// changer de page sans recharger

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: 16 }}>
      <div className="bg-color-#f9f9f9"></div>
      <h1>NOS ANIMAUX A ADOPTER</h1>
      <p>
        Découvrez en images tous nos animaux qui attendent une famille aimante.
        Chaque photo raconte une histoire et un espoir.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button onClick={() => navigate("/animals")} type="button">
          Voir tous les animaux
        </button>
      </div>
    </main>
  );
}
