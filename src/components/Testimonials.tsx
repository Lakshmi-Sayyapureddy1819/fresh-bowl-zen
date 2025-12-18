import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Office Professional',
    rating: 5,
    comment: 'Best lunch spot near my office! The chicken bowl is absolutely divine and the portion size is perfect.',
    platform: 'Swiggy',
  },
  {
    name: 'Rahul Verma',
    role: 'College Student',
    rating: 5,
    comment: 'Affordable and filling. The rajma rice reminds me of home. Been ordering twice a week!',
    platform: 'Zomato',
  },
  {
    name: 'Ananya Patel',
    role: 'Fitness Enthusiast',
    rating: 5,
    comment: 'Love that I can customize my bowl. High protein options with extra veggies are perfect for my diet.',
    platform: 'Swiggy',
  },
  {
    name: 'Vikram Singh',
    role: 'Software Developer',
    rating: 5,
    comment: 'Late night coding sessions are incomplete without Gully Bowls. Quick delivery, hot food, always fresh!',
    platform: 'Zomato',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Happy Customers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our <span className="text-primary">Fans</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied bowl lovers across the city
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  testimonial.platform === 'Swiggy' 
                    ? 'bg-brand-orange/20 text-brand-orange' 
                    : 'bg-red-500/20 text-red-500'
                }`}>
                  {testimonial.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
