import { memo } from 'react';
import { Database, FileText } from 'lucide-react';

function Products() {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden relative section-divider">
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
              <Database size={16} />
              Portfolio Expansion
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Product <br />Catalogue
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              We are currently finalizing our digital product catalogue to ensure the most accurate data on our range of Tablets, Capsules, and Oral Formulations.
            </p>
          </div>
        </div>

        {/* Premium PDF Catalogue Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <FileText size={400} strokeWidth={0.5} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              {/* Catalogue Visual */}
              <div className="relative w-full md:w-1/2 aspect-[1/1.4] max-w-[300px] group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-amber-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-lg"></div>
                <div className="absolute inset-0 bg-white rounded-lg -rotate-1 group-hover:-rotate-2 transition-transform duration-500 shadow-xl overflow-hidden border border-gray-100">
                  <img 
                    src="/product-list-preview.png" 
                    alt="Reltsen Product List Preview" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Glass overlay on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center border-t border-gray-100">
                    <div className="text-[10px] font-bold text-slate-900 border-l-2 border-amber-600 pl-2">OFFICIAL LIST 2022</div>
                    <FileText size={16} className="text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-amber-600/20">
                  <Database size={14} />
                  Official Catalogue
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Reltsen <span className="text-amber-600">Product List</span>
                </h3>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg font-medium">
                  Access our complete pharmaceutical directory featuring our 2022 manufacturing capabilities, therapeutic segments, and formulation standards.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href="/docs/Reltsen Product List-2022(1).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-amber-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-amber-500 hover:-translate-y-1 shadow-xl shadow-amber-600/20 active:scale-95 w-full sm:w-auto justify-center"
                  >
                    <FileText size={22} />
                    Download PDF Catalogue
                  </a>
                  
                  <div className="text-slate-600 text-sm font-bold">
                    PDF format • 155 KB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-30 grayscale">
            {['Analgesics', 'Antibiotics', 'Gastrointestinal', 'Nutritional', 'Cold & Cough'].map((tag, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default memo(Products);
