import { Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="text-2xl font-heading font-bold gradient-text hover:opacity-80 transition-opacity">
            SHIYAM
          </button>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-white/40 text-sm">
              Made with <Heart size={14} className="inline text-red-400 mx-1" /> by Shiyam
            </p>
            <p className="text-white/30 text-xs mt-1">
              Always Learning. Always Building.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © 2026 Shiyam. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/5">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
