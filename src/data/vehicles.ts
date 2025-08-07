export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  power: string;
  co2: string;
  price: number;
  pricePeriod: 'mois';
  badges: string[];
  category: 'Cat 01' | 'Cat 02' | 'Cat 03' | 'Cat 04' | 'Cat 05' | 'Cat 06';
  images: string[];
  availability?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'range-rover-velar-p400e',
    slug: 'range-rover-velar-p400e',
    brand: 'Land Rover',
    model: 'Range Rover Velar P400e',
    power: '400cv',
    co2: '48g',
    price: 791,
    pricePeriod: 'mois',
    badges: [],
    category: 'Cat 02',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070'
    ],
    availability: 'Plus disponible jusqu\'à Août 2026'
  },
  {
    id: 'porsche-macan-4s',
    slug: 'porsche-macan-4s',
    brand: 'Porsche',
    model: 'Macan 4S',
    power: '516cv',
    co2: '0g',
    price: 946,
    pricePeriod: 'mois',
    badges: ['Électrique'],
    category: 'Cat 03',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070'
    ]
  },
  {
    id: 'porsche-718-boxster',
    slug: 'porsche-718-boxster',
    brand: 'Porsche',
    model: '718 Boxster',
    power: '300cv',
    co2: '220g',
    price: 959,
    pricePeriod: 'mois',
    badges: ['Cabriolet'],
    category: 'Cat 04',
    images: [
      'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
      'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
      'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070'
    ]
  },
  {
    id: 'porsche-macan-4',
    slug: 'porsche-macan-4',
    brand: 'Porsche',
    model: 'Macan 4',
    power: '408cv',
    co2: '0g',
    price: 737,
    pricePeriod: 'mois',
    badges: ['Électrique'],
    category: 'Cat 02',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070'
    ]
  },
  {
    id: 'mercedes-gle-53-amg',
    slug: 'mercedes-gle-53-amg',
    brand: 'Mercedes',
    model: 'GLE 53 AMG Night Edition',
    power: '585cv',
    co2: '31g',
    price: 1290,
    pricePeriod: 'mois',
    badges: ['Hybride', 'AMG'],
    category: 'Cat 05',
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070'
    ]
  }
]; 