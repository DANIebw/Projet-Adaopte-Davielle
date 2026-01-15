// bar de recherche
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FiltersBar() {
  const navigate = useNavigate();

  // state pour le type d'animal (select)
  const [type, setType] = useState("");

  // state pour la localisation (input)
  const [loc, setLoc] = useState("");

  const handleSearch = () => {
    // on construit l'URL avec seulement les paramètres remplis
    const params = new URLSearchParams();

    if (type.trim()) params.set("type", type.trim());
    if (loc.trim()) params.set("loc", loc.trim());

    const queryString = params.toString();
    navigate(queryString ? `/animals?${queryString}` : "/animals");
  };

  return (
    <div className="mx-auto w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
      {/* 3 colonnes : Type / Localisation / Bouton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Colonne 1 : Type */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            <strong>Type d’animal</strong>
          </label>

          <select className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 outline-none focus:border-neutral-400">
            <option value="">Tous</option>
            <option value="chien">Chien</option>
            <option value="chat">Chat</option>
            <option value="lapin">Lapin</option>
            <option value="rongeur">Rongeur</option>
          </select>
        </div>

        {/* Colonne 2 : Localisation */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            <strong>Localisation</strong>
          </label>

          <input
            type="text"
            placeholder="Votre ville"
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 outline-none focus:border-neutral-400"
          />
        </div>

        {/* Colonne 3 : Bouton */}
        <div className="md:flex md:justify-end">
          <button
            type="button"
            onClick={handleSearch}
            className="
            w-full md:w-auto
            rounded-full
            bg-black
            px-10 py-3
            text-white font-bold
            flex items-center justify-center gap-2
          "
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
}
