import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Plus, Flame, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import bowlChicken from '@/assets/bowl-chicken.jpg';
import bowlPaneer from '@/assets/bowl-paneer.jpg';
import bowlRajma from '@/assets/bowl-rajma.jpg';

const vegBowls = [
  { name: 'Paneer Masala Bowl', price: 189, image: bowlPaneer, tag: 'Bestseller', isVeg: true },
  { name: 'Rajma Rice Bowl', price: 169, image: bowlRajma, tag: 'Value Pick', isVeg: true },
  { name: 'Dal Makhani Bowl', price: 179, image: bowlPaneer, tag: null, isVeg: true },
  { name: 'Mixed Veg Bowl', price: 159, image: bowlRajma, tag: null, isVeg: true },
  { name: 'Palak Paneer Bowl', price: 199, image: bowlPaneer, tag: 'Healthy', isVeg: true },
  { name: 'Chole Rice Bowl', price: 169, image: bowlRajma, tag: null, isVeg: true },
];

const nonVegBowls = [
  { name: 'Chicken Curry Bowl', price: 219, image: bowlChicken, tag: 'Bestseller', isVeg: false },
  { name: 'Butter Chicken Bowl', price: 239, image: bowlChicken, tag: 'Premium', isVeg: false },
  { name: 'Egg Curry Bowl', price: 179, image: bowlChicken, tag: 'Value Pick', isVeg: false },
  { name: 'Keema Rice Bowl', price: 229, image: bowlChicken, tag: 'Spicy', isVeg: false },
  { name: 'Chicken Tikka Bowl', price: 249, image: bowlChicken, tag: 'Premium', isVeg: false },
];

const addons = [
  { name: 'Extra Gravy', price: 30 },
  { name: 'Extra Rice', price: 40 },
  { name: 'Boiled Egg', price: 20 },
  { name: 'Raita', price: 25 },
  { name: 'Papad (2 pcs)', price: 15 },
  { name: 'Salad', price: 30 },
];

const BowlCard = ({ bowl, index }: { bowl: typeof vegBowls[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-soft transition-all duration-300"
  >
    <div className="relative aspect-square overflow-hidden">
      <img
        src={bowl.image}
        alt={bowl.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        {bowl.isVeg ? (
          <span className="w-6 h-6 bg-secondary flex items-center justify-center rounded">
            <Leaf className="w-4 h-4 text-white" />
          </span>
        ) : (
          <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded">
            <Flame className="w-4 h-4 text-white" />
          </span>
        )}
      </div>
      {bowl.tag && (
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
          {bowl.tag}
        </span>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{bowl.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary">₹{bowl.price}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="cta" size="sm" className="gap-1">
              Order
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem asChild>
              <a href="https://www.swiggy.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <span className="w-4 h-4 rounded bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center mr-2">S</span>
                Swiggy
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.zomato.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <span className="w-4 h-4 rounded bg-red-500 text-white text-[10px] font-bold flex items-center justify-center mr-2">Z</span>
                Zomato
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </motion.div>
);

const Menu = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fresh ingredients, bold flavors, and generous portions. Pick your perfect bowl.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Veg Bowls */}
      <section id="veg-bowls" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 bg-secondary flex items-center justify-center rounded">
              <Leaf className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Veg Bowls</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vegBowls.map((bowl, index) => (
              <BowlCard key={bowl.name} bowl={bowl} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Veg Bowls */}
      <section id="non-veg-bowls" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 bg-red-500 flex items-center justify-center rounded">
              <Flame className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Non-Veg Bowls</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonVegBowls.map((bowl, index) => (
              <BowlCard key={bowl.name} bowl={bowl} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section id="addons" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 bg-primary flex items-center justify-center rounded">
              <Plus className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Add-ons</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
              >
                <p className="font-medium mb-1">{addon.name}</p>
                <p className="text-primary font-bold">+₹{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Get your favorite bowl delivered hot and fresh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.swiggy.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                  <span className="w-5 h-5 rounded bg-brand-orange text-white text-xs font-bold flex items-center justify-center">S</span>
                  Order on Swiggy
                </Button>
              </a>
              <a href="https://www.zomato.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-white text-white hover:bg-white/10">
                  <span className="w-5 h-5 rounded bg-red-500 text-white text-xs font-bold flex items-center justify-center">Z</span>
                  Order on Zomato
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;
