import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vehicle } from '../../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`card overflow-hidden ${
        vehicle.theme === 'orion' ? 'border border-orion-accent/20' : ''
      }`}
    >
      <div className="aspect-w-16 aspect-h-9 rounded-16 overflow-hidden mb-4">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-sm text-drivly-muted">{vehicle.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-drivly-muted">Transmission</div>
            <div className="font-medium">{vehicle.features.transmission}</div>
          </div>
          <div>
            <div className="text-drivly-muted">Carburant</div>
            <div className="font-medium">{vehicle.features.fuel}</div>
          </div>
          <div>
            <div className="text-drivly-muted">Places</div>
            <div className="font-medium">{vehicle.features.seats}</div>
          </div>
          <div>
            <div className="text-drivly-muted">Bagages</div>
            <div className="font-medium">{vehicle.features.bags}</div>
          </div>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-drivly-line">
          <div>
            <div className="text-sm text-drivly-muted">À partir de</div>
            <div className="text-2xl font-medium">
              {vehicle.dailyPrice}€
              <span className="text-sm text-drivly-muted">/jour</span>
            </div>
          </div>
          <Link
            to={`/vehicule/${vehicle.slug}`}
            className={`btn ${
              vehicle.theme === 'orion'
                ? 'bg-orion-accent text-white hover:opacity-90'
                : 'btn-solid'
            }`}
          >
            Réserver
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {vehicle.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-drivly-surface text-drivly-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 