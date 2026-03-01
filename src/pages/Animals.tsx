import { useSearchParams } from "react-router-dom";
import AnimalList from "../Components/AnimalList";

export default function Animals() {
  const [params] = useSearchParams();

  const type = params.get("type");

  const loc = params.get("loc");

  console.log("animals.tsx", type, loc);

  return (
    <main className="max-w-7xl mx-auto p-6 mb-20">
      0<h1 className="text-2xl font-bold mb-2">Voir les animaux</h1>
      <p className="text-gray-600 mb-6">
        Critères reçus :{" "}
        <strong className="text-gray-900">
          {/* 
            ?? = opérateur "valeur par défaut"
            - si type est null → affiche "aucun type"
            - si loc est null → affiche "aucune localisation"
          */}
          {type ?? "aucun type"} / {loc ?? "aucune localisation"}
        </strong>
      </p>
      <AnimalList />
    </main>
  );
}
