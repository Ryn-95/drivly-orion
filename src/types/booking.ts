export interface Extra {
  id: string;
  name: string;
  price: number;
  selected?: boolean;
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
  // Extras
  extras: Extra[];
  toggleExtra: (extraId: string) => void;
  
  // Insurance
  insurance: InsuranceOption | null;
  setInsurance: (insurance: InsuranceOption) => void;
  
  // Date and Time
  dateRange: DateRange | null;
  times: Times | null;
  
  // Locations
  pickupLocation: Location | null;
  returnLocation: Location | null;
}

export type EventHandler = (e: React.ChangeEvent<HTMLInputElement>) => void; 