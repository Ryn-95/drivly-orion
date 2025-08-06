import { useState } from 'react';
import { FleetFilters } from '../components/blocks/FleetFilters';
import { FleetGrid } from '../components/blocks/FleetGrid';

export const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero section */}
      <div className="w-full bg-[#F4F4F4]">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <h1 className="text-[28px] font-light text-[#111111] mb-2">
            Notre flotte
          </h1>
          <p className="text-[14px] text-[#666666] max-w-xl leading-relaxed">
            Des citadines aux sportives, découvrez notre sélection de véhicules premium 
            disponibles à la location longue durée.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-[1600px] mx-auto px-8">
        <FleetFilters onCategoryChange={setSelectedCategory} />
        <FleetGrid selectedCategory={selectedCategory} />
      </div>

      {/* Section d'aide */}
      <div className="w-full bg-[#F4F4F4]">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[18px] font-medium text-[#111111] mb-1">
                Besoin d'aide pour choisir ?
              </h2>
              <p className="text-[14px] text-[#666666]">
                Nos experts sont là pour vous guider dans votre choix
              </p>
            </div>
            <button className="px-6 py-2.5 bg-white border border-[#e5e5e5] rounded-[9999px] text-[13px] font-medium text-[#111111] hover:bg-[#F4F4F4] transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 