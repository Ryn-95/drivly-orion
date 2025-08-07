import { useBooking } from '../store/useBooking';
import { useNavigate } from 'react-router-dom';
import { Summary } from '../components/booking/Summary';

export const Booking = () => {
  const navigate = useNavigate();
  const { dateRange, selectedVehicle } = useBooking();

  // Rediriger si les informations nécessaires ne sont pas présentes
  if (!dateRange?.from || !dateRange?.to || !selectedVehicle) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <h1 className="text-[28px] font-light text-[#111111] mb-6">
              Réservation
            </h1>
            {/* Ajoutez ici les étapes du formulaire de réservation */}
          </div>

          {/* Résumé */}
          <div>
            <Summary selectedVehicle={selectedVehicle} />
          </div>
        </div>
      </div>
    </div>
  );
}; 