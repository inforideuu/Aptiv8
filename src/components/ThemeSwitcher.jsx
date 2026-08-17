import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-border-color bg-bg-secondary text-text-primary hover:text-accent focus:outline-none transition-colors cursor-pointer"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
      </motion.div>
    </button>
  );
}
