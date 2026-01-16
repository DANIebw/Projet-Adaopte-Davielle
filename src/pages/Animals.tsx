import { useSearchParams } from "react-router-dom";
import AnimalList from "../Components/Layout/Animals/AnimalList";

// Composant de la page /animals
export default function Animals() {
  // useSearchParams retourne les paramètres de l’URL
  // exemple d’URL : /animals?type=chien&loc=Nantes
  const [params] = useSearchParams();

  // On récupère la valeur du paramètre "type"
  // → si l’URL contient ?type=chien → type = "chien"
  const type = params.get("type");

  // On récupère la valeur du paramètre "loc"
  // → si l’URL contient ?loc=Nantes → loc = "Nantes"
  const loc = params.get("loc");

  return (
    // Conteneur principal de la page
    // - max-w-7xl : largeur max (évite que tout s’étale sur écran large)
    // - mx-auto : centre horizontalement
    // - p-6 : padding intérieur
    <main className="max-w-7xl mx-auto p-6">
      {/* Titre de la page */}
      <h1 className="text-2xl font-bold mb-2">Voir les animaux</h1>

      {/* Texte qui affiche les critères reçus depuis la barre de recherche */}
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

      {/* 
        Affichage de la liste des animaux
        → AnimalList s’occupe d’afficher toutes les cartes
      */}
      <AnimalList />
    </main>
  );
}
