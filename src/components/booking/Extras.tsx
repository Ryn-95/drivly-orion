import { useBooking } from '../../store/useBooking';
import { motion } from 'framer-motion';
import { Extra } from '../../types/booking';

const extras: Extra[] = [
  {
    id: 'gps',
    name: 'GPS',
    description: 'Navigation GPS intégrée',
    price: 5,
    selected: false,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 'childSeat',
    name: 'Siège enfant',
    description: 'Siège auto homologué',
    price: 10,
    selected: false,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 'wifi',
    name: 'WiFi 4G',
    description: 'Connexion internet illimitée',
    price: 8,
    selected: false,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
];

export const Extras = () => {
  const { extras: selectedExtras, toggleExtra } = useBooking();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium mb-2">Options supplémentaires</h2>
        <p className="text-drivly-muted">
          Personnalisez votre location avec nos options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {extras.map((extra) => {
          const isSelected = selectedExtras.find(
            (e) => e.id === extra.id
          )?.selected;

          return (
            <motion.button
              key={extra.id}
              onClick={() => toggleExtra(extra.id)}
              className={`card text-left transition-colors ${
                isSelected
                  ? 'border-2 border-drivly-accent'
                  : 'hover:border hover:border-drivly-line'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-16 ${
                    isSelected
                      ? 'bg-drivly-accent text-white'
                      : 'bg-drivly-surface text-drivly-muted'
                  }`}
                >
                  {extra.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{extra.name}</h3>
                    <div className="text-lg font-medium">
                      {extra.price}€
                      <span className="text-sm text-drivly-muted">/jour</span>
                    </div>
                  </div>
                  <p className="text-sm text-drivly-muted mt-1">
                    {extra.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}; 