import { useBooking } from '../../store/useBooking';
import { Vehicle } from '../../data/vehicles';
import { differenceInDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface SummaryProps {
  selectedVehicle: Vehicle;
}

interface Location {
  id: string;
  name: string;
}

interface Times {
  pickup: string;
  return: string;
}

interface DateRange {
  from: Date;
  to: Date;
}

export const Summary = ({ selectedVehicle }: SummaryProps) => {
  const { dateRange, times, pickupLocation, returnLocation } = useBooking();

  // Calcul du nombre de jours
  const numberOfDays = dateRange?.from && dateRange?.to
    ? differenceInDays(dateRange.to, dateRange.from) + 1
    : 0;

  // Calcul du prix total
  const dailyPrice = selectedVehicle.dailyPrice || 0;
  const totalPrice = numberOfDays * dailyPrice;

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-medium mb-6">Résumé de votre réservation</h2>

      {/* Véhicule */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Véhicule sélectionné</h3>
        <div className="flex items-center gap-4">
          <img
            src={selectedVehicle.images[0]}
            alt={selectedVehicle.model}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <p className="font-medium">{selectedVehicle.brand} {selectedVehicle.model}</p>
            {selectedVehicle.features && (
              <div className="text-sm text-gray-600 mt-1">
                <p>{selectedVehicle.features.seats} sièges • {selectedVehicle.features.transmission}</p>
                <p>{selectedVehicle.features.fuel} • {selectedVehicle.features.consumption}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Détails de la réservation */}
      <div className="space-y-4">
        {/* Prise en charge */}
        <div>
          <h3 className="font-medium mb-1">Prise en charge</h3>
          {dateRange?.from && times?.pickup && (
            <p className="text-gray-600">
              {format(dateRange.from, 'EEEE d MMMM yyyy', { locale: fr })} à {times.pickup}
            </p>
          )}
          {pickupLocation && (
            <p className="text-gray-600">{pickupLocation.name}</p>
          )}
        </div>

        {/* Retour */}
        <div>
          <h3 className="font-medium mb-1">Retour</h3>
          {dateRange?.to && times?.return && (
            <p className="text-gray-600">
              {format(dateRange.to, 'EEEE d MMMM yyyy', { locale: fr })} à {times.return}
            </p>
          )}
          {returnLocation && pickupLocation && (
            <p className="text-gray-600">
              {returnLocation.name === pickupLocation.name ? 'Même agence' : returnLocation.name}
            </p>
          )}
        </div>

        {/* Prix */}
        <div className="pt-4 border-t">
          <div className="flex justify-between mb-2">
            <span>Prix par jour</span>
            <span>{dailyPrice}€</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Nombre de jours</span>
            <span>{numberOfDays}</span>
          </div>
          <div className="flex justify-between font-medium text-lg pt-2 border-t">
            <span>Total</span>
            <span>{totalPrice}€</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 