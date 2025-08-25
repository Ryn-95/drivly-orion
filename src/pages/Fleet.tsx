import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: number;
  price: number;
  priceDisplay: string;
  image: string;
  type: 'Berline' | 'SUV' | 'Compacte' | 'Sportive' | 'Cabriolet' | 'Break';
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  transmission: 'Automatique' | 'Manuelle';
  seats: number;
  power: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  availability: 'Disponible' | 'Bientôt disponible' | 'Sur commande';
}

const allVehicles: Vehicle[] = [
  // Catégorie 1 - 790€/mois
  {
    id: 'mercedes-classe-a',
    name: 'Mercedes Classe A 200d',
    brand: 'Mercedes',
    model: 'Classe A',
    category: 1,
    price: 790,
    priceDisplay: '790€/mois',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    type: 'Compacte',
    fuel: 'Hybride',
    transmission: 'Automatique',
    seats: 5,
    power: '163 ch',
    features: ['Luxueuse', 'Hybride', 'Compacte', 'Navigation GPS', 'Climatisation'],
    isPopular: true,
    availability: 'Disponible'
  },
  {
    id: 'bmw-serie-1',
    name: 'BMW Série 1 118i',
    brand: 'BMW',
    model: 'Série 1',
    category: 1,
    price: 790,
    priceDisplay: '790€/mois',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    type: 'Compacte',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '140 ch',
    features: ['Sportive', 'Premium', 'Dynamique', 'Apple CarPlay', 'LED'],
    availability: 'Disponible'
  },
  {
    id: 'audi-a3',
    name: 'Audi A3 35 TFSI',
    brand: 'Audi',
    model: 'A3',
    category: 1,
    price: 790,
    priceDisplay: '790€/mois',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    type: 'Berline',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '150 ch',
    features: ['Élégante', 'Technologique', 'Confortable', 'Virtual Cockpit', 'Parktronic'],
    availability: 'Disponible'
  },
  {
    id: 'volkswagen-golf',
    name: 'Volkswagen Golf 8 GTI',
    brand: 'Volkswagen',
    model: 'Golf',
    category: 1,
    price: 790,
    priceDisplay: '790€/mois',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    type: 'Compacte',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '245 ch',
    features: ['Sportive', 'Performance', 'Iconique', 'DCC', 'R-Line'],
    isNew: true,
    availability: 'Bientôt disponible'
  },

  // Catégorie 2 - 1290€/mois
  {
    id: 'bmw-serie-3',
    name: 'BMW Série 3 320d xDrive',
    brand: 'BMW',
    model: 'Série 3',
    category: 2,
    price: 1290,
    priceDisplay: '1290€/mois',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '190 ch',
    features: ['Luxueuse', 'Sportive', 'Hybride', 'Transmission intégrale', 'Cuir'],
    isPopular: true,
    availability: 'Disponible'
  },
  {
    id: 'audi-a4',
    name: 'Audi A4 40 TDI Quattro',
    brand: 'Audi',
    model: 'A4',
    category: 2,
    price: 1290,
    priceDisplay: '1290€/mois',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '204 ch',
    features: ['Premium', 'Technologique', 'Élégante', 'Matrix LED', 'Bang & Olufsen'],
    availability: 'Disponible'
  },
  {
    id: 'mercedes-classe-c',
    name: 'Mercedes Classe C 220d',
    brand: 'Mercedes',
    model: 'Classe C',
    category: 2,
    price: 1290,
    priceDisplay: '1290€/mois',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '194 ch',
    features: ['Prestige', 'Confort', 'Élégance', 'MBUX', 'AMG Line'],
    availability: 'Disponible'
  },
  {
    id: 'volvo-xc40',
    name: 'Volvo XC40 T4 AWD',
    brand: 'Volvo',
    model: 'XC40',
    category: 2,
    price: 1290,
    priceDisplay: '1290€/mois',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    type: 'SUV',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '190 ch',
    features: ['SUV Compact', 'Sécurité', 'Scandinave', 'Pilot Assist', 'Harman Kardon'],
    availability: 'Disponible'
  },

  // Catégorie 3 - 1890€/mois
  {
    id: 'audi-a6',
    name: 'Audi A6 50 TDI Quattro',
    brand: 'Audi',
    model: 'A6',
    category: 3,
    price: 1890,
    priceDisplay: '1890€/mois',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '286 ch',
    features: ['Luxueuse', 'Spacieuse', 'Hybride', 'Air suspension', 'Virtual Cockpit Plus'],
    isPopular: true,
    availability: 'Disponible'
  },
  {
    id: 'mercedes-classe-e',
    name: 'Mercedes Classe E 300d',
    brand: 'Mercedes',
    model: 'Classe E',
    category: 3,
    price: 1890,
    priceDisplay: '1890€/mois',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '245 ch',
    features: ['Prestige', 'Confort', 'Innovation', 'MBUX', 'Burmester'],
    availability: 'Disponible'
  },
  {
    id: 'bmw-serie-5',
    name: 'BMW Série 5 530d xDrive',
    brand: 'BMW',
    model: 'Série 5',
    category: 3,
    price: 1890,
    priceDisplay: '1890€/mois',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    type: 'Berline',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
    power: '286 ch',
    features: ['Executive', 'Sportive', 'Technologique', 'Driving Assistant', 'Harman Kardon'],
    availability: 'Disponible'
  },
  {
    id: 'tesla-model-s',
    name: 'Tesla Model S Long Range',
    brand: 'Tesla',
    model: 'Model S',
    category: 3,
    price: 1890,
    priceDisplay: '1890€/mois',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    type: 'Berline',
    fuel: 'Électrique',
    transmission: 'Automatique',
    seats: 5,
    power: '670 ch',
    features: ['Électrique', 'Innovation', 'Autopilot', '650 km autonomie', 'Écran 17"'],
    isNew: true,
    availability: 'Sur commande'
  },

  // Catégorie 4 - 2490€/mois
  {
    id: 'porsche-macan-s',
    name: 'Porsche Macan S',
    brand: 'Porsche',
    model: 'Macan',
    category: 4,
    price: 2490,
    priceDisplay: '2490€/mois',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    type: 'SUV',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '380 ch',
    features: ['Sportive', 'SUV Premium', 'Performance', 'PASM', 'Sport Chrono'],
    isPopular: true,
    availability: 'Disponible'
  },
  {
    id: 'range-rover-evoque',
    name: 'Range Rover Evoque P300e',
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    category: 4,
    price: 2490,
    priceDisplay: '2490€/mois',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    type: 'SUV',
    fuel: 'Hybride',
    transmission: 'Automatique',
    seats: 5,
    power: '309 ch',
    features: ['Luxueuse', 'Design', 'Polyvalente', 'Terrain Response', 'Meridian'],
    availability: 'Disponible'
  },
  {
    id: 'bmw-x3',
    name: 'BMW X3 M40i xDrive',
    brand: 'BMW',
    model: 'X3',
    category: 4,
    price: 2490,
    priceDisplay: '2490€/mois',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    type: 'SUV',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '360 ch',
    features: ['SUV Sportif', 'M Performance', 'xDrive', 'Adaptive M', 'Panoramique'],
    availability: 'Disponible'
  },
  {
    id: 'audi-q5',
    name: 'Audi Q5 55 TFSI e Quattro',
    brand: 'Audi',
    model: 'Q5',
    category: 4,
    price: 2490,
    priceDisplay: '2490€/mois',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    type: 'SUV',
    fuel: 'Hybride',
    transmission: 'Automatique',
    seats: 5,
    power: '367 ch',
    features: ['SUV Premium', 'Hybride Rechargeable', 'Quattro', 'Virtual Cockpit', 'Bang & Olufsen'],
    availability: 'Disponible'
  },

  // Catégorie 5 - 3290€/mois
  {
    id: 'range-rover-velar',
    name: 'Range Rover Velar P400e',
    brand: 'Land Rover',
    model: 'Range Rover Velar',
    category: 5,
    price: 3290,
    priceDisplay: '3290€/mois',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    type: 'SUV',
    fuel: 'Hybride',
    transmission: 'Automatique',
    seats: 5,
    power: '404 ch',
    features: ['Ultra-luxueuse', 'Élégante', 'Puissante', 'Air Suspension', 'Meridian Signature'],
    isPopular: true,
    availability: 'Disponible'
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche Cayenne Turbo',
    brand: 'Porsche',
    model: 'Cayenne',
    category: 5,
    price: 3290,
    priceDisplay: '3290€/mois',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
    type: 'SUV',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 5,
    power: '550 ch',
    features: ['Sportive', 'SUV Premium', 'Turbo', 'PCCB', 'Burmester 3D'],
    availability: 'Disponible'
  },
  {
    id: 'mercedes-gle',
    name: 'Mercedes GLE 450 4MATIC',
    brand: 'Mercedes',
    model: 'GLE',
    category: 5,
    price: 3290,
    priceDisplay: '3290€/mois',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    type: 'SUV',
    fuel: 'Hybride',
    transmission: 'Automatique',
    seats: 7,
    power: '367 ch',
    features: ['SUV 7 places', 'Hybride 48V', '4MATIC', 'MBUX', 'Air Body Control'],
    availability: 'Disponible'
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5 M50i xDrive',
    brand: 'BMW',
    model: 'X5',
    category: 5,
    price: 3290,
    priceDisplay: '3290€/mois',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    type: 'SUV',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 7,
    power: '530 ch',
    features: ['SUV 7 places', 'M Performance', 'xDrive', 'Laser Light', 'Bowers & Wilkins'],
    availability: 'Disponible'
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    brand: 'Porsche',
    model: '911',
    category: 5,
    price: 3290,
    priceDisplay: '3290€/mois',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    type: 'Sportive',
    fuel: 'Essence',
    transmission: 'Automatique',
    seats: 4,
    power: '450 ch',
    features: ['Icône Sportive', 'Performance Pure', 'PDK', 'Sport Chrono', 'BOSE'],
    isNew: true,
    availability: 'Sur commande'
  }
];

