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
    label: 'Trier par'
  },
  { 
    id: 'type',
    label: 'Type de voiture'
  },
  { 
    id: 'engine',
    label: 'Motorisation'
  },
  { 
    id: 'brand',
    label: 'Marques'
  }
];

interface FleetFiltersProps {
  onCategoryChange: (category: string) => void;
}

export const FleetFilters = ({ onCategoryChange }: FleetFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId === 'all' ? 'All' : categoryId.replace('cat-', 'Cat '));
  };

  return (
    <div className="w-full bg-white sticky top-[72px] z-30 pb-5 border-b border-[#eaeaea]">
      {/* Barre de filtres */}
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center h-[42px] gap-4 px-4 rounded-[9999px] bg-[#F4F4F4]">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                className="flex items-center gap-1.5 px-4 h-[42px] text-[13px] font-medium text-[#111111] hover:text-black transition-colors"
              >
                {filter.label}
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div className="max-w-[1600px] mx-auto mt-5">
        <div className="flex items-center gap-3 px-1">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`h-[40px] px-5 text-[13px] font-medium transition-all rounded-[9999px] ${
                selectedCategory === category.id
                  ? 'bg-[#F4F4F4] text-[#111111]'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 