/*
import { useBooking } from '../../store/useBooking';
import { motion } from 'framer-motion';

const extrasList = [
  { id: 'gps', name: 'GPS', price: 5, description: 'Ne vous perdez plus' },
  { id: 'childSeat', name: 'Siège enfant', price: 10, description: 'Pour la sécurité des plus petits' },
  { id: 'wifi', name: 'WiFi 4G', price: 8, description: 'Restez connecté partout' },
  { id: 'additionalDriver', name: 'Conducteur additionnel', price: 15, description: 'Partagez le volant' },
];

export const Extras = () => {
  const { extras, toggleExtra } = useBooking();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-medium mb-2">Options et extras</h2>
        <p className="text-drivly-muted">
          Personnalisez votre location avec nos options.
        </p>
      </div>

      <div className="space-y-4">
        {extrasList.map((extraItem) => {
          const isSelected = extras.find(e => e.id === extraItem.id)?.selected;
          return (
            <div
              key={extraItem.id}
              onClick={() => toggleExtra(extraItem.id)}
              className={`card flex items-center justify-between cursor-pointer transition-all ${
                isSelected ? 'ring-2 ring-drivly-accent' : ''
              }`}
            >
              <div>
                <h3 className="font-medium">{extraItem.name}</h3>
                <p className="text-sm text-drivly-muted">{extraItem.description}</p>
              </div>
              <div className="text-right">
                <div className="font-medium">{extraItem.price}€ / jour</div>
                <div className="flex items-center justify-end mt-2">
                  <span className="text-sm mr-2">{isSelected ? 'Ajouté' : 'Ajouter'}</span>
                  <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-all ${isSelected ? 'bg-drivly-accent justify-end' : 'bg-drivly-line justify-start'}`}>
                    <div className="w-4 h-4 bg-white rounded-full"/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
*/ 