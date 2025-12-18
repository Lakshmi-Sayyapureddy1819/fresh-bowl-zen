import { motion } from 'framer-motion';
import momentFriends from '@/assets/moment-friends.jpg';
import momentSolo from '@/assets/moment-solo.jpg';
import momentNight from '@/assets/moment-night.jpg';

const moments = [
  {
    image: momentFriends,
    title: 'Lunch Breaks',
    description: 'Quick, fulfilling meals with friends',
  },
  {
    image: momentSolo,
    title: 'Solo Sessions',
    description: 'Your peaceful meal, your way',
  },
  {
    image: momentNight,
    title: 'Late Nights',
    description: 'Cravings satisfied, any hour',
  },
];

const EverydayMoments = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            For Every Craving
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Made for Your <span className="text-primary">Everyday</span> Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lunch breaks. Late nights. Chill meals. We're here for all of it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {moment.title}
                </h3>
                <p className="text-white/70 text-sm">{moment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverydayMoments;
