import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useBooking, Location, DateRange } from '../../store/useBooking';

const locations: Location[] = [
  { id: 'paris', name: 'Paris', address: '123 Avenue des Champs-Élysées' },
  { id: 'lyon', name: 'Lyon', address: '456 Rue de la République' },
  { id: 'nice', name: 'Nice', address: '789 Promenade des Anglais' },
];

const times = Array.from({ length: 24 }, (_, i) => 
  `${String(i).padStart(2, '0')}:00`
);

export const HeroBooking = () => {
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const {
    pickupLocation,
    returnLocation,
    dateRange,
    times: selectedTimes,
    setPickupLocation,
    setReturnLocation,
    setDateRange,
    setTimes,
  } = useBooking();

  const handleSearch = () => {
    if (pickupLocation && dateRange.startDate && dateRange.endDate) {
      navigate('/flotte');
    }
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] bg-gradient-to-r from-drivly-bg to-drivly-surface">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-drivly-bg/90" />
      </div>

      <div className="relative container mx-auto h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-balance mb-6">
            Votre voiture, selon vos envies.
          </h1>
          <p className="text-xl text-drivly-muted mb-12">
            De la citadine à la voiture de sport, trouvez le véhicule parfait pour chaque occasion.
          </p>
        </div>

        <div className="bg-drivly-surface border border-drivly-line rounded-28 p-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lieu de prise en charge */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Lieu de prise en charge
              </label>
              <select
                className="w-full bg-drivly-bg border-drivly-line rounded-16 py-2 px-3"
                value={pickupLocation?.id || ''}
                onChange={(e) => {
                  const location = locations.find((loc) => loc.id === e.target.value);
                  setPickupLocation(location || null);
                }}
              >
                <option value="">Sélectionner</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Lieu de retour */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Lieu de retour
              </label>
              <select
                className="w-full bg-drivly-bg border-drivly-line rounded-16 py-2 px-3"
                value={returnLocation?.id || ''}
                onChange={(e) => {
                  const location = locations.find((loc) => loc.id === e.target.value);
                  setReturnLocation(location || null);
                }}
              >
                <option value="">Même lieu</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">
                Dates
              </label>
              <button
                className="w-full bg-drivly-bg border border-drivly-line rounded-16 py-2 px-3 text-left"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                {dateRange.startDate && dateRange.endDate
                  ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
                  : 'Sélectionner les dates'}
              </button>
              
              {showDatePicker && (
                <div className="absolute top-full left-0 z-50 mt-2 bg-drivly-surface border border-drivly-line rounded-24 p-4 shadow-elevated">
                  <DayPicker
                    mode="range"
                    selected={{
                      from: dateRange.startDate || undefined,
                      to: dateRange.endDate || undefined,
                    }}
                    onSelect={(range) => {
                      if (range?.from && range?.to) {
                        setDateRange({
                          startDate: range.from,
                          endDate: range.to,
                        });
                      }
                      setShowDatePicker(false);
                    }}
                    numberOfMonths={2}
                    defaultMonth={new Date()}
                    fromDate={new Date()}
                  />
                </div>
              )}
            </div>

            {/* Heures */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Heure départ
                </label>
                <select
                  className="w-full bg-drivly-bg border-drivly-line rounded-16 py-2 px-3"
                  value={selectedTimes.pickupTime}
                  onChange={(e) =>
                    setTimes({ ...selectedTimes, pickupTime: e.target.value })
                  }
                >
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Heure retour
                </label>
                <select
                  className="w-full bg-drivly-bg border-drivly-line rounded-16 py-2 px-3"
                  value={selectedTimes.returnTime}
                  onChange={(e) =>
                    setTimes({ ...selectedTimes, returnTime: e.target.value })
                  }
                >
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="btn btn-solid"
              onClick={handleSearch}
              disabled={!pickupLocation || !dateRange.startDate || !dateRange.endDate}
            >
              Voir les véhicules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 