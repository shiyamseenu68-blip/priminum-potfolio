import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@shiyamseenu68-blip',
    url: 'https://github.com/shiyamseenu68-blip/',
    icon: Github,
    color: '#ffffff',
    bgColor: 'rgba(255,255,255,0.05)',
    hoverBorder: 'rgba(255,255,255,0.3)',
  },
  {
    name: 'LinkedIn',
    handle: '@shiyam-s',
    url: 'http://www.linkedin.com/in/shiyam-s/',
    icon: Linkedin,
    color: '#0A66C2',
    bgColor: 'rgba(10,102,194,0.1)',
    hoverBorder: 'rgba(10,102,194,0.5)',
  },
  {
    name: 'Instagram',
    handle: '@the_invisible_paradox',
    url: 'https://www.instagram.com/the_invisible_paradox?igsh=dHV6dHNxdHlhdnF2',
    icon: Instagram,
    color: '#E4405F',
    bgColor: 'rgba(228,64,95,0.1)',
    hoverBorder: 'rgba(228,64,95,0.5)',
  },
];

export default function Socials() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="socials" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Connect</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-8 text-center group relative overflow-hidden"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.hoverBorder;
                  e.currentTarget.style.boxShadow = `0 0 30px ${social.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: social.bgColor }}
                >
                  <Icon size={32} style={{ color: social.color }} />
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {social.name}
                </h3>
                <p className="text-white/40 text-sm mb-4">{social.handle}</p>

                <div className="flex items-center justify-center gap-1 text-sm text-white/60 group-hover:text-white transition-colors">
                  <span>Visit Profile</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
