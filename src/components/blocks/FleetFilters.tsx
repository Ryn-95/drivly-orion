import { useState } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'cat-01', label: 'Cat 01' },
  { id: 'cat-02', label: 'Cat 02' },
  { id: 'cat-03', label: 'Cat 03' },
  { id: 'cat-04', label: 'Cat 04' },
  { id: 'cat-05', label: 'Cat 05' },
  { id: 'cat-06', label: 'Cat 06' }
];

const FILTERS = [
  { 
    id: 'sort',
    label: 'Trier par',
    options: ['Prix croissant', 'Prix décroissant', 'Puissance', 'Disponibilité']
  },
  { 
    id: 'brand',
    label: 'Marques',
    options: ['Toutes les marques', 'Porsche', 'Land Rover', 'Mercedes', 'BMW', 'Audi']
  },
  { 
    id: 'price',
    label: 'Budget mensuel',
    options: ['Tous les prix', '< 500€', '500€ - 1000€', '> 1000€']
  },
  { 
    id: 'availability',
    label: 'Disponibilité',
    options: ['Toutes', 'Immédiate', 'Sur commande']
  }
];

interface FleetFiltersProps {
  onCategoryChange: (category: string) => void;
}

export const FleetFilters = ({ onCategoryChange }: FleetFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId === 'all' ? 'All' : categoryId.replace('cat-', 'Cat '));
  };

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };

  const handleOptionSelect = (filterId: string, option: string) => {
    setSelectedOptions(prev => ({ ...prev, [filterId]: option }));
    setActiveFilter(null);
  };

  return (
    <div className="w-full space-y-6">
      {/* Filtres principaux comme Turismo */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-100 rounded-xl text-gray-700 text-sm font-medium">
            Trier par
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-xl text-gray-700 text-sm font-medium">
            Type de voiture
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-xl text-gray-700 text-sm font-medium">
            Motorisation
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-xl text-gray-700 text-sm font-medium">
            Marques
          </button>
        </div>
      </div>

      {/* Catégories comme Turismo */}
      <div className="flex items-center gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-3 text-sm font-medium rounded-full border transition-all ${
              selectedCategory === category.id
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 