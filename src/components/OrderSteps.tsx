import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MousePointer, Sliders, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const steps = [
  {
    icon: MousePointer,
    step: '1',
    title: 'Choose Bowl',
    description: 'Pick your favorite from our menu',
  },
  {
    icon: Sliders,
    step: '2',
    title: 'Customize',
    description: 'Add extras and make it yours',
  },
  {
    icon: CreditCard,
    step: '3',
    title: 'Pay & Chill',
    description: "We'll have it ready in minutes",
  },
];

const OrderSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Easy Ordering
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
            Order in 3 Easy Steps
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center"
            >
              <div className="flex flex-col items-center text-center px-6 py-4">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center">
                    <step.icon className="text-primary" size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[150px]">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-primary/30 mx-4" size={32} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="cta" size="xl" className="group">
            Order Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSteps;
