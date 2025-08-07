import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'citadines',
    name: 'Citadines',
    description: 'Parfaites pour la ville',
    price: '1 480',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    features: ['Compacte', 'Économique', 'Facile à garer']
  },
  {
    id: 'suv',
    name: 'SUV Premium',
    description: 'Confort et polyvalence',
    price: '2 480',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    features: ['Spacieux', 'Polyvalent', 'Sécurisant']
  },
  {
    id: 'sport',
    name: 'Sportives',
    description: 'Pour les amateurs de sensations',
    price: '3 980',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
    features: ['Puissante', 'Design', 'Performance']
  },
  {
    id: 'luxe',
    name: 'Luxe',
    description: 'L\'excellence automobile',
    price: '5 980',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    features: ['Prestige', 'Excellence', 'Sur-mesure']
  }
];

export const Categories = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-8">
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-title font-light mb-6"
          >
            Une gamme complète pour tous vos besoins
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light"
          >
            De la citadine au SUV de luxe, découvrez notre sélection de véhicules premium adaptés à chaque usage.
          </motion.p>
        </div>

        {/* Grille de catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image et overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Tags des caractéristiques */}
                <div className="flex gap-2 mb-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[10px] tracking-wider uppercase rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Infos principales */}
                <h3 className="text-2xl font-title mb-2">{category.name}</h3>
                <p className="text-white/60 text-sm mb-4">{category.description}</p>
                
                {/* Prix et CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-white/40 mb-1">À partir de</div>
                    <div className="text-xl">{category.price}€<span className="text-sm text-white/60">/mois</span></div>
                  </div>
                  <Link
                    to={`/flotte/${category.id}`}
                    className="inline-flex items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Découvrir
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
 
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'citadines',
    name: 'Citadines',
    description: 'Parfaites pour la ville',
    price: '1 480',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070',
    features: ['Compacte', 'Économique', 'Facile à garer']
  },
  {
    id: 'suv',
    name: 'SUV Premium',
    description: 'Confort et polyvalence',
    price: '2 480',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    features: ['Spacieux', 'Polyvalent', 'Sécurisant']
  },
  {
    id: 'sport',
    name: 'Sportives',
    description: 'Pour les amateurs de sensations',
    price: '3 980',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070',
    features: ['Puissante', 'Design', 'Performance']
  },
  {
    id: 'luxe',
    name: 'Luxe',
    description: 'L\'excellence automobile',
    price: '5 980',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    features: ['Prestige', 'Excellence', 'Sur-mesure']
  }
];

export const Categories = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-8">
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-title font-light mb-6"
          >
            Une gamme complète pour tous vos besoins
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light"
          >
            De la citadine au SUV de luxe, découvrez notre sélection de véhicules premium adaptés à chaque usage.
          </motion.p>
        </div>

        {/* Grille de catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image et overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Tags des caractéristiques */}
                <div className="flex gap-2 mb-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[10px] tracking-wider uppercase rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Infos principales */}
                <h3 className="text-2xl font-title mb-2">{category.name}</h3>
                <p className="text-white/60 text-sm mb-4">{category.description}</p>
                
                {/* Prix et CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-white/40 mb-1">À partir de</div>
                    <div className="text-xl">{category.price}€<span className="text-sm text-white/60">/mois</span></div>
                  </div>
                  <Link
                    to={`/flotte/${category.id}`}
                    className="inline-flex items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Découvrir
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
 
 
 