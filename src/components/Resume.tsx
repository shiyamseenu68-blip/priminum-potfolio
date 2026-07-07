import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Download, GraduationCap, Code2, FolderGit2, Award, FileText } from 'lucide-react';

const resumeSections = [
  {
    title: 'Education',
    icon: GraduationCap,
    color: '#3B82F6',
    items: ['Self-taught Developer', 'Continuous Learning'],
  },
  {
    title: 'Technical Skills',
    icon: Code2,
    color: '#10B981',
    items: ['HTML, CSS, JavaScript', 'Git & GitHub', 'Responsive Design', 'DSA'],
  },
  {
    title: 'Projects',
    icon: FolderGit2,
    color: '#F59E0B',
    items: ['20+ Personal Projects', 'Websites, Games & Tools', 'Code Editors & Compilers'],
  },
  {
    title: 'Certifications',
    icon: Award,
    color: '#8B5CF6',
    items: ['More coming soon...'],
  },
];

export default function Resume() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="resume" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Resume</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            My <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {resumeSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${section.color}15` }}
                  >
                    <Icon size={24} style={{ color: section.color }} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10">
              <FileText size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">Summary</h3>
          </div>
          <p className="text-white/60 leading-relaxed">
            Passionate web developer from India with expertise in HTML, CSS, and JavaScript. 
            Experienced in building responsive websites, interactive games, and code editors. 
            Strong problem-solving skills with daily practice in DSA. Continuously learning 
            and expanding knowledge in frontend development and emerging technologies.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="glass-strong rounded-full px-8 py-4 text-white flex items-center gap-3 mx-auto hover:neon-blue transition-all group">
            <Download size={20} />
            Download Resume
            <span className="text-white/40 text-sm">(Coming Soon)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
