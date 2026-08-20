import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services Offered', href: '/services' },
    { name: 'Co-Developed Projects', href: '/projects' },
    { name: 'AI Solutions', href: '/solutions' },
    { name: 'AI Products Suite', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'Partners Ecosystem', href: '/partners' },
    { name: 'Resources & Insights', href: '/resources' },
    { name: 'Book Consultation', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-bg-secondary/90 backdrop-blur-md border-b border-border-color shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Aptiv8 IT Solutions" 
                className="h-10 w-auto object-contain brightness-100 dark:brightness-110 transition-transform hover:scale-[1.02]" 
              />
            </Link>

            {/* Menu trigger button & Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Ask AI Button */}
              <Link
                to="/contact"
                className="group p-[1px] rounded-full bg-border-color hover:bg-gradient-to-r hover:from-accent hover:to-[#ff3b46] transition-all duration-300 cursor-pointer block"
              >
                <div className="px-4 py-2 rounded-full bg-bg-secondary text-text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-display">
                  <span>Ask AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </Link>

              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-hover font-display text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer z-50"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                <span className="hidden sm:inline">{isOpen ? 'Close' : 'Menu'}</span>
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern minimal slide-out navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-secondary pt-28 pb-12 px-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Tech grid overlay inside menu */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,6,19,0.03),transparent_50%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full relative z-10">
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-8 font-display">
                Corporate Navigation Directory
              </span>

              {/* Grid of Large Premium Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="group flex items-center justify-between py-4 border-b border-border-color hover:border-accent transition-colors cursor-pointer"
                    >
                      <span className="text-2xl font-extrabold font-display text-text-primary group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                      <span className="text-xs font-semibold text-accent/0 group-hover:text-accent/100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all font-display">
                        Explore →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="max-w-4xl mx-auto w-full border-t border-border-color/60 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-text-secondary relative z-10 gap-4">
              <p>© {new Date().getFullYear()} Aptiv8 IT Solutions Pte Ltd. All rights reserved.</p>
              <div className="flex gap-6">
                <span>Singapore Hub: 10 Ubi Techpark</span>
                <a href="mailto:Admin@Aptiveight.com" className="hover:underline">Admin@Aptiveight.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
