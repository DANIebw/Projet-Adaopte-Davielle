// carte visuelle
import type { Animal } from "../../../types/Animal";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{animal.name}</h3>

        <p className="text-gray-600">
          {animal.breed} • {animal.age}
        </p>

        <p className="text-gray-500">
          {animal.city} ({animal.zipcode})
        </p>

        <p className="mt-2 text-sm">{animal.description}</p>
      </div>
    </div>
  );
}
