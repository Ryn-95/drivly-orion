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
      className="block group bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-4 bg-[#F4F4F4]">
        <motion.img
          src={vehicle.images[currentImageIndex]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
        
        {/* Badges et disponibilité */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {vehicle.availability && (
            <span className="px-2.5 py-1 text-[11px] leading-none font-medium bg-black/90 text-white rounded-full">
              {vehicle.availability}
            </span>
          )}
          <div className="flex flex-wrap gap-1.5">
            {vehicle.badges.map((badge, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-[11px] leading-none font-medium bg-white/95 text-[#111111] rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Points de navigation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[6px]">
          {vehicle.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(index);
              }}
              className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-black/90' 
                  : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Informations véhicule */}
      <div className="px-0.5">
        <h3 className="text-[16px] font-medium mb-2 text-[#111111]">
          {vehicle.brand} - {vehicle.model}
        </h3>
        <div className="text-[14px] text-[#666666] space-y-1">
          <div>Puissance: {vehicle.power}</div>
          <div>CO2: {vehicle.co2}</div>
        </div>
        <div className="mt-3 flex items-baseline">
          <span className="text-[14px] text-[#666666]">àpd</span>
          <span className="text-[15px] font-medium mx-1 text-[#111111]">{vehicle.price}€</span>
          <span className="text-[14px] text-[#666666]">(htva)/{vehicle.pricePeriod}</span>
        </div>
      </div>
    </Link>
  );
};

interface FleetGridProps {
  selectedCategory?: string;
}

export const FleetGrid = ({ selectedCategory = 'All' }: FleetGridProps) => {
  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        <AnimatePresence>
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white"
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}; 
 
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
      className="block group bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-4 bg-[#F4F4F4]">
        <motion.img
          src={vehicle.images[currentImageIndex]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
        
        {/* Badges et disponibilité */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {vehicle.availability && (
            <span className="px-2.5 py-1 text-[11px] leading-none font-medium bg-black/90 text-white rounded-full">
              {vehicle.availability}
            </span>
          )}
          <div className="flex flex-wrap gap-1.5">
            {vehicle.badges.map((badge, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-[11px] leading-none font-medium bg-white/95 text-[#111111] rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Points de navigation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[6px]">
          {vehicle.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(index);
              }}
              className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-black/90' 
                  : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Informations véhicule */}
      <div className="px-0.5">
        <h3 className="text-[16px] font-medium mb-2 text-[#111111]">
          {vehicle.brand} - {vehicle.model}
        </h3>
        <div className="text-[14px] text-[#666666] space-y-1">
          <div>Puissance: {vehicle.power}</div>
          <div>CO2: {vehicle.co2}</div>
        </div>
        <div className="mt-3 flex items-baseline">
          <span className="text-[14px] text-[#666666]">àpd</span>
          <span className="text-[15px] font-medium mx-1 text-[#111111]">{vehicle.price}€</span>
          <span className="text-[14px] text-[#666666]">(htva)/{vehicle.pricePeriod}</span>
        </div>
      </div>
    </Link>
  );
};

interface FleetGridProps {
  selectedCategory?: string;
}

export const FleetGrid = ({ selectedCategory = 'All' }: FleetGridProps) => {
  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        <AnimatePresence>
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white"
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}; 
 
 
 