import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef, memo } from 'react';
import logo from '../assets/Retlsen_logo-removebg-preview.png';
import OptimizedImage from './OptimizedImage';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const sectionIds = ['home', 'about', 'services', 'gallery', 'products', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrolled(scrollY > 50);

      if (isManualScrolling.current) return;

      const offset = 120; // approximate navbar height + breathing room
      const currentPosition = scrollY + offset;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const sectionTop = element.offsetTop;

        if (currentPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount so initial highlight is correct
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      setActiveSection(id);
      
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);

      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
      scrolled 
      ? 'bg-white/90 backdrop-blur-xl border-gray-100 py-3 shadow-sm' 
      : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
            <div className={`relative transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-110'}`}>
              <OptimizedImage
                src={logo}
                alt="Retlsen Health Care"
                width={160}
                height={48}
                priority
                className={`h-12 w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-lg">
            <div className={`relative flex items-center p-1 rounded-full ${scrolled ? 'bg-slate-50' : 'bg-transparent'}`}>
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={`relative px-6 py-2 text-xs font-black uppercase tracking-widest transition-all duration-500 z-10 ${
                    activeSection === link.id 
                      ? (scrolled ? 'text-white' : 'text-slate-900') 
                      : (scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span 
                      className={`absolute inset-0 rounded-full -z-10 transition-all duration-500 ${scrolled ? 'bg-amber-600' : 'bg-white'}`}
                      style={{ 
                        animation: 'pillSlide 0.6s cubic-bezier(0.22, 1, 0.36, 1)' 
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>


          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300"
          style={{
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className={`block w-full text-left py-4 px-6 text-sm font-black uppercase tracking-wider transition-all ${
                  activeSection === link.id 
                  ? 'text-amber-600 bg-amber-50 rounded-lg' 
                  : 'text-slate-600 hover:text-amber-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default memo(Navigation);
