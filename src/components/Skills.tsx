import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Smartphone, 
  GitBranch, 
  Github, 
  Brain, 
  Monitor,
  Layout,
  Lightbulb,
  Sparkles,
  PenTool
} from 'lucide-react';

const skills = [
  { name: 'HTML', icon: FileCode, color: '#E34F26' },
  { name: 'CSS', icon: Palette, color: '#1572B6' },
  { name: 'JavaScript', icon: Code2, color: '#F7DF1E' },
  { name: 'Responsive Design', icon: Smartphone, color: '#3B82F6' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'GitHub', icon: Github, color: '#ffffff' },
  { name: 'DSA', icon: Brain, color: '#F59E0B' },
  { name: 'VS Code', icon: Monitor, color: '#007ACC' },
  { name: 'Frontend Development', icon: Layout, color: '#10B981' },
  { name: 'Problem Solving', icon: Lightbulb, color: '#8B5CF6' },
  { name: 'Animations', icon: Sparkles, color: '#EC4899' },
  { name: 'UI Design', icon: PenTool, color: '#06B6D4' },
];

export default function Skills() {
  const [ref, isInView] = useInView(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Skills</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-default"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${skill.color}15`,
                    boxShadow: `0 0 20px ${skill.color}20`
                  }}
                >
                  <Icon size={28} style={{ color: skill.color }} />
                </div>
                <span className="text-sm md:text-base text-white/80 font-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
