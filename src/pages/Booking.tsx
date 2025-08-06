import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../store/useBooking';
import { Extras } from '../components/booking/Extras';
import { Insurance } from '../components/booking/Insurance';
import { Summary } from '../components/booking/Summary';

const steps = [
  { id: 'extras', title: 'Options' },
  { id: 'insurance', title: 'Protection' },
  { id: 'summary', title: 'Récapitulatif' },
] as const;

export const Booking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<typeof steps[number]['id']>('extras');
  const { selectedVehicle, dateRange, pickupLocation } = useBooking();

  if (!selectedVehicle || !dateRange.startDate || !dateRange.endDate || !pickupLocation) {
    navigate('/flotte');
    return null;
  }

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  const handleNext = () => {
    const nextStep = steps[currentStepIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep.id);
    }
  };

  const handleBack = () => {
    const previousStep = steps[currentStepIndex - 1];
    if (previousStep) {
      setCurrentStep(previousStep.id);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = () => {
    // Ici, on simulerait l'envoi de la réservation à l'API
    console.log('Réservation confirmée');
  };

  return (
    <div className="py-24">
      <div className="container mx-auto">
        {/* Étapes */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex items-center"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStepIndex >= index
                      ? 'bg-drivly-accent text-white'
                      : 'bg-drivly-surface text-drivly-muted'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="ml-2">{step.title}</div>
                {index < steps.length - 1 && (
                  <div className="mx-4 w-16 h-px bg-drivly-line" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {currentStep === 'extras' && <Extras />}
                {currentStep === 'insurance' && <Insurance />}
                {currentStep === 'summary' && <Summary />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Summary />
              <div className="mt-8 space-y-4">
                <button
                  onClick={handleBack}
                  className="w-full btn btn-ghost"
                >
                  Retour
                </button>
                {currentStepIndex === steps.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="w-full btn btn-solid"
                  >
                    Confirmer la réservation
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full btn btn-solid"
                  >
                    Continuer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 