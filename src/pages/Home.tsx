import { Subscription } from '../components/blocks/Subscription';
import { VehicleCategories } from '../components/blocks/VehicleCategories';
import { DeliverySection } from '../components/blocks/DeliverySection';
import { Services } from '../components/blocks/Services';
import { Categories } from '../components/blocks/Categories';
import { Hero } from '../components/blocks/Hero';

export const Home = () => {
  const handlePlanSelect = (plan: 'plus' | 'one') => {
    console.log('Plan sélectionné:', plan);
  };

  return (
    <main className="bg-black text-white">
      <Hero />
      <Subscription onPlanSelect={handlePlanSelect} />
      <Categories />
      <DeliverySection />
      <Services />
      <VehicleCategories />
    </main>
  );
}; 
      <Subscription onPlanSelect={handlePlanSelect} />
      <Categories />
      <DeliverySection />
      <Services />
      <VehicleCategories />
    </main>
  );
};       <Subscription onPlanSelect={handlePlanSelect} />
      <Categories />
      <DeliverySection />
      <Services />
      <VehicleCategories />
    </main>
  );
};       <Subscription onPlanSelect={handlePlanSelect} />
      <Categories />
      <DeliverySection />
      <Services />
      <VehicleCategories />
    </main>
  );

