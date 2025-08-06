import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';
import { useBooking } from '../store/useBooking';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const VehicleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = vehicles.find((v) => v.slug === slug);
  const { setSelectedVehicle } = useBooking();

  if (!vehicle) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h1 className="mb-6">Véhicule non trouvé</h1>
        <p className="text-xl text-drivly-muted mb-8">
          Le véhicule que vous recherchez n'existe pas.
        </p>
        <Link to="/flotte" className="btn btn-solid">
          Voir tous les véhicules
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    setSelectedVehicle(vehicle);
    // Rediriger vers le tunnel de réservation
  };

  return (
    <div className="py-24">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Images */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 rounded-28 overflow-hidden">
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Informations */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h1 className="mb-2">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-xl text-drivly-muted">{vehicle.description}</p>
            </div>

            {/* Prix */}
            <div className="card">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm text-drivly-muted">À partir de</div>
                  <div className="text-4xl font-medium">
                    {vehicle.dailyPrice}€
                    <span className="text-xl text-drivly-muted">/jour</span>
                  </div>
                </div>
                <button
                  onClick={handleBooking}
                  className={`btn ${
                    vehicle.theme === 'orion'
                      ? 'bg-orion-accent text-white hover:opacity-90'
                      : 'btn-solid'
                  }`}
                >
                  Réserver
                </button>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-drivly-muted">Transmission</div>
                <div className="font-medium">{vehicle.features.transmission}</div>
              </div>
              <div>
                <div className="text-sm text-drivly-muted">Carburant</div>
                <div className="font-medium">{vehicle.features.fuel}</div>
              </div>
              <div>
                <div className="text-sm text-drivly-muted">Places</div>
                <div className="font-medium">{vehicle.features.seats}</div>
              </div>
              <div>
                <div className="text-sm text-drivly-muted">Bagages</div>
                <div className="font-medium">{vehicle.features.bags}</div>
              </div>
            </div>

            {/* Performance */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-drivly-muted">Puissance</div>
                <div className="font-medium">{vehicle.features.power} ch</div>
              </div>
              <div>
                <div className="text-sm text-drivly-muted">0-100 km/h</div>
                <div className="font-medium">{vehicle.features.acceleration}s</div>
              </div>
            </div>

            {/* Conditions */}
            <div className="card space-y-4">
              <h3 className="text-xl font-medium">Conditions de location</h3>
              <ul className="space-y-2 text-drivly-muted">
                <li>• Caution : {vehicle.deposit}€</li>
                <li>• Kilométrage inclus : 150km/jour</li>
                <li>• Âge minimum : 21 ans</li>
                <li>• Permis de conduire valide depuis 2 ans minimum</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Véhicules similaires */}
        <motion.div
          variants={fadeInUp}
          className="mt-24"
          initial="initial"
          animate="animate"
        >
          <h2 className="text-center mb-12">Véhicules similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles
              .filter(
                (v) =>
                  v.category === vehicle.category && v.id !== vehicle.id
              )
              .slice(0, 3)
              .map((similarVehicle) => (
                <Link
                  key={similarVehicle.id}
                  to={`/vehicule/${similarVehicle.slug}`}
                  className="card hover:scale-[1.02] transition-transform"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-16 overflow-hidden mb-4">
                    <img
                      src={similarVehicle.images[0]}
                      alt={`${similarVehicle.brand} ${similarVehicle.model}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {similarVehicle.brand} {similarVehicle.model}
                  </h3>
                  <p className="text-drivly-muted">
                    À partir de {similarVehicle.dailyPrice}€/jour
                  </p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 