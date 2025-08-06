import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicles';

export const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = vehicles.find(v => v.slug === slug);

  if (!vehicle) {
    return <div>Véhicule non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-[32px] font-light text-[#111111] mb-2">
            {vehicle.brand} - {vehicle.model}
          </h1>
          <p className="text-[14px] text-[#666666]">
            {vehicle.description || 'Un véhicule d\'exception pour une expérience unique.'}
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {vehicle.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${vehicle.brand} ${vehicle.model} - Vue ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-[4px]"
            />
          ))}
        </div>

        {/* Informations */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-[24px] font-light text-[#111111] mb-6">
              Caractéristiques
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-[#666666] mb-1">Puissance</div>
                  <div className="text-[#111111]">{vehicle.power}</div>
                </div>
                <div>
                  <div className="text-[#666666] mb-1">CO2</div>
                  <div className="text-[#111111]">{vehicle.co2}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prix et réservation */}
          <div className="bg-[#F4F4F4] p-6 rounded-[4px]">
            <div className="mb-4">
              <div className="text-[#666666] text-sm mb-1">À partir de</div>
              <div className="text-[28px] font-light text-[#111111]">
                {vehicle.price}€
                <span className="text-[14px] text-[#666666] ml-1">
                  (htva)/{vehicle.pricePeriod}
                </span>
              </div>
            </div>
            <button className="w-full bg-[#111111] text-white py-3 rounded-[4px] hover:bg-black transition-colors">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 