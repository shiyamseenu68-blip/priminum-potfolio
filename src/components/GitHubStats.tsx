import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Star, GitFork, GitCommit, Code2 } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Repositories', value: 15, icon: GitFork, color: '#3B82F6' },
  { label: 'Stars', value: 25, icon: Star, color: '#F59E0B' },
  { label: 'Contributions', value: 500, suffix: '+', icon: GitCommit, color: '#10B981' },
  { label: 'Languages', value: 5, icon: Code2, color: '#EC4899' },
];

const languages = [
  { name: 'JavaScript', percent: 60, color: '#F7DF1E' },
  { name: 'HTML', percent: 20, color: '#E34F26' },
  { name: 'CSS', percent: 15, color: '#1572B6' },
  { name: 'Other', percent: 5, color: '#8B5CF6' },
];

export default function GitHubStats() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="github" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// GitHub</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">
                    {isInView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix || ''}
                      />
                    ) : (
                      `0${stat.suffix || ''}`
                    )}
                  </div>
                  <span className="text-sm text-white/50">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-xl font-heading font-bold text-white mb-6">Top Languages</h3>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">{lang.name}</span>
                    <span className="text-white/50">{lang.percent}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="mt-8">
              <h4 className="text-sm text-white/60 mb-3">Contribution Activity</h4>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{
                      backgroundColor: i % 7 === 0 ? '#10B981' : i % 5 === 0 ? '#059669' : i % 3 === 0 ? '#047857' : '#064E3B',
                      opacity: Math.random() * 0.5 + 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shiyamseenu68-blip/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-strong rounded-full px-8 py-4 text-white hover:neon-blue transition-all group"
          >
            <Github size={24} />
            View My GitHub Profile
            <span className="text-white/40 text-sm">@shiyamseenu68-blip</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
