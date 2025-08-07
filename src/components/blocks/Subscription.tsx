import { motion } from 'framer-motion';
import { useState } from 'react';

type Plan = 'plus' | 'one';

interface SubscriptionProps {
  onPlanSelect: (plan: Plan) => void;
}

export const Subscription = ({ onPlanSelect }: SubscriptionProps) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('plus');

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan);
    onPlanSelect(plan);
  };

  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-title mb-16">
          Choisissez l{"'"}abonnement qui<br />vous convient
        </h1>

        {/* Sélecteur de plan */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 rounded-full p-1 flex">
            <button
              onClick={() => handlePlanChange('plus')}
              className={`flex-1 py-3 rounded-full text-center transition-all ${
                selectedPlan === 'plus' 
                  ? 'bg-white text-black' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Turismo Plus
            </button>
            <button
              onClick={() => handlePlanChange('one')}
              className={`flex-1 py-3 rounded-full text-center transition-all ${
                selectedPlan === 'one' 
                  ? 'bg-white text-black' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Turismo One
            </button>
          </div>
        </div>

        {/* Détails du plan */}
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-title mb-2">
                {selectedPlan === 'plus' ? "Turismo Plus" : "Turismo One"}
              </h2>
              <p className="text-white/60">
                {selectedPlan === 'plus' 
                  ? "3780€ htva (coût de la souscription annuel au service d'abonnement)"
                  : "7780€ htva (coût de la souscription annuel au service d'abonnement)"}
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              {`S'abonner à ${selectedPlan === 'plus' ? 'Plus' : 'One'}`}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Voitures */}
            <div>
              <div className="bg-white/5 rounded-lg p-6">
                <img 
                  src={selectedPlan === 'plus' 
                    ? "/images/vehicles/category-2.png"
                    : "/images/vehicles/category-5.png"} 
                  alt="Véhicules" 
                  className="w-full"
                />
              </div>
              <p className="mt-4 text-sm text-white/60">
                {selectedPlan === 'plus'
                  ? "Catégorie 2 - 3480€/mois • 2000km/mois inclus - 1.2€/km supp. (htva)"
                  : "Catégorie 5 - 9980€/mois • 2000km/mois inclus - 5€/km supp. (htva)"}
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                {selectedPlan === 'plus' 
                  ? "Accès aux locations de catégories de véhicules 1 et 2."
                  : "Accès à toutes les catégories"}
              </div>
              <div className="border-b border-white/10 pb-4">
                {selectedPlan === 'plus'
                  ? "Changez de véhicule jusqu'à 4 fois par an."
                  : "Switch illimité, Changez de véhicule autant de fois que vous le souhaitez."}
              </div>
              <div className="border-b border-white/10 pb-4">
                Flexibilité, possibilité de mettre en pause votre consommation et de ne plus avoir à payer
              </div>
              <div className="border-b border-white/10 pb-4">
                Abonnement partageable, jusqu{"'"}à deux conducteurs réguliers peuvent en bénéficier
              </div>
              
              {/* Service de livraison */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
                  </svg>
                  <span className="font-medium">Service de livraison</span>
                </div>
                <p className="text-white/60 text-sm">
                  Soyez livré où vous le voulez et quand vous le voulez,
                  appelez nous pour connaître les dates de livraison.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Disponible au Luxembourg, Belgique et en France
                </p>
              </div>
            </div>
          </div>

          {/* Bouton d{"'"}appel */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" fill="currentColor"/>
              </svg>
              Appeler un conseiller
            </button>
            <p className="text-white/60 text-sm mt-2">
              Obtenez de l{"'"}aide en contactant par téléphone un expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 