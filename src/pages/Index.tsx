import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PopularBowls from '@/components/PopularBowls';
import KitchenSection from '@/components/KitchenSection';
import EverydayMoments from '@/components/EverydayMoments';
import Testimonials from '@/components/Testimonials';
import OrderSteps from '@/components/OrderSteps';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PopularBowls />
      <KitchenSection />
      <EverydayMoments />
      <Testimonials />
      <OrderSteps />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
