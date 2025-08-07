import { useBooking } from '../../store/useBooking';
import { motion } from 'framer-motion';

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

const Insurance = () => {
  return null;
};
export default Insurance; 