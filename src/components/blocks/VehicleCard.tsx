/*
import { Vehicle } from '../../data/vehicles';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const cardClasses = `
    relative 
    group 
    overflow-hidden 
    rounded-lg 
    shadow-lg 
    transition-all 
    duration-300 
    hover:shadow-2xl 
    hover:scale-105
    ${vehicle.theme === 'drivly' ? 'bg-surface' : 'bg-surface'}
  `;

  return (
    <Link to={`/vehicule/${vehicle.slug}`} className={cardClasses}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      
      <img
        src={vehicle.images[0]}
        alt={`${vehicle.brand} ${vehicle.model}`}
        className="w-full h-48 object-cover"
      />

      <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
        <h3 className="text-lg font-title text-white font-semibold">
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className="text-sm text-muted mt-1">
          {vehicle.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white">
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">⚙️</span>
            <span>{vehicle.features.transmission}</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">💺</span>
            <span>{vehicle.features.seats} places</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">🚪</span>
            <span>{vehicle.features.doors} portes</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">⛽</span>
            <span>{vehicle.features.fuel}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            {vehicle.dailyPrice}€
            <span className="text-sm font-normal text-muted">/jour</span>
          </div>
          <button
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              ${
                vehicle.theme === 'drivly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gold text-black'
              }
            `}
          >
            Réserver
          </button>
        </div>

        <div className="absolute top-4 right-4 flex space-x-2">
          {vehicle.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
*/ 