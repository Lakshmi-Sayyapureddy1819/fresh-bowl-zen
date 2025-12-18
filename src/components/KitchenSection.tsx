import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import kitchenImage from '@/assets/kitchen-clean.jpg';

const features = [
  'Fresh ingredients daily',
  'Clean counters always',
  'Trained professional staff',
  'Zero shortcuts taken',
];

const KitchenSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="kitchen"
      ref={containerRef}
      className="py-20 md:py-32 bg-foreground text-primary-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Trust & Transparency
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
              This Is Our Kitchen
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-4 font-display italic">
              Clean. Organized. No shortcuts.
            </p>
            <p className="text-primary-foreground/60 mb-8">
              What you see is what you eat. We believe in complete transparency. Our kitchen is open for you to see how we prepare every single bowl with care and hygiene.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-secondary flex-shrink-0" size={22} />
                  <span className="text-primary-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div style={{ y }} className="relative rounded-2xl overflow-hidden">
              <img
                src={kitchenImage}
                alt="Clean professional kitchen"
                className="w-full h-auto rounded-2xl"
              />
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-lifted"
            >
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-90">Hygiene Score</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenSection;
