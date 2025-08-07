import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Une expérience de location exceptionnelle. Le service est impeccable et les véhicules sont en parfait état.",
    author: "Thomas D.",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
  },
  {
    text: "La qualité des véhicules et le professionnalisme de l'équipe sont remarquables. Je recommande vivement.",
    author: "Sophie M.",
    role: "Architecte",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070"
  },
  {
    text: "Le meilleur service de location de voitures de luxe que j'ai pu expérimenter. Tout est parfait.",
    author: "Pierre L.",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec nous.
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-surface-light/50 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 