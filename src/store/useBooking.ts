/*
import { create } from 'zustand';

// Définitions des types
export interface Location {
  id: string;
  name: string;
  address: string;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category: 'citadine' | 'compacte' | 'berline' | 'suv' | 'sport' | 'luxe';
  theme: 'drivly' | 'orion';
  description: string;
  features: {
    seats: number;
    doors: number;
    bags: number;
    transmission: 'automatique' | 'manuelle';
    fuel: 'essence' | 'diesel' | 'électrique' | 'hybride';
    consumption: string;
    power: number;
    acceleration: number;
  };
  images: string[];
  dailyPrice: number;
  deposit: number;
  isFeatured: boolean;
  tags: string[];
}


export interface Insurance {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Extra {
  id: string;
  name: string;
  price: number;
  type: 'per_day' | 'per_rental';
}

export interface Driver {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Date | null;
}

// État du store
interface BookingState {
  step: number;
  pickupLocation: Location | null;
  returnLocation: Location | null;
  dateRange: DateRange;
  times: {
    pickupTime: string;
    returnTime: string;
  };
  driver: Driver;
  selectedVehicle: Vehicle | null;
  selectedInsurance: Insurance | null;
  selectedExtras: Extra[];
  promoCode: string | null;

  // Actions
  setStep: (step: number) => void;
  setPickupLocation: (location: Location | null) => void;
  setReturnLocation: (location: Location | null) => void;
  setDateRange: (dateRange: DateRange) => void;
  setTimes: (times: { pickupTime: string; returnTime: string }) => void;
  setDriver: (driver: Driver) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  setSelectedInsurance: (insurance: Insurance | null) => void;
  toggleExtra: (extra: Extra) => void;
  setPromoCode: (code: string | null) => void;
  resetBooking: () => void;
}

const initialState = {
    step: 1,
    pickupLocation: null,
    returnLocation: null,
    dateRange: { startDate: null, endDate: null },
    times: { pickupTime: '10:00', returnTime: '10:00' },
    driver: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: null,
    },
    selectedVehicle: null,
    selectedInsurance: null,
    selectedExtras: [],
    promoCode: null,
}

// Création du store Zustand
export const useBooking = create<BookingState>((set) => ({
    ...initialState,
  
    // Actions
    setStep: (step) => set({ step }),
    setPickupLocation: (location) => set({ pickupLocation: location }),
    setReturnLocation: (location) => set({ returnLocation: location }),
    setDateRange: (dateRange) => set({ dateRange }),
    setTimes: (times) => set({ times }),
    setDriver: (driver) => set({ driver }),
    setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
    setSelectedInsurance: (insurance) => set({ selectedInsurance: insurance }),
    toggleExtra: (extraId) =>
      set((state) => {
        const isSelected = state.selectedExtras.some(
          (extra) => extra.id === extraId.id
        );
        if (isSelected) {
          return {
            selectedExtras: state.selectedExtras.filter(
              (extra) => extra.id !== extraId.id
            ),
          };
        } else {
          return { selectedExtras: [...state.selectedExtras, extraId] };
        }
      }),
    setPromoCode: (code) => set({ promoCode: code }),
    resetBooking: () => set(initialState),
}));
*/ 