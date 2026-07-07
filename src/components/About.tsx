import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Check, Quote } from 'lucide-react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'GitHub',
  'Responsive Web Design',
  'DSA',
];

export default function About() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <p className="text-blue-400 text-sm font-mono mb-4">// About Me</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Hi, I'm <span className="text-blue-400 font-semibold">Shiyam</span>.
              </p>

              <p className="text-white/60 leading-relaxed">
                I am a passionate web developer from India who enjoys building modern websites, 
                web applications, and creative digital experiences.
              </p>

              <div className="space-y-3">
                <p className="text-white/80 font-medium">I work mainly with:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass rounded-full px-4 py-1.5 text-sm text-white/80 flex items-center gap-2"
                    >
                      <Check size={14} className="text-blue-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/60 leading-relaxed">
                I continuously improve my skills every day and regularly update my projects 
                and portfolio with new ideas and technologies.
              </p>
            </div>

            {/* Right - Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-amber-500" />
              <Quote size={32} className="text-amber-400/30 mb-4" />

              <div className="space-y-4">
                {['Dream.', 'Code.', 'Learn.', 'Build.', 'Repeat.'].map((word, i) => (
                  <motion.p
                    key={word}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`text-2xl md:text-3xl font-heading font-bold ${
                      i % 2 === 0 ? 'gradient-text' : 'text-white/40'
                    }`}
                  >
                    {word}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  I am Shiyam, a developer. I know HTML, CSS, JavaScript, DSA, GitHub 
                  and I improve my knowledge daily. I will upgrade this site anytime.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
