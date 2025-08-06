import { create } from 'zustand';

export interface Location {
  id: string;
  name: string;
  address: string;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface Times {
  pickupTime: string;
  returnTime: string;
}

export interface Driver {
  age: number;
  additionalDrivers: number;
}

export interface Insurance {
  type: 'basic' | 'plus' | 'premium';
  price: number;
}

export interface Extra {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  dailyPrice: number;
}

interface BookingState {
  pickupLocation: Location | null;
  returnLocation: Location | null;
  dateRange: DateRange;
  times: Times;
  driver: Driver;
  selectedVehicle: Vehicle | null;
  insurance: Insurance | null;
  extras: Extra[];
  promoCode: string;
  // Actions
  setPickupLocation: (location: Location | null) => void;
  setReturnLocation: (location: Location | null) => void;
  setDateRange: (dateRange: DateRange) => void;
  setTimes: (times: Times) => void;
  setDriver: (driver: Driver) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  setInsurance: (insurance: Insurance | null) => void;
  toggleExtra: (extraId: string) => void;
  setPromoCode: (code: string) => void;
  reset: () => void;
}

const initialState = {
  pickupLocation: null,
  returnLocation: null,
  dateRange: {
    startDate: null,
    endDate: null,
  },
  times: {
    pickupTime: '10:00',
    returnTime: '10:00',
  },
  driver: {
    age: 25,
    additionalDrivers: 0,
  },
  selectedVehicle: null,
  insurance: null,
  extras: [
    { id: 'gps', name: 'GPS', price: 5, selected: false },
    { id: 'childSeat', name: 'Siège enfant', price: 10, selected: false },
    { id: 'wifi', name: 'WiFi 4G', price: 8, selected: false },
  ],
  promoCode: '',
};

export const useBooking = create<BookingState>((set) => ({
  ...initialState,

  setPickupLocation: (location) => set({ pickupLocation: location }),
  
  setReturnLocation: (location) => set({ returnLocation: location }),
  
  setDateRange: (dateRange) => set({ dateRange }),
  
  setTimes: (times) => set({ times }),
  
  setDriver: (driver) => set({ driver }),
  
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  
  setInsurance: (insurance) => set({ insurance }),
  
  toggleExtra: (extraId) =>
    set((state) => ({
      extras: state.extras.map((extra) =>
        extra.id === extraId
          ? { ...extra, selected: !extra.selected }
          : extra
      ),
    })),
  
  setPromoCode: (code) => set({ promoCode: code }),
  
  reset: () => set(initialState),
})); 