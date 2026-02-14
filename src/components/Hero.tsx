import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import facilityImg from '../assets/facility.jpg';
import OptimizedImage from './OptimizedImage';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      image: facilityImg,
      tag: 'OUR FACILITY',
      title: 'World-Class Manufacturing Hub.',
      subtext:
        'Our Puducherry facility is equipped with advanced infrastructure and centralized AHU systems to ensure high-standard production.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=2040&auto=format&fit=crop',
      tag: 'CORE MISSION',
      title: 'Reliability, Humanity, and Caring.',
      subtext:
        'Reltsen Health Care provides superior pharmaceutical products and services that improve the quality of life globally.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      tag: 'QUALITY POLICY',
      title: 'Preserving and Improving Human Life.',
      subtext:
        'Our stringent quality policies are dedicated to the highest standards of pharmaceutical manufacturing.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]); // Reset timer whenever slide changes

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position as percentage from center (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  const isLcpSlide = slides[currentSlide].image === facilityImg;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
      aria-live="polite"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <AnimatePresence initial={false}>
          <div
            key={currentSlide}
            className="absolute inset-0 hero-slide-transition"
          >
            {/* Parallax Container: Isolated from the transition animation */}
            <div 
              className="absolute inset-0"
              style={{
                transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) scale(1.2)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              <OptimizedImage
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                width={1920}
                height={1080}
                priority={isLcpSlide}
                sizes="100vw"
                className="w-full h-full object-cover grayscale-[20%] brightness-[0.8]"
              />

              {/* Combined cinematic overlay (performance-friendly) */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.5) 100%),
                    radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)
                  `
                }}
              />
            </div>
          </div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-3xl min-h-[500px] relative">
          <div key={currentSlide}>
              {/* Tag */}
              <div 
                className="flex items-center gap-3 mb-6 animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="h-[2px] w-8 bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-widest text-sm uppercase px-3 py-1 bg-black/30 backdrop-blur-sm border border-amber-500/20">
                  {slides[currentSlide].tag}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.2] md:leading-[1.1] animate-fade-in-up"
                style={{
                  animationDelay: '0.6s',
                  textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 8px 48px rgba(0,0,0,0.3)'
                }}
              >
                {slides[currentSlide].title}
              </h1>

              {/* Subtext */}
              <p
                className="text-lg md:text-2xl text-gray-100 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
                style={{ 
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                  animationDelay: '0.8s'
                }}
              >
                {slides[currentSlide].subtext}
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-in-up"
                style={{ animationDelay: '1.0s' }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group bg-amber-600 text-white px-8 md:px-12 py-4 md:py-5 font-bold flex items-center justify-center gap-3 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1.5 active:scale-95 hover:bg-amber-500"
                >
                  Contact Us
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 md:px-12 py-4 md:py-5 font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:-translate-y-1.5 active:scale-95 hover:bg-white/20"
                >
                  Discover Our Story
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 bg-white/20 overflow-hidden relative cursor-pointer group transition-all duration-500 ${i === currentSlide ? 'hero-indicator-active w-12' : 'w-4'}`}
          >
            {i === currentSlide && (
              <div
                className="absolute inset-0 bg-amber-500 origin-left animate-progress"
                key={`progress-${currentSlide}`}
              />
            )}
            {i < currentSlide && (
              <div className="absolute inset-0 bg-amber-500/40" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Hero);
