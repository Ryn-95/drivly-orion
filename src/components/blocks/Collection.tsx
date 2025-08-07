import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'sport',
    title: 'Sport',
    description: 'Des voitures conçues pour la performance',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1974',
    link: '/flotte?category=sport'
  },
  {
    id: 'luxe',
    title: 'Luxe',
    description: 'L\'élégance à l\'état pur',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1972',
    link: '/flotte?category=luxe'
  },
  {
    id: 'suv',
    title: 'SUV',
    description: 'Le confort en toutes circonstances',
    image: 'https://images.unsplash.com/photo-1519245643362-cc52f50b494b?q=80&w=1974',
    link: '/flotte?category=suv'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export const Collection = () => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title mb-6">
            Notre Collection
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de véhicules haut de gamme pour tous vos besoins.
          </p>
        </motion.div>

        {/* Grille de collections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                to={collection.link}
                className="group block relative aspect-[4/5] overflow-hidden"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-title mb-2">{collection.title}</h3>
                  <p className="text-white/80 mb-6">{collection.description}</p>
                  <span className="inline-flex items-center text-gold uppercase tracking-widest text-sm">
                    Découvrir
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 