const categories = [
  { id: 1, name: 'Catégorie 1', price: '790€/mois', description: 'Voitures compactes et berlines premium' },
  { id: 2, name: 'Catégorie 2', price: '1290€/mois', description: 'Berlines executive et SUV compacts' },
  { id: 3, name: 'Catégorie 3', price: '1890€/mois', description: 'Berlines de prestige et SUV premium' },
  { id: 4, name: 'Catégorie 4', price: '2490€/mois', description: 'SUV sportifs et véhicules de luxe' },
  { id: 5, name: 'Catégorie 5', price: '3290€/mois', description: 'Véhicules d\'exception et supercars' }
];

export const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  // Filtrer les véhicules par catégorie seulement
  const filteredVehicles = useMemo(() => {
    const vehicles = allVehicles.filter(v => v.category === selectedCategory);
    
    // Tri par défaut : populaires d'abord, puis nouveaux
    vehicles.sort((a, b) => {
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });

    return vehicles;
  }, [selectedCategory]);



  return (
    <section className="py-24 bg-white relative min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
                {/* Header épuré avec statistiques */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide">
                Collection Premium 2024
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide"
            >
              Choisissez votre catégorie
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
            >
              De la compacte premium au véhicule d'exception, explorez notre gamme soigneusement sélectionnée 
              pour répondre à tous vos besoins de mobilité
            </motion.p>
            
            


          </motion.div>
        </div>

        {/* Navigation des catégories améliorée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                  selectedCategory === category.id
                    ? 'border-black bg-black text-white shadow-2xl'
                    : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                <div className="text-center">
                  {/* Icône de catégorie */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}
                  >
                    <svg 
                      className={`w-6 h-6 ${
                        selectedCategory === category.id ? 'text-white' : 'text-gray-600'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  {/* Nom de la catégorie */}
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  
                  {/* Prix */}
                  <div className={`text-sm font-medium mb-3 ${
                    selectedCategory === category.id ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {category.price}
                  </div>
                  
                  {/* Description courte */}
                  <p className={`text-xs leading-relaxed ${
                    selectedCategory === category.id ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {category.description.split(' ').slice(0, 4).join(' ')}...
                  </p>
                  
                  {/* Indicateur de sélection */}
                  {selectedCategory === category.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        

        {/* Info catégorie sélectionnée */}
        {currentCategory && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg max-w-4xl mx-auto">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Sélection active
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                >
                  {currentCategory.name}
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl font-semibold text-black mb-4"
                >
                  À partir de {currentCategory.price}
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
                >
                  {currentCategory.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Assurance incluse
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Entretien compris
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Livraison express
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexibilité totale
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grille des véhicules */}
        <AnimatePresence mode="wait">
          {filteredVehicles.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${filteredVehicles.length}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.05, 
                    duration: 0.5
                  }}
                  className="group"
                  onMouseEnter={() => setIsHovered(vehicle.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Link to={`/vehicule/${vehicle.id}`} className="block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:-translate-y-2">
                      {/* Badges */}
                      <div className="relative">
                                                <div className="absolute top-4 left-4 z-10 flex gap-2">
                          {vehicle.isPopular && (
                            <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                              Populaire
                            </span>
                          )}
                          {vehicle.isNew && (
                            <span className="px-3 py-1 bg-gray-600 text-white text-xs font-medium rounded-full">
                              Nouveau
                            </span>
                          )}
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                            {vehicle.availability}
                          </span>
      </div>

                                                {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

                                            {/* Contenu amélioré */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors mb-1">
                              {vehicle.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium">{vehicle.brand} • {vehicle.type}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-black bg-gray-50 px-3 py-1 rounded-xl">
                              {vehicle.priceDisplay}
                            </div>
                          </div>
                        </div>

                        {/* Specs améliorées */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {vehicle.fuel}
                          </div>
                          <div className="flex items-center text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            {vehicle.seats} places
                          </div>
                          <div className="flex items-center text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            {vehicle.power}
                          </div>
                          <div className="flex items-center text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <svg className="w-3 h-3 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                            </svg>
                            {vehicle.transmission}
                          </div>
                        </div>
                        
                        {/* Features principales améliorées */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {vehicle.features.slice(0, 2).map((feature, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {vehicle.features.length > 2 && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                              +{vehicle.features.length - 2} options
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Disponible maintenant
                          </div>
                          <div className="flex items-center text-sm font-medium text-black bg-gray-50 px-4 py-2 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                            Découvrir
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.901-6.062 2.379l-.479.332M6.828 6.828A10.029 10.029 0 0112 3c5.523 0 10 4.477 10 10a10.029 10.029 0 01-2.828 7.172M6.828 6.828L8 8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun véhicule trouvé</h3>
              <p className="text-gray-500 mb-4">Modifiez vos critères de recherche ou filtres</p>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Section avantages Drivly */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 bg-gray-50 rounded-3xl p-12"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">
              Pourquoi choisir Drivly Orion ?
              </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expérience premium qui redéfinit l'abonnement automobile
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexibilité Totale</h3>
              <p className="text-gray-600 leading-relaxed">
                Changez de véhicule jusqu'à 4 fois par an selon vos besoins. 
                Weekend sportif ? Choisissez une Porsche. Voyage familial ? Optez pour un SUV.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tout Inclus</h3>
              <p className="text-gray-600 leading-relaxed">
                Assurance, entretien, dépannage, pneus... Tout est inclus dans votre abonnement. 
                Une seule facture mensuelle, zéro surprise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Livraison Express</h3>
              <p className="text-gray-600 leading-relaxed">
                Livraison gratuite où vous voulez, quand vous voulez. 
                Service conciergerie premium disponible 24h/7j.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section marques partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">
              Nos Marques Partenaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les plus prestigieuses marques automobiles à votre disposition
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Mercedes-Benz', models: '5 modèles', popular: 'Classe E' },
              { name: 'BMW', models: '4 modèles', popular: 'Série 3' },
              { name: 'Audi', models: '4 modèles', popular: 'A6' },
              { name: 'Porsche', models: '3 modèles', popular: 'Macan S' },
              { name: 'Land Rover', models: '2 modèles', popular: 'Velar' },
              { name: 'Tesla', models: '1 modèle', popular: 'Model S' },
              { name: 'Volvo', models: '1 modèle', popular: 'XC40' },
              { name: 'Volkswagen', models: '1 modèle', popular: 'Golf GTI' }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{brand.models}</p>
                <p className="text-xs text-gray-400">Plus populaire: {brand.popular}</p>
              </motion.div>
            ))}
            </div>
        </motion.div>

                {/* CTA simple et rapide */}
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Découvrez nos véhicules premium
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Flexibilité, assurance et entretien inclus
            </p>
            
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-2xl font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Nous contacter
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 