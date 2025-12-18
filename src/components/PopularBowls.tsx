import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import bowlChicken from '@/assets/bowl-chicken.jpg';
import bowlPaneer from '@/assets/bowl-paneer.jpg';
import bowlRajma from '@/assets/bowl-rajma.jpg';

const bowls = [
  {
    name: 'Chicken Curry Bowl',
    price: '₹219',
    image: bowlChicken,
    tag: 'Bestseller',
    tagColor: 'bg-primary text-primary-foreground',
  },
  {
    name: 'Paneer Masala Bowl',
    price: '₹189',
    image: bowlPaneer,
    tag: 'Veg',
    tagColor: 'bg-secondary text-secondary-foreground',
  },
  {
    name: 'Rajma Rice Bowl',
    price: '₹169',
    image: bowlRajma,
    tag: 'Value Pick',
    tagColor: 'bg-accent text-accent-foreground',
  },
];

const PopularBowls = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Fan Favorites
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Popular Bowls
            </h2>
          </div>
          <Link to="/menu">
            <Button variant="ghost" className="mt-4 md:mt-0 text-primary group">
              View Full Menu
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {bowls.map((bowl, index) => (
            <motion.div
              key={bowl.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={bowl.image}
                  alt={bowl.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${bowl.tagColor}`}
                >
                  {bowl.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">
                    {bowl.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    {bowl.price}
                  </span>
                </div>
                <Button
                  variant="cta"
                  size="sm"
                  className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Order
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBowls;
