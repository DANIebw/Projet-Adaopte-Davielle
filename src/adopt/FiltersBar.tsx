import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FiltersBar() {
  const navigate = useNavigate();

  // ✅ states contrôlés par le select + input
  const [type, setType] = useState("");
  const [loc, setLoc] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();

    // ✅ on met en minuscule pour matcher ton filtre (chien/chat/lapin/rongeur)
    if (type.trim()) params.set("type", type.trim().toLowerCase());
    if (loc.trim()) params.set("loc", loc.trim());

    const queryString = params.toString();
    navigate(queryString ? `/animals?${queryString}` : "/animals");
  }

  return (
    <div className="mx-auto w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            <strong>Type d’animal</strong>
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 outline-none focus:border-neutral-400"
          >
            <option value="">Tous</option>
            <option value="Chien">Chien</option>
            <option value="Chat">Chat</option>
            <option value="Lapin">Lapin</option>
            <option value="Rongeur">Rongeur</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            <strong>Localisation</strong>
          </label>

          <input
            type="text"
            placeholder="Votre ville"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 outline-none focus:border-neutral-400"
          />
        </div>

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
            Rechercher 🔎
          </button>
        </div>
      </div>
    </div>
  );
}
