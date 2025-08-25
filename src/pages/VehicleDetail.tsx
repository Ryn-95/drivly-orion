import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { motion, AnimatePresence } from 'framer-motion';

// Données temporaires pour les avis
const REVIEWS = [
  {
    id: 1,
    author: "Jean D.",
    rating: 5,
    date: "15 Mars 2024",
    content: "Une expérience de location exceptionnelle. Le véhicule était impeccable et le service client irréprochable.",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: 2,
    author: "Marie L.",
    rating: 4,
    date: "10 Mars 2024",
    content: "Très satisfaite de la qualité du véhicule. Le processus de réservation était simple et rapide.",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    id: 3,
    author: "Pierre M.",
    rating: 5,
    date: "5 Mars 2024",
    content: "Une voiture magnifique et des prestations haut de gamme. Je recommande vivement !",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle;
}

const BookingModal = ({ isOpen, onClose, vehicle }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState(1);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              Réserver {vehicle.brand} {vehicle.model}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Progress bar */}
          <div className="mt-6 relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-black rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Dates</span>
              <span className="text-sm text-gray-600">Options</span>
              <span className="text-sm text-gray-600">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de début
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée (mois)
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                >
                  {[1, 3, 6, 12, 24].map((months) => (
                    <option key={months} value={months}>
                      {months} {months === 1 ? 'mois' : 'mois'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Options incluses</h3>
                  {vehicle.included?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Options supplémentaires</h3>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-gray-700">Protection tous risques (+99€/mois)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-gray-700">Kilométrage illimité (+149€/mois)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-gray-700">Service conciergerie (+79€/mois)</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Récapitulatif de votre commande</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Location {duration} mois</span>
                    <span>{vehicle.price * duration}€</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Options supplémentaires</span>
                    <span>+327€</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Dépôt de garantie</span>
                    <span>{vehicle.price * 2}€</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between font-medium text-gray-900">
                      <span>Total mensuel</span>
                      <span>{vehicle.price + 327}€/mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Retour
            </button>
          )}
          <button
            onClick={() => step < 3 ? setStep(step + 1) : onClose()}
            className="ml-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
          >
            {step === 3 ? 'Confirmer la réservation' : 'Continuer'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = vehicles.find(v => v.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Effet de parallaxe pour la galerie
  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        galleryRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!vehicle) return null;

  return (
    <div className="min-h-screen bg-black pt-24">
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            vehicle={vehicle}
          />
        )}

        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-full flex items-center justify-center p-8">
              <div className="w-full max-w-6xl">
                <motion.img
                  key={selectedImage}
                  src={vehicle.images[selectedImage]}
                  alt=""
                  className="w-full h-[80vh] object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="mt-8 flex justify-center gap-4">
                  {vehicle.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                        index === selectedImage ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <motion.img
          src={vehicle.images[selectedImage]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Navigation des images */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {vehicle.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === selectedImage ? 'border-white' : 'border-white/30'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations principales */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {vehicle.brand} {vehicle.model}
              </h1>
              <div className="flex flex-wrap gap-3">
                {vehicle.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Spécifications */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-8">Caractéristiques techniques</h2>
                
                {/* Performance */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">Puissance</div>
                        <div className="text-white text-xl font-medium">{vehicle.power}</div>
                      </div>
                    </div>
                    <div className="text-white/40 text-sm">
                      Moteur {vehicle.specifications?.engine || "Hybride rechargeable"}
                    </div>
                  </div>

                  {vehicle.specifications?.acceleration && (
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white/50 text-sm">0-100 km/h</div>
                          <div className="text-white text-xl font-medium">{vehicle.specifications.acceleration}</div>
                        </div>
                      </div>
                      <div className="text-white/40 text-sm">
                        Mode Sport activé
                      </div>
                    </div>
                  )}

                  {vehicle.specifications?.topSpeed && (
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white/50 text-sm">Vitesse max</div>
                          <div className="text-white text-xl font-medium">{vehicle.specifications.topSpeed}</div>
                        </div>
                      </div>
                      <div className="text-white/40 text-sm">
                        Sur circuit uniquement
                      </div>
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">Couple max</div>
                        <div className="text-white text-xl font-medium">{vehicle.specifications?.torque || "700 Nm"}</div>
                      </div>
                    </div>
                    <div className="text-white/40 text-sm">
                      Disponible dès 2000 tr/min
                    </div>
                  </div>
                </div>
              </div>

              {/* Consommation et émissions */}
              <div>
                <h3 className="text-2xl font-medium text-white mb-6">Consommation et émissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vehicle.specifications?.consumption && (
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                      <div className="text-white/50 text-sm mb-2">Cycle mixte WLTP</div>
                      <div className="text-white text-2xl font-medium mb-2">{vehicle.specifications.consumption}</div>
                      <div className="flex items-center gap-2 text-white/40 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Selon conditions de conduite
                      </div>
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Émissions CO2</div>
                    <div className="text-white text-2xl font-medium mb-2">{vehicle.co2}</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Norme Euro 6d
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Autonomie électrique</div>
                    <div className="text-white text-2xl font-medium mb-2">{vehicle.specifications?.electricRange || "50 km"}</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      En cycle urbain
                    </div>
                  </div>
                </div>
              </div>

              {/* Transmission et châssis */}
              <div>
                <h3 className="text-2xl font-medium text-white mb-6">Transmission et châssis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Transmission</div>
                    <div className="text-white text-lg font-medium mb-2">{vehicle.specifications?.transmission || "Automatique 8 rapports"}</div>
                    <div className="text-white/40 text-sm">Avec palettes au volant</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Mode de conduite</div>
                    <div className="text-white text-lg font-medium mb-2">4 modes disponibles</div>
                    <div className="text-white/40 text-sm">Eco, Confort, Sport, Sport+</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Suspension</div>
                    <div className="text-white text-lg font-medium mb-2">Adaptative</div>
                    <div className="text-white/40 text-sm">Avec contrôle électronique</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white/50 text-sm mb-2">Freinage</div>
                    <div className="text-white text-lg font-medium mb-2">Disques ventilés</div>
                    <div className="text-white/40 text-sm">Avec étriers fixes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Description</h2>
              <p className="text-white/70 leading-relaxed">
                {vehicle.description || `Découvrez l'élégance et la performance incarnées dans ce ${vehicle.brand} ${vehicle.model}. 
                Un véhicule qui allie parfaitement luxe, confort et technologie de pointe.`}
              </p>
            </div>

            {/* Équipements */}
            {vehicle.features && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Équipements</h2>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.features.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/70">
                      <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services inclus */}
            {vehicle.included && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Services inclus</h2>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/70">
                      <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>

          {/* Panneau de réservation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 rounded-2xl bg-white/5 backdrop-blur-lg p-6 space-y-6">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="text-sm text-white/50">À partir de</div>
                <div className="text-4xl font-bold text-white mt-1">{vehicle.price}€</div>
                <div className="text-sm text-white/50 mt-1">par {vehicle.pricePeriod}</div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-4 bg-white rounded-xl text-black font-semibold hover:bg-white/90 transition-colors"
                >
                  Réserver maintenant
                </button>
                <button className="w-full py-4 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/20 transition-colors">
                  Demander plus d'informations
                </button>
              </div>

              {/* Conditions */}
              {vehicle.conditions && (
                <div className="pt-6 border-t border-white/10 space-y-3">
                  {vehicle.conditions.map((condition, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/70">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Annulation gratuite jusqu'à 24h avant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail; 