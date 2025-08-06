import { create } from 'zustand';
import { Vehicle } from '../data/vehicles';

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface Times {
  pickup: string | null;
  return: string | null;
}

interface Location {
  id: string;
  name: string;
}

interface BookingStore {
  selectedVehicle: Vehicle | null;
  dateRange: DateRange;
  times: Times;
  pickupLocation: Location | null;
  returnLocation: Location | null;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  setDateRange: (range: DateRange) => void;
  setTimes: (times: Times) => void;
  setPickupLocation: (location: Location | null) => void;
  setReturnLocation: (location: Location | null) => void;
}

export const useBooking = create<BookingStore>((set) => ({
  selectedVehicle: null,
  dateRange: {
    from: null,
    to: null,
  },
  times: {
    pickup: null,
    return: null,
  },
  pickupLocation: null,
  returnLocation: null,
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  setDateRange: (range) => set({ dateRange: range }),
  setTimes: (times) => set({ times }),
  setPickupLocation: (location) => set({ pickupLocation: location }),
  setReturnLocation: (location) => set({ returnLocation: location }),
})); 