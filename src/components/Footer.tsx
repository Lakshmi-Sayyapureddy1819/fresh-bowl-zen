import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">Gully</span>
              <span className="text-2xl font-bold text-secondary">Bowls</span>
            </div>
            <p className="text-primary-foreground/60 max-w-sm mb-6">
              Fresh Indian bowls made your way. Fast, flavorful, and always fresh.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'Our Kitchen', 'How It Works', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Order From</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.swiggy.com/restaurants/gully-bowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-brand-orange transition-colors"
                >
                  Swiggy
                </a>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/restaurants/gully-bowls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-red-400 transition-colors"
                >
                  Zomato
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  Call to Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 Gully Bowls. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Made with ❤️ for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
