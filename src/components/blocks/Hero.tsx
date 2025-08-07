import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-1.5 border border-white/10 text-[10px] tracking-[0.2em] uppercase mb-3">
              Drivly | Orion
            </div>
            <h1 className="text-4xl md:text-5xl font-title font-light leading-tight mb-8">
              Location de véhicules d'exception
            </h1>
            <p className="text-base md:text-lg text-white/60 font-light max-w-xl leading-relaxed">
              Une expérience de conduite unique, adaptée à vos exigences. 
              Notre flotte premium vous attend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center space-x-8"
          >
            <Link
              to="/reservation"
              className="inline-flex h-12 px-8 items-center border border-white/20 hover:bg-white/5 transition-colors"
            >
              <span className="text-sm tracking-wide">Réserver</span>
            </Link>
            <a
              href="tel:+33100000000"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              +33 1 23 45 67 89
            </a>
          </motion.div>
        </div>
      </div>

      {/* Overlay discret */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}; 