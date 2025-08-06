import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const locations = [
  { id: 'paris', name: 'Paris' },
  { id: 'lyon', name: 'Lyon' },
  { id: 'marseille', name: 'Marseille' }
];

const times = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00'
];

export const HeroBooking = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnTime, setReturnTime] = useState('10:00');
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');

  const handleSearch = () => {
    if (!selectedRange?.from || !selectedRange?.to || !pickupLocation || !returnLocation) {
      return;
    }

    // Navigation vers la page de résultats
    console.log('Recherche avec :', {
      dates: selectedRange,
      times: { pickup: pickupTime, return: returnTime },
      locations: { pickup: pickupLocation, return: returnLocation }
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lieux */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lieu de prise en charge
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Sélectionnez une ville</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lieu de retour
          </label>
          <select
            value={returnLocation}
            onChange={(e) => setReturnLocation(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Sélectionnez une ville</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dates */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dates de location
          </label>
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={setSelectedRange}
            className="border rounded-md p-2"
          />
        </div>

        {/* Heures */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heure de prise en charge
          </label>
          <select
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heure de retour
          </label>
          <select
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bouton de recherche */}
      <button
        onClick={handleSearch}
        disabled={!selectedRange?.from || !selectedRange?.to || !pickupLocation || !returnLocation}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Rechercher un véhicule
      </button>
    </div>
  );
}; 