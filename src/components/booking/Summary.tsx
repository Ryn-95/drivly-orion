import { useBooking } from '../../store/useBooking';
import { motion } from 'framer-motion';
import { differenceInDays } from 'date-fns';

export const Summary = () => {
  const {
    selectedVehicle,
    dateRange,
    pickupLocation,
    returnLocation,
    times,
    extras,
    insurance,
  } = useBooking();

  if (!selectedVehicle || !dateRange.startDate || !dateRange.endDate) {
    return null;
  }

  const numberOfDays = differenceInDays(dateRange.endDate, dateRange.startDate) + 1;
  const vehicleTotal = selectedVehicle.dailyPrice * numberOfDays;
  const extrasTotal = extras
    .filter((extra) => extra.selected)
    .reduce((acc, extra) => acc + extra.price * numberOfDays, 0);
  const insuranceTotal = insurance ? insurance.price * numberOfDays : 0;
  const total = vehicleTotal + extrasTotal + insuranceTotal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-medium mb-2">Récapitulatif</h2>
        <p className="text-drivly-muted">
          Vérifiez les détails de votre réservation.
        </p>
      </div>

      <div className="card space-y-6">
        {/* Véhicule */}
        <div>
          <h3 className="text-lg font-medium mb-4">Véhicule</h3>
          <div className="flex items-start space-x-4">
            <div className="aspect-w-16 aspect-h-9 w-32 rounded-16 overflow-hidden">
              <img
                src={selectedVehicle.images[0]}
                alt={`${selectedVehicle.brand} ${selectedVehicle.model}`}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="font-medium">
                {selectedVehicle.brand} {selectedVehicle.model}
              </div>
              <div className="text-sm text-drivly-muted">
                {selectedVehicle.features.transmission} •{' '}
                {selectedVehicle.features.fuel}
              </div>
            </div>
          </div>
        </div>

        {/* Dates et lieux */}
        <div>
          <h3 className="text-lg font-medium mb-4">Dates et lieux</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-drivly-muted">Prise en charge</div>
              <div>
                {dateRange.startDate.toLocaleDateString()} à {times.pickupTime}
              </div>
              <div className="text-sm">{pickupLocation?.name}</div>
            </div>
            <div>
              <div className="text-sm text-drivly-muted">Retour</div>
              <div>
                {dateRange.endDate.toLocaleDateString()} à {times.returnTime}
              </div>
              <div className="text-sm">
                {returnLocation?.name || pickupLocation?.name}
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        {extras.some((extra) => extra.selected) && (
          <div>
            <h3 className="text-lg font-medium mb-4">Options</h3>
            <ul className="space-y-2">
              {extras
                .filter((extra) => extra.selected)
                .map((extra) => (
                  <li key={extra.id} className="flex justify-between">
                    <span>{extra.name}</span>
                    <span>
                      {extra.price}€ × {numberOfDays}j ={' '}
                      {extra.price * numberOfDays}€
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Assurance */}
        {insurance && (
          <div>
            <h3 className="text-lg font-medium mb-4">Protection</h3>
            <div className="flex justify-between">
              <span>Protection {insurance.type}</span>
              <span>
                {insurance.price}€ × {numberOfDays}j = {insuranceTotal}€
              </span>
            </div>
          </div>
        )}

        {/* Total */}
        <div className="border-t border-drivly-line pt-6">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-sm text-drivly-muted">Total</div>
              <div className="text-2xl font-medium">{total}€</div>
            </div>
            <div className="text-sm text-drivly-muted">
              {numberOfDays} jour{numberOfDays > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Informations importantes */}
      <div className="bg-drivly-surface rounded-24 p-6">
        <h3 className="text-lg font-medium mb-4">Informations importantes</h3>
        <ul className="space-y-2 text-sm text-drivly-muted">
          <li>• Caution : {selectedVehicle.deposit}€</li>
          <li>• Kilométrage inclus : 150km/jour</li>
          <li>• Carburant : plein à plein</li>
          <li>• Documents requis : permis, pièce d'identité, justificatif de domicile</li>
        </ul>
      </div>
    </motion.div>
  );
}; 