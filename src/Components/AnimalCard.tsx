import type { Animal } from "../types/Animal";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="bg-[#f9f9f9] shadow rounded overflow-hidden flex flex-col h-full transition hover:shadow-lg hover:-translate-y-1">
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

        <p className="mt-2 text-sm text-gray-600 flex-grow">
          {animal.description}
        </p>
        <button
          onClick={() => (animal.name, animal.type)}
          className="mt-4 w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Rencontrer
        </button>
      </div>
    </div>
  );
}
