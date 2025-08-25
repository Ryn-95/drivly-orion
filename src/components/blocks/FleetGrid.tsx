import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Vehicle, vehicles } from '../../data/vehicles';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/vehicule/${vehicle.slug}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image comme Turismo */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Badges comme Turismo */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {vehicle.badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-black text-white rounded-md"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Navigation dots comme Turismo */}
          {vehicle.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {vehicle.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informations comme Turismo */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">
            {vehicle.brand} - {vehicle.model}
          </h3>
          
          <div className="text-sm text-gray-600 space-y-1">
            <div>Puissance: {vehicle.power}</div>
            <div>CO2: {vehicle.co2}</div>
          </div>
          
          <div className="text-lg font-bold text-gray-900">
            àpd {vehicle.price}€ (htva)/mois
          </div>
        </div>
      </div>
    </Link>
  );
};

interface FleetGridProps {
  selectedCategory?: string;
}

export const FleetGrid = ({ selectedCategory = 'All' }: FleetGridProps) => {
  const [sortBy, setSortBy] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // Filtrage des véhicules - logique simplifiée
  const filteredVehicles = vehicles;

  return (
    <div>
      <AnimatePresence>
        {filteredVehicles.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05
                }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun véhicule trouvé</h3>
            <p className="text-gray-500">Modifiez vos critères de recherche</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 