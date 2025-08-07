import { create } from 'zustand';
import { Vehicle } from '../data/vehicles';
import { Extra, InsuranceOption } from '../types/booking';

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
  // Vehicle
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;

  // Dates and Times
  dateRange: DateRange;
  times: Times;
  setDateRange: (range: DateRange) => void;
  setTimes: (times: Times) => void;

  // Locations
  pickupLocation: Location | null;
  returnLocation: Location | null;
  setPickupLocation: (location: Location | null) => void;
  setReturnLocation: (location: Location | null) => void;

  // Extras
  extras: Extra[];
  toggleExtra: (extraId: string) => void;

  // Insurance
  insurance: InsuranceOption | null;
  setInsurance: (insurance: InsuranceOption) => void;
}

export const useBooking = create<BookingStore>((set) => ({
  // Vehicle
  selectedVehicle: null,
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),

  // Dates and Times
  dateRange: {
    from: null,
    to: null,
  },
  times: {
    pickup: null,
    return: null,
  },
  setDateRange: (range) => set({ dateRange: range }),
  setTimes: (times) => set({ times }),

  // Locations
  pickupLocation: null,
  returnLocation: null,
  setPickupLocation: (location) => set({ pickupLocation: location }),
  setReturnLocation: (location) => set({ returnLocation: location }),

  // Extras
  extras: [],
  toggleExtra: (extraId) => set((state) => ({
    extras: state.extras.map(extra =>
      extra.id === extraId
        ? { ...extra, selected: !extra.selected }
        : extra
    )
  })),

  // Insurance
  insurance: null,
  setInsurance: (insurance) => set({ insurance }),
})); 