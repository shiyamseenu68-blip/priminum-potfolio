import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ExternalLink, Download, Mail } from 'lucide-react';

const titles = [
  'Web Developer',
  'JavaScript Developer',
  'Frontend Developer',
  'Creative Programmer',
  'AI Enthusiast',
  'Problem Solver',
  'Future Builder',
  'Always Learning',
  'DSA Learner',
  'GitHub Explorer',
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const title = titles[currentTitle];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(title.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full blur opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 glow-border">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Shiyam"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Crown icon */}
            <div className="absolute -top-2 -right-2 text-amber-400 text-2xl animate-bounce">
              👑
            </div>
          </div>
        </motion.div>

        {/* Hello text */}
        <motion.p
          variants={itemVariants}
          className="text-blue-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold gradient-text mb-6 leading-none"
        >
          SHIYAM
        </motion.h1>

        {/* Animated Title */}
        <motion.div variants={itemVariants} className="mb-10">
          <span
            ref={titleRef}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light"
          >
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-blue-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group glass-strong rounded-full px-8 py-3.5 text-white flex items-center gap-2 hover:neon-blue transition-all duration-300"
          >
            <ExternalLink size={18} />
            Explore My Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#resume"
            className="group glass rounded-full px-8 py-3.5 text-white flex items-center gap-2 hover:border-amber-500/50 transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="group glass rounded-full px-8 py-3.5 text-white flex items-center gap-2 hover:border-blue-500/50 transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {[
            { number: '20+', label: 'Projects' },
            { number: '12+', label: 'Websites' },
            { number: '3+', label: 'Games' },
            { number: '∞', label: 'Learning' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-6 py-4 text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={24} className="text-white/40 scroll-indicator" />
      </motion.div>
    </section>
  );
}
