/*
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Location {
  id: string;
  name: string;
}

const locations: Location[] = [
  { id: 'paris', name: 'Paris' },
  { id: 'nice', name: 'Nice' },
  { id: 'marseille', name: 'Marseille' },
  { id: 'lyon', name: 'Lyon' },
];

export const HeroBooking = () => {
  const [pickupLocation, setPickupLocation] = useState<Location | null>(
    locations[0]
  );
  const [returnLocation, setReturnLocation] = useState<Location | null>(
    locations[0]
  );
  const [isDifferentReturn, setIsDifferentReturn] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [isDriverAgePickerOpen, setIsDriverAgePickerOpen] = useState(false);
  const [driverAge, setDriverAge] = useState('25+');

  const initialDays: DateRange = {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  };
  const [range, setRange] = useState<DateRange | undefined>(initialDays);

  const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
  };

  const formatDate = (date: Date) => {
    return format(date, 'd MMM', { locale: fr });
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range) {
      setRange(range);
    }
  };

  const renderDateRange = () => {
    if (!range?.from) return 'Sélectionner les dates';
    if (range.from && !range.to) return formatDate(range.from);
    if (range.from && range.to)
      return `${formatDate(range.from)} - ${formatDate(range.to)}`;
    return 'Sélectionner les dates';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          src="/placeholders/hero-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-title font-bold tracking-tight mb-4"
        >
          Votre voiture, selon vos envies.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-drivly-muted max-w-2xl mx-auto"
        >
          Découvrez notre flotte exclusive de citadines et de véhicules de luxe.
          Une expérience de location premium, simple et flexible.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4"
      >
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="text-xs text-drivly-muted">
                Lieu de prise en charge
              </label>
            </div>
            <div>
              <label className="text-xs text-drivly-muted">Dates</label>
            </div>
            <div>
              <label className="text-xs text-drivly-muted">Âge du conducteur</label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
            <div className="md:col-span-2">
              <input
                type="text"
                value={`${pickupLocation?.name}${
                  !isDifferentReturn ? ` / ${returnLocation?.name}` : ''
                }`}
                readOnly
                className="w-full p-2 bg-transparent border-b border-white/20"
              />
            </div>
            <div>
              <button
                onClick={() => setIsDatePickerOpen(true)}
                className="w-full p-2 text-left bg-transparent border-b border-white/20"
              >
                {renderDateRange()}
              </button>
            </div>
            <div>
              <button
                onClick={() => setIsDriverAgePickerOpen(true)}
                className="w-full p-2 text-left bg-transparent border-b border-white/20"
              >
                {driverAge}
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={isDifferentReturn}
                onChange={() => setIsDifferentReturn(!isDifferentReturn)}
                className="mr-2"
              />
              Retour à un lieu différent
            </label>
            <button className="btn btn-solid">Voir les véhicules</button>
          </div>
        </div>
      </motion.div>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-surface p-4 rounded-lg">
            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleDateSelect}
              locale={fr}
              numberOfMonths={2}
            />
            <button
              onClick={() => setIsDatePickerOpen(false)}
              className="mt-4 w-full btn btn-outline"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
*/ 