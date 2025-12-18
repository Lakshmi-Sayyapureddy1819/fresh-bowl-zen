import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Salad, Flame, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Salad,
    title: 'Choose Base',
    description: 'Rice, quinoa, or mixed grains',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Flame,
    title: 'Pick Gravy',
    description: 'Chicken, paneer, or veg curry',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Sparkles,
    title: 'Add Extras',
    description: 'Extra gravy, egg, or toppings',
    color: 'bg-secondary/10 text-secondary',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Simple & Quick
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center mb-6`}
                >
                  <step.icon size={40} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
