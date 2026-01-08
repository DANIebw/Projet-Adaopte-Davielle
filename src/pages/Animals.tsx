import { useSearchParams } from "react-router-dom";

export default function Animals() {
  const [params] = useSearchParams();
  const type = params.get("type");
  const loc = params.get("loc");
  return (
    <main style={{ padding: 16 }}>
      <h1>Voir les animaux</h1>
      <p>
        Critères reçus :{" "}
        <strong>
          {type ?? "aucun type"} / {loc ?? "aucune localisation"}
        </strong>
      </p>
    </main>
  );
}
