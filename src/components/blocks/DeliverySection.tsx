import { motion } from 'framer-motion';

export const DeliverySection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src="/images/delivery-bg.jpg"
                alt="Vue aérienne"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu */}
            <div className="relative h-full flex flex-col justify-center p-12">
              <h2 className="text-4xl font-title mb-4">
                Nous livrons jusque <span className="bg-red-600 px-2">chez vous</span>.
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Nos abonnements vous permettent de "switcher" de voiture en fonction de vos besoins et envies, et donc
                d{"'"}optimiser vos dépenses et votre fiscalité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 