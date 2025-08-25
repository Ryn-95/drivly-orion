import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'cat-01',
    name: 'Catégorie 1',
    description: 'Voitures luxueuses, sportives, hybrides',
    price: '790',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    features: ['Luxueuses', 'Sportives', 'Hybrides'],
    highlight: 'Mercedes Classe A'
  },
  {
    id: 'cat-02',
    name: 'Catégorie 2',
    description: 'Voitures luxueuses, sportives, hybrides',
    price: '1290',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    features: ['Luxueuses', 'Sportives', 'Hybrides'],
    highlight: 'BMW Série 3'
  },
  {
    id: 'cat-03',
    name: 'Catégorie 3',
    description: 'Voitures luxueuses, sportives, hybrides',
    price: '1890',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
    features: ['Luxueuses', 'Sportives', 'Hybrides'],
    highlight: 'Audi A6'
  },
  {
    id: 'cat-04',
    name: 'Catégorie 4',
    description: 'Voitures luxueuses, sportives, hybrides',
    price: '2490',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    features: ['Luxueuses', 'Sportives', 'Hybrides'],
    highlight: 'Porsche Macan S'
  },
  {
    id: 'cat-05',
    name: 'Catégorie 5',
    description: 'Voitures luxueuses, sportives, hybrides',
    price: '3290',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070',
    features: ['Luxueuses', 'Sportives', 'Hybrides'],
    highlight: 'Range Rover Velar'
  }
];

export const Categories = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header ultra-épuré */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl font-extralight text-black mb-8 tracking-tight">
              Les voitures des abonnements
            </h2>
            <div className="text-2xl font-light text-gray-900 mb-4">
              Drivly Orion.
            </div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Chaque catégorie correspond à une tarification, dans chacune des catégories vous retrouverez des voitures luxueuses, sportives, hybrides.
            </p>
          </motion.div>
        </div>

        {/* Grille ultra-épurée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Link 
                to="/flotte"
                className="block group"
              >
                {/* Image minimaliste */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-gray-50">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Contenu épuré */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 font-light">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-semibold text-black">
                        {category.price}€<span className="text-lg text-gray-500 font-light">/mois</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400 group-hover:text-black transition-colors">
                      Découvrir →
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-800">
                      {category.highlight}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link 
            to="/flotte"
            className="inline-block px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            Voir toute la flotte
          </Link>
        </motion.div>
      </div>
    </section>
  );
}; 