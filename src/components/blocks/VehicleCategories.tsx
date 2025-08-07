import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Catégorie 1',
    vehicles: [
      {
        id: 'porsche-macan',
        name: 'Porsche Macan S',
        image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070'
      }
    ]
  },
  {
    id: 2,
    name: 'Catégorie 2',
    vehicles: [
      {
        id: 'range-rover',
        name: 'Range Rover Velar P400e',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070'
      }
    ]
  },
  {
    id: 3,
    name: 'Catégorie 3',
    vehicles: [
      {
        id: 'audi-rsq3',
        name: 'Audi RSQ3',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070'
      }
    ]
  },
  {
    id: 4,
    name: 'Catégorie 4',
    vehicles: []
  },
  {
    id: 5,
    name: 'Catégorie 5',
    vehicles: []
  }
];

export const VehicleCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-black mb-4">
            Les voitures des abonnements<br />Drivly Orion.
          </h2>
          <p className="text-gray-600">
            Chaque catégorie correspond à une tarification, dans chacune des catégorie vous
            retrouverez des voitures luxueuses, sportives, hybrides.
          </p>
        </div>

        {/* Navigation des catégories */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de véhicules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories
            .find((cat) => cat.id === selectedCategory)
            ?.vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-gray-50 rounded-lg p-8">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-medium text-black mt-4">
                  {vehicle.name}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}; 