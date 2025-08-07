import { Vehicle } from '../data/vehicles';
import { ReactNode } from 'react';

export interface Extra {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  description: string;
  icon: ReactNode;
}

export interface InsuranceOption {
  type: string;
  price: number;
}

export interface Location {
  id: string;
  name: string;
}

export interface Times {
  pickup: string;
  return: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface BookingStore {
  // Vehicle
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;

  // Dates and Times
  dateRange: DateRange | null;
  times: Times | null;
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

export type EventHandler = React.ChangeEventHandler<HTMLInputElement>; 