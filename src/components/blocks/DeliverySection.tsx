import { motion } from 'framer-motion';

export const DeliverySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Image de fond - Vue aérienne */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60"
              alt="Vue aérienne - Livraison à domicile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
          </div>

          {/* Contenu */}
          <div className="relative h-full flex flex-col justify-center p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extralight text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Vue aérienne
              </motion.h2>
              
              <motion.h3
                className="text-2xl md:text-3xl font-light text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Nous livrons jusque <span className="bg-white text-black px-3 py-1 rounded-lg">chez vous</span>.
              </motion.h3>
              
              <motion.p
                className="text-lg text-white/90 font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Nos abonnements vous permettent de "switcher" de voiture en fonction de vos besoins et envies, et donc d'optimiser vos dépenses et votre fiscalité.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-light">Livraison gratuite</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-light">Partout en France</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-light">Sous 48h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Effet de parallaxe subtle */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            animate={{
              background: [
                "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
                "linear-gradient(to top, rgba(0,0,0,0.2), transparent)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}; 