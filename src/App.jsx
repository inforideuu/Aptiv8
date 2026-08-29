import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import IndustriesPage from './pages/IndustriesPage';
import PartnersPage from './pages/PartnersPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AdminPage from './pages/AdminPage';

// Scroll to top on navigation helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

// Premium 3D Perspective Reveal Wrapper
const Page3DReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, scale: 0.96, y: 40 }}
      animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
      exit={{ opacity: 0, rotateX: -8, scale: 0.96, y: -40 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200 }}
      className="origin-top"
    >
      {children}
    </motion.div>
  );
};

function App() {
  // Theme state: dark mode active by default or from localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    // default to light mode
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

function AppContent({ theme, toggleTheme }) {
  const location = useLocation();
  const showFooter = location.pathname !== '/admin';

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      {location.pathname !== '/admin' && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      <Routes>
        <Route path="/" element={<Page3DReveal><HomePage theme={theme} /></Page3DReveal>} />
        <Route path="/about" element={<Page3DReveal><AboutPage /></Page3DReveal>} />
        <Route path="/services" element={<Page3DReveal><ServicesPage /></Page3DReveal>} />
        <Route path="/projects" element={<Page3DReveal><ProjectsPage /></Page3DReveal>} />
        <Route path="/solutions" element={<Page3DReveal><SolutionsPage /></Page3DReveal>} />
        <Route path="/products" element={<Page3DReveal><ProductsPage /></Page3DReveal>} />
        <Route path="/case-studies" element={<Page3DReveal><CaseStudiesPage /></Page3DReveal>} />
        <Route path="/industries" element={<Page3DReveal><IndustriesPage /></Page3DReveal>} />
        <Route path="/partners" element={<Page3DReveal><PartnersPage /></Page3DReveal>} />
        <Route path="/resources" element={<Page3DReveal><ResourcesPage /></Page3DReveal>} />
        <Route path="/contact" element={<Page3DReveal><ContactPage /></Page3DReveal>} />
        <Route path="/admin" element={<Page3DReveal><AdminPage theme={theme} toggleTheme={toggleTheme} /></Page3DReveal>} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;

