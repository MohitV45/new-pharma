import { ArrowUp } from 'lucide-react';
import logo from '../assets/Retlsen_logo-removebg-preview.png';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: 'Company',
      links: [
        { name: 'Our Story', id: 'about' },
        { name: 'Capabilities', id: 'services' },
        { name: 'Quality Policy', id: 'services' },
        { name: 'Global Impact', id: 'home' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Oral Solids (Tablets)', id: 'services' },
        { name: 'Hard Capsule Form', id: 'services' },
        { name: 'Contract Manufacturing', id: 'about' },
        { name: 'Portfolio', id: 'products' }
      ]
    },
    {
      title: 'Governance',
      links: [
        { name: 'cGMP Compliance', id: 'services' },
        { name: 'Waste Management', id: 'about' },
        { name: 'Pollution Norms', id: 'about' },
        { name: 'WHO-GMP Standard', id: 'services' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-50 border-t border-gray-100 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <div className="mb-8 cursor-pointer group" onClick={scrollToTop}>
              <img 
                src={logo} 
                alt="Retlsen Health Care" 
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              Reliability, Humanity, and Caring. A leading pharmaceutical manufacturer dedicated to preserving and improving human life through superior science and manufacturing excellence.
            </p>
            <div className="mb-8">
              <SocialLinks />
            </div>
          </div>

          {/* Nav Blocks */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-8 border-l-2 border-amber-500 pl-4">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => {
                        const el = document.getElementById(link.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-500 hover:text-amber-600 text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <span>&copy; {currentYear} Reltsen Health Care</span>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Sitemap</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-all"
          >
            Back to Top
            <div className="p-3 bg-white border border-gray-200 rounded-full group-hover:border-amber-500 group-hover:-translate-y-1 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

      </div>

      {/* Decorative Signature Line */}
      <div className="h-1.5 w-full bg-slate-900 mt-12">
        <div className="h-full bg-amber-500 w-1/3"></div>
      </div>
    </footer>
  );
}
