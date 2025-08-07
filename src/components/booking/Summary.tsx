/*
import { useBooking } from '../../store/useBooking';
import { format, differenceInDays } from 'date-fns';

export const Summary = () => {
  const {
    pickupLocation,
    returnLocation,
    dateRange,
    times,
    selectedVehicle,
    selectedInsurance,
    selectedExtras,
  } = useBooking();

  if (!selectedVehicle) return null;

  const rentalDays =
    dateRange.startDate && dateRange.endDate
      ? differenceInDays(dateRange.endDate, dateRange.startDate) || 1
      : 1;
  
  const extrasTotal = selectedExtras
    .filter((extra) => extra.selected)
    .reduce((acc, extra) => {
      if (extra.type === 'per_day') {
        return acc + extra.price * rentalDays;
      }
      return acc + extra.price;
    }, 0);

  const vehicleTotal = selectedVehicle.dailyPrice * rentalDays;
  const insuranceTotal = selectedInsurance?.price || 0;
  const total = vehicleTotal + insuranceTotal + extrasTotal;

  return (
    <div className="card">
      <h2 className="text-xl font-medium mb-4">Récapitulatif de votre réservation</h2>

      <div className="space-y-4">
        {/* Véhicule */}
        <div className="flex items-center space-x-4">
          <img
            src={selectedVehicle.images[0]}
            alt={selectedVehicle.name}
            className="w-24 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">{selectedVehicle.name}</h3>
            <p className="text-sm text-drivly-muted">{selectedVehicle.category}</p>
          </div>
        </div>

        {/* Détails */}
        <div className="border-t border-drivly-line pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-drivly-muted">Prise en charge</span>
            <span>
              {pickupLocation?.name},{' '}
              {dateRange.startDate && format(dateRange.startDate, 'dd/MM/yyyy')} à {times.pickupTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-drivly-muted">Retour</span>
            <span>
              {returnLocation?.name || pickupLocation?.name},{' '}
              {dateRange.endDate && format(dateRange.endDate, 'dd/MM/yyyy')} à {times.returnTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-drivly-muted">Durée</span>
            <span>{rentalDays} jours</span>
          </div>
        </div>

        {/* Coûts */}
        <div className="border-t border-drivly-line pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-drivly-muted">Location du véhicule ({rentalDays} jours)</span>
            <span>{vehicleTotal.toFixed(2)}€</span>
          </div>
          {selectedInsurance && (
            <div className="flex justify-between">
              <span className="text-drivly-muted">Assurance {selectedInsurance.name}</span>
              <span>{insuranceTotal.toFixed(2)}€</span>
            </div>
          )}
          {selectedExtras.filter(extra => extra.selected).map(extra => (
            <div key={extra.id} className="flex justify-between">
              <span className="text-drivly-muted">{extra.name}</span>
              <span>
                {extra.type === 'per_day'
                  ? `${(extra.price * rentalDays).toFixed(2)}€`
                  : `${extra.price.toFixed(2)}€`}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-drivly-line pt-4">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{total.toFixed(2)}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};
*/ 