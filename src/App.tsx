import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { BackgroundCanvas3D } from './components/canvas/BackgroundCanvas3D';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex-grow z-10 relative"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col relative bg-background text-foreground transition-colors duration-300">
            {/* 3D Dynamic Particle Circuit Background to fill empty spaces */}
            <BackgroundCanvas3D />

            {/* Persistent Navbar */}
            <Navbar />

            {/* Animated Page Transitions */}
            <AnimatedRoutes />

            {/* Global Footer */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
