import { create } from 'zustand';
import { Vehicle } from '../data/vehicles';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface Times {
  pickup: string;
  return: string;
}

interface Driver {
  name: string;
  email: string;
  phone: string;
  age: number;
}

interface Insurance {
  type: 'basic' | 'plus' | 'premium';
  price: number;
}

interface Extra {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

interface BookingState {
  pickupLocation: string | null;
  returnLocation: string | null;
  dateRange: DateRange | null;
  times: Times | null;
  driver: Driver | null;
  selectedVehicle: Vehicle | null;
  insurance: Insurance | null;
  extras: Extra[];
  promoCode: string | null;
  setPickupLocation: (location: string) => void;
  setReturnLocation: (location: string) => void;
  setDateRange: (dateRange: DateRange) => void;
  setTimes: (times: Times) => void;
  setDriver: (driver: Driver) => void;
  setSelectedVehicle: (vehicle: Vehicle) => void;
  setInsurance: (insurance: Insurance) => void;
  toggleExtra: (extraId: string) => void;
  setPromoCode: (code: string) => void;
}

export const useBooking = create<BookingState>((set) => ({
  pickupLocation: null,
  returnLocation: null,
  dateRange: null,
  times: null,
  driver: null,
  selectedVehicle: null,
  insurance: null,
  extras: [
    { id: 'gps', name: 'GPS', price: 10, selected: false },
    { id: 'childSeat', name: 'Siège enfant', price: 15, selected: false },
    { id: 'additionalDriver', name: 'Conducteur additionnel', price: 20, selected: false },
  ],
  promoCode: null,

  setPickupLocation: (location) => set({ pickupLocation: location }),
  setReturnLocation: (location) => set({ returnLocation: location }),
  setDateRange: (dateRange) => set({ dateRange }),
  setTimes: (times) => set({ times }),
  setDriver: (driver) => set({ driver }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  setInsurance: (insurance) => set({ insurance }),
  toggleExtra: (extraId) => set((state) => ({
    extras: state.extras.map((extra) =>
      extra.id === extraId ? { ...extra, selected: !extra.selected } : extra
    ),
  })),
  setPromoCode: (code) => set({ promoCode: code }),
})); 