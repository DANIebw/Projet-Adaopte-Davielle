// Logique
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import AnimalCard from "./AnimalCard";
import type { Animal } from "../types/Animal";
import animalsData from "../data/animals.json";

export default function AnimalList() {
  const [searchParams] = useSearchParams();

  const animals = animalsData as Animal[];

  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(animals);

  useEffect(() => {
    const type = searchParams.get("type");
    const loc = searchParams.get("loc");

    const normalizedType = (type ?? "").trim().toLowerCase();
    const normalizedLoc = (loc ?? "").trim().toLowerCase();

    // DEBUG
    console.log("Filtres URL :", { normalizedType, normalizedLoc });

    // 🔹 Filtrage
    const result = animals.filter((animal) => {
      const aType = animal.type.toLowerCase();
      const aCity = animal.city.toLowerCase();
      const aZip = animal.zipcode.toLowerCase();

      const matchType = !normalizedType || aType === normalizedType;
      const matchLoc =
        !normalizedLoc ||
        aCity.includes(normalizedLoc) ||
        aZip.includes(normalizedLoc);

      return matchType && matchLoc;
    });

    setFilteredAnimals(result);
  }, [searchParams, animals]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredAnimals.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">
          Aucun animal ne correspond à votre recherche 🐾
        </p>
      ) : (
        filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))
      )}
    </div>
  );
}
