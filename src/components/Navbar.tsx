import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Kitchen', href: '#kitchen' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              Gully
            </span>
            <span className="text-2xl md:text-3xl font-bold text-secondary">
              Bowls
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="cta" size="lg" className="gap-1">
                  Order Now
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem asChild>
                  <a href="https://www.swiggy.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <span className="w-5 h-5 rounded bg-brand-orange text-white text-xs font-bold flex items-center justify-center">S</span>
                    Order on Swiggy
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://www.zomato.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <span className="w-5 h-5 rounded bg-red-500 text-white text-xs font-bold flex items-center justify-center">Z</span>
                    Order on Zomato
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <a href="https://www.swiggy.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg" className="w-full gap-2">
                    <span className="w-5 h-5 rounded bg-white/20 text-white text-xs font-bold flex items-center justify-center">S</span>
                    Order on Swiggy
                  </Button>
                </a>
                <a href="https://www.zomato.com/restaurants/gully-bowls" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaGreen" size="lg" className="w-full gap-2">
                    <span className="w-5 h-5 rounded bg-white/20 text-white text-xs font-bold flex items-center justify-center">Z</span>
                    Order on Zomato
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
