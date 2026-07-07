import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  Rocket, 
  Monitor, 
  Palette, 
  Code2, 
  Brain, 
  Calendar, 
  Lightbulb, 
  TrendingUp 
} from 'lucide-react';
import CountUp from 'react-countup';

const features = [
  { name: 'Personal Projects', value: 20, suffix: '+', icon: Rocket, color: '#3B82F6' },
  { name: 'Responsive Websites', value: 12, suffix: '+', icon: Monitor, color: '#10B981' },
  { name: 'Modern UI', value: 100, suffix: '%', icon: Palette, color: '#EC4899' },
  { name: 'JS Applications', value: 8, suffix: '+', icon: Code2, color: '#F59E0B' },
  { name: 'AI Learning', value: 100, suffix: '%', icon: Brain, color: '#8B5CF6' },
  { name: 'Daily Practice', value: 365, suffix: '+', icon: Calendar, color: '#06B6D4' },
  { name: 'Creative Thinking', value: 100, suffix: '%', icon: Lightbulb, color: '#F97316' },
  { name: 'Improvement', value: 100, suffix: '%', icon: TrendingUp, color: '#14B8A6' },
];

export default function Features() {
  const [ref, isInView] = useInView(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Features</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    boxShadow: `0 0 20px ${feature.color}20`
                  }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>

                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  {isInView ? (
                    <CountUp
                      end={feature.value}
                      duration={2.5}
                      suffix={feature.suffix}
                    />
                  ) : (
                    `0${feature.suffix}`
                  )}
                </div>

                <span className="text-sm text-white/50">{feature.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
