// carte visuelle
import type { Animal } from "../../../types/Animal";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden flex flex-col h-full transition hover:shadow-lg hover:-translate-y-1">
      {/*
        CONTENEUR PRINCIPAL DE LA CARTE
        - bg-white : fond blanc (effet carte)
        - shadow : ombre légère pour détacher la carte du fond
        - rounded : coins arrondis
        - overflow-hidden : coupe ce qui dépasse (utile pour l’image)
      */}

      {/*
        IMAGE DE L’ANIMAL
        - src={animal.imageUrl} : URL de l’image
        - alt={animal.name} : texte alternatif (accessibilité)
        - w-full : largeur complète de la carte
        - h-48 : hauteur fixe pour toutes les cartes
        - object-cover : l’image remplit la zone sans être déformée
      */}
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />

      {/*
        CONTENU TEXTE DE LA CARTE
        - p-4 : padding intérieur
      */}
      <div className="p-4">
        {/*
          NOM DE L’ANIMAL
          - text-xl : taille du texte
          - font-semibold : texte semi-gras
        */}
        <h3 className="text-xl font-semibold">{animal.name}</h3>

        {/*
          RACE ET ÂGE
          - text-gray-600 : gris moyen pour hiérarchie visuelle
          - "•" : séparateur visuel
        */}
        <p className="text-gray-600">
          {animal.breed} • {animal.age}
        </p>

        {/*
          LOCALISATION
          - text-gray-500 : plus discret que la ligne précédente
        */}
        <p className="text-gray-500">
          {animal.city} ({animal.zipcode})
        </p>

        {/*
          DESCRIPTION
          - mt-2 : marge au-dessus
          - text-sm : texte plus petit
          - donne un aperçu de l’animal
        */}
        <p className="mt-2 text-sm text-gray-600 flex-grow">
          {animal.description}
        </p>
        <button className="mt-4 w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
          Rencontrer
        </button>
      </div>
    </div>
  );
}
