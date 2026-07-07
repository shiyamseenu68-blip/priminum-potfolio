import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, User, MapPin, Send, Copy, Check } from 'lucide-react';

const contactInfo = [
  { label: 'Name', value: 'Shiyam', icon: User },
  { label: 'Email', value: 'shiyamdev@gmail.com', icon: Mail, copyable: true },
  { label: 'Alt Email', value: 'shiyamseenu@gmail.com', icon: Mail, copyable: true },
  { label: 'Phone', value: '+91 8668098302', icon: Phone, copyable: true },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check size={14} className="text-green-400" />
      ) : (
        <Copy size={14} className="text-white/40" />
      )}
    </button>
  );
}

export default function Contact() {
  const [ref, isInView] = useInView(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-mono mb-4">// Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white/40 uppercase tracking-wider">{info.label}</p>
                      <p className="text-white/80 text-sm truncate">{info.value}</p>
                    </div>
                    {info.copyable && <CopyButton text={info.value} />}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">Location</p>
                <p className="text-white/80 text-sm">India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-white/60 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-white/60 mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-strong rounded-xl py-4 text-white font-medium flex items-center justify-center gap-2 hover:neon-blue transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <>
                    <Check size={18} className="text-green-400" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
