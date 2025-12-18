import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PopularBowls from '@/components/PopularBowls';
import KitchenSection from '@/components/KitchenSection';
import OrderSteps from '@/components/OrderSteps';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PopularBowls />
      <KitchenSection />
      <OrderSteps />
      <Footer />
    </main>
  );
};

export default Index;
