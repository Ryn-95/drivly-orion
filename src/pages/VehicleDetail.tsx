/*
import { useParams } from 'react-router-dom';
import { vehicles } from '../../data/vehicles';
import { motion } from 'framer-motion';

export const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        Véhicule non trouvé
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne gauche - Images */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Colonne droite - Informations et réservation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold font-title text-gray-800">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {vehicle.description}
              </p>

              <div className="mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Réserver ce véhicule
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-800">
                      {vehicle.dailyPrice}€
                    </span>
                    <span className="text-gray-500">/ jour</span>
                  </div>
                  <button
                    className={`mt-6 w-full py-3 px-6 rounded-lg text-lg font-semibold transition-colors ${
                      vehicle.theme === 'drivly'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gold text-black hover:bg-yellow-400'
                    }`}
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Caractéristiques */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-title text-gray-800 mb-8">
            Caractéristiques
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <div className="text-gray-600">Transmission</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.transmission}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">💺</div>
              <div className="text-gray-600">Places</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.seats}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🚪</div>
              <div className="text-gray-600">Portes</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.doors}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">⛽</div>
              <div className="text-gray-600">Carburant</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.fuel}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">💨</div>
              <div className="text-gray-600">0-100 km/h</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.acceleration}s
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🐎</div>
              <div className="text-gray-600">Puissance</div>
              <div className="text-xl font-bold text-gray-800">
                {vehicle.features.power} cv
              </div>
            </div>
          </div>
        </div>

        {/* Conditions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-title text-gray-800 mb-8">
            Conditions de location
          </h2>
          <div className="prose max-w-none">
            <p>
              Pour louer ce véhicule, vous devez être âgé d'au moins 25 ans et
              détenir un permis de conduire valide depuis plus de 3 ans.
            </p>
            <p>
              Une caution de {vehicle.deposit}€ sera demandée au moment de la
              prise en charge du véhicule.
            </p>
            <ul>
              <li>Assurance tous risques incluse.</li>
              <li>250 km inclus par jour de location.</li>
              <li>Assistance 24/7.</li>
            </ul>
          </div>
        </div>

        {/* Modèles similaires */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-title text-gray-800 mb-8">
            Modèles similaires
          </h2>
          {/* Logique pour afficher des véhicules similaires ici */}
          <p>
            D'autres véhicules de la même catégorie pourraient vous intéresser.
          </p>
        </div>
      </div>
      
      {/* Booking bar */}
      <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-200">
          <div className="container mx-auto flex items-center justify-between">
              <div>
                  <div className="text-lg font-bold">{vehicle.brand} {vehicle.model}</div>
                  <div className="text-2xl font-bold">{vehicle.dailyPrice}€/jour</div>
              </div>
              <button className="btn btn-solid">Réserver</button>
          </div>
      </div>

    </div>
  );
};
*/ 