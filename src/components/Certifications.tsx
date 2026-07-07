import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Clock } from 'lucide-react';

export default function Certifications() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Certifications</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
            <Award size={40} className="text-amber-400" />
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Certifications Coming Soon
          </h3>

          <p className="text-white/60 max-w-lg mx-auto mb-8">
            I am continuously learning and working towards earning industry-recognized 
            certifications. Check back soon for updates on my achievements.
          </p>

          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Clock size={18} />
            <span className="text-sm">More certifications coming soon...</span>
          </div>

          <p className="text-white/40 text-sm mt-6 italic">
            Contact Shiyam for current certification details
          </p>
        </motion.div>
      </div>
    </section>
  );
}
