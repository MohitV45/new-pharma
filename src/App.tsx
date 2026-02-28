// Deployment Heartbeat: Syncing with Vercel authorized credentials
import { Suspense, lazy, useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Loader from './components/Loader';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Optimization: Start fading the loader as soon as possible
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 800); // Slightly faster transition
    }, 1500); // Balanced loader display time

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader fading={fading} />}
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
        <Navigation />
        <Hero />
        <Suspense fallback={<div className="h-64 bg-slate-50 animate-pulse" />}>
          <About />
          <Services />
          <Gallery />
          <Products />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
