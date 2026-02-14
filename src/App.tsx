import { Suspense, lazy, useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Loader from './components/Loader';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), 1000);
      }, 2000); // 2 second loader display
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader fading={fading} />}
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
        <Navigation />
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Products />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
