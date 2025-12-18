import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-kitchen.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh Indian bowl meals being prepared"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-brand-green/20 text-brand-green-light rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-brand-green/30">
              Fresh • Fast • Fulfilling
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-white">Fresh Bowls.</span>
            <br />
            <span className="text-brand-orange">Fast Lines.</span>
            <br />
            <span className="text-white">Full Stomach.</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-xl md:text-2xl text-white/90 font-medium mb-2 font-display italic">
            Pet-bhar khana. Zero drama.
          </p>

          <p className="animate-fade-up animation-delay-300 text-base md:text-lg text-white/70 mb-8 max-w-lg">
            Customize your perfect Indian bowl with fresh ingredients, rich gravies, and flavors you love. Ready in minutes.
          </p>

          <div className="animate-fade-up animation-delay-400 flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="xl" className="group">
              Order Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group border-white/30 text-white hover:bg-white/10">
              <Play size={18} className="mr-1" />
              View Menu
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-500 flex gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: '10K+', label: 'Bowls Served' },
              { value: '4.8', label: 'Rating' },
              { value: '15 min', label: 'Avg. Wait' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-brand-orange">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
