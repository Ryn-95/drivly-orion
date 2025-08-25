import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de l'envoi
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', 'Lun-Ven 9h-18h'],
      link: 'tel:+33123456789'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['contact@drivly-orion.fr', 'Réponse sous 24h'],
      link: 'mailto:contact@drivly-orion.fr'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adresse',
      details: ['123 Avenue des Champs-Élysées', '75008 Paris, France'],
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extralight text-black mb-6 tracking-wide">
            Contactez-nous
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet d'abonnement automobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-light text-black mb-8">
              Nos coordonnées
            </h2>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="block group"
                >
                  <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-600 font-light">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-gray-50 rounded-2xl"
            >
              <h3 className="font-medium text-black mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            {!isSubmitted ? (
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-light text-black mb-8">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="Votre prénom"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="Votre nom"
                      />
                    </motion.div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="votre@email.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="01 23 45 67 89"
                      />
                    </motion.div>
                  </div>

                  {/* Sujet */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="abonnement">Nouvel abonnement</option>
                      <option value="modification">Modification d'abonnement</option>
                      <option value="support">Support technique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </motion.div>

                  {/* Bouton d'envoi */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="pt-4"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Envoyer le message
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-100 rounded-3xl p-12 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-black mb-4">
                  Message envoyé !
                </h3>
                <p className="text-gray-600 font-light mb-8">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ y: -2 }}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Envoyer un autre message
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* FAQ rapide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl font-light text-black mb-8">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-medium text-black mb-3">Durée d'abonnement</h3>
              <p className="text-sm text-gray-600 font-light">
                Nos abonnements sont flexibles, de 6 à 60 mois selon vos besoins.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-medium text-black mb-3">Livraison</h3>
              <p className="text-sm text-gray-600 font-light">
                Livraison gratuite à domicile ou en entreprise sous 48h.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-medium text-black mb-3">Assurance</h3>
              <p className="text-sm text-gray-600 font-light">
                Assurance tous risques incluse dans votre abonnement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
