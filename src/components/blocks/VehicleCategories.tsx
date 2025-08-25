import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Catégorie 1',
    price: '790€/mois',
    description: 'Voitures luxueuses, sportives, hybrides',
    vehicles: [
      {
        id: 'mercedes-classe-a',
        name: 'Mercedes Classe A',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
        features: ['Luxueuse', 'Hybride', 'Compacte']
      },
      {
        id: 'bmw-serie-1',
        name: 'BMW Série 1',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
        features: ['Sportive', 'Premium', 'Dynamique']
      }
    ]
  },
  {
    id: 2,
    name: 'Catégorie 2',
    price: '1290€/mois',
    description: 'Voitures luxueuses, sportives, hybrides',
    vehicles: [
      {
        id: 'bmw-serie-3',
        name: 'BMW Série 3',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
        features: ['Luxueuse', 'Sportive', 'Hybride']
      },
      {
        id: 'audi-a4',
        name: 'Audi A4',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
        features: ['Premium', 'Technologique', 'Élégante']
      }
    ]
  },
  {
    id: 3,
    name: 'Catégorie 3',
    price: '1890€/mois',
    description: 'Voitures luxueuses, sportives, hybrides',
    vehicles: [
      {
        id: 'audi-a6',
        name: 'Audi A6',
        image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
        features: ['Luxueuse', 'Spacieuse', 'Hybride']
      },
      {
        id: 'mercedes-classe-e',
        name: 'Mercedes Classe E',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
        features: ['Prestige', 'Confort', 'Innovation']
      }
    ]
  },
  {
    id: 4,
    name: 'Catégorie 4',
    price: '2490€/mois',
    description: 'Voitures luxueuses, sportives, hybrides',
    vehicles: [
      {
        id: 'porsche-macan-s',
        name: 'Porsche Macan S',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
        features: ['Sportive', 'SUV Premium', 'Performance']
      },
      {
        id: 'range-rover-evoque',
        name: 'Range Rover Evoque',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
        features: ['Luxueuse', 'Design', 'Polyvalente']
      }
    ]
  },
  {
    id: 5,
    name: 'Catégorie 5',
    price: '3290€/mois',
    description: 'Voitures luxueuses, sportives, hybrides',
    vehicles: [
      {
        id: 'range-rover-velar',
        name: 'Range Rover Velar',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
        features: ['Ultra-luxueuse', 'Élégante', 'Puissante']
      },
      {
        id: 'porsche-cayenne',
        name: 'Porsche Cayenne',
        image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
        features: ['Sportive', 'SUV Premium', 'Hybride']
      }
    ]
  }
];

export const VehicleCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header ultra-épuré avec effets premium */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-wide leading-tight">
                Les voitures des abonnements
              </h2>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg font-light text-gray-700 mb-8 tracking-wide"
            >
              Drivly Orion.
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm text-gray-500 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Chaque catégorie correspond à une tarification, dans chacune des catégories vous 
              retrouverez des voitures luxueuses, sportives, hybrides.
            </motion.p>
          </motion.div>
        </div>

        {/* Navigation minimaliste raffinée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-gray-100/50">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                  selectedCategory === category.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-black rounded-xl"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Catégorie sélectionnée */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Info catégorie minimaliste */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <div className="inline-block">
                  <h3 className="text-2xl font-light text-black mb-3 tracking-wide">
                    {currentCategory.name}
                  </h3>
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {currentCategory.price}
                  </div>
                  <p className="text-xs text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>
              </motion.div>

              {/* Grille des véhicules minimaliste */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {currentCategory.vehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="group"
                    onMouseEnter={() => setIsHovered(vehicle.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <Link to="/flotte" className="block">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                      >
                        {/* Image épurée */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <motion.img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                        </div>

                        {/* Contenu minimaliste */}
                        <div className="p-6">
                          <h4 className="text-lg font-medium text-black mb-3 group-hover:text-gray-700 transition-colors">
                            {vehicle.name}
                          </h4>
                          
                          {/* Features simplifiées */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {vehicle.features.map((feature, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                              Disponible en abonnement
                            </div>
                            <motion.div 
                              className="flex items-center text-xs text-gray-400 group-hover:text-black transition-colors"
                              whileHover={{ x: 2 }}
                            >
                              Découvrir →
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to="/flotte"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir toute la flotte
              <motion.svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs text-gray-400 font-light"
          >
            Plus de 50 véhicules premium vous attendent
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 