import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  FileCode, 
  Palette, 
  Code2, 
  GitBranch, 
  Globe, 
  Gamepad2, 
  Terminal, 
  Brain,
  Star
} from 'lucide-react';

const milestones = [
  { title: 'Started Learning HTML', icon: FileCode, color: '#E34F26' },
  { title: 'Learned CSS', icon: Palette, color: '#1572B6' },
  { title: 'JavaScript', icon: Code2, color: '#F7DF1E' },
  { title: 'Git & GitHub', icon: GitBranch, color: '#F05032' },
  { title: 'Built Portfolio', icon: Globe, color: '#3B82F6' },
  { title: 'Created Games', icon: Gamepad2, color: '#F59E0B' },
  { title: 'Created Code Editors', icon: Terminal, color: '#10B981' },
  { title: 'Building AI Projects', icon: Brain, color: '#8B5CF6' },
  { title: 'Future: Full Stack Developer', icon: Star, color: '#FBBF24', isFuture: true },
];

export default function Timeline() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="timeline" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Journey</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            My <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-amber-500 to-blue-500/20" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            const isFuture = milestone.isFuture;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`glass-card rounded-2xl p-5 flex items-center gap-4 ${
                    isFuture ? 'border-amber-500/30' : ''
                  }`}>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isFuture ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        backgroundColor: `${milestone.color}15`,
                      }}
                    >
                      <Icon size={20} style={{ color: milestone.color }} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isFuture ? 'text-amber-400' : 'text-white'}`}>
                        {milestone.title}
                      </h3>
                      {isFuture && (
                        <span className="text-xs text-amber-400/60">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      isFuture 
                        ? 'bg-amber-500 border-amber-400 animate-pulse' 
                        : 'bg-black border-blue-400'
                    }`}
                  />
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
