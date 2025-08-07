import { useBooking } from '../../store/useBooking';
import { motion } from 'framer-motion';
import { BookingStore, Insurance } from '../../types/booking';

const insuranceOptions = [
  {
    type: 'basic',
    name: 'Basic',
    description: 'Protection de base avec franchise',
    price: 15,
    features: [
      'Responsabilité civile',
      'Dommages collision avec franchise de 1000€',
      'Vol avec franchise de 1000€',
    ],
  },
  {
    type: 'plus',
    name: 'Plus',
    description: 'Protection étendue avec franchise réduite',
    price: 25,
    features: [
      'Responsabilité civile',
      'Dommages collision avec franchise de 500€',
      'Vol avec franchise de 500€',
      'Bris de glace sans franchise',
    ],
  },
  {
    type: 'premium',
    name: 'Premium',
    description: 'Protection complète sans franchise',
    price: 35,
    features: [
      'Responsabilité civile',
      'Dommages collision sans franchise',
      'Vol sans franchise',
      'Bris de glace sans franchise',
      'Assistance 24/7 premium',
    ],
  },
] as const;

export const Insurance = () => {
  const { insurance, setInsurance } = useBooking();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium mb-2">Protection du véhicule</h2>
        <p className="text-drivly-muted">
          Choisissez votre niveau de protection pour rouler en toute sérénité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insuranceOptions.map((option) => {
          const isSelected = insurance?.type === option.type;

          return (
            <motion.button
              key={option.type}
              onClick={() => setInsurance({ type: option.type, price: option.price })}
              className={`card text-left transition-colors ${
                isSelected
                  ? 'border-2 border-drivly-accent'
                  : 'hover:border hover:border-drivly-line'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{option.name}</h3>
                    <div className="text-lg font-medium">
                      {option.price}€
                      <span className="text-sm text-drivly-muted">/jour</span>
                    </div>
                  </div>
                  <p className="text-sm text-drivly-muted mt-1">
                    {option.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-drivly-muted"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-drivly-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="bg-drivly-surface rounded-24 p-6">
        <h3 className="text-lg font-medium mb-4">À savoir</h3>
        <ul className="space-y-2 text-sm text-drivly-muted">
          <li>• Le montant de la franchise est bloqué sur votre carte bancaire</li>
          <li>• En cas de dommage, seule la franchise est à votre charge</li>
          <li>• L'assurance est obligatoire pour toute location</li>
        </ul>
      </div>
    </div>
  );
}; 