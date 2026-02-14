import { memo } from 'react';
import { History, Factory, Award, ShieldCheck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

function About() {
  const certifications = [
    "WHO-GMP Certified Facility",
    "ISO 9001:2015 Standards",
    "Schedule M Compliant",
    "Pollution Board Licensed"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative section-divider">
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="fade-in-section">
              <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
                <History size={16} />
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Established Excellence <br />
                <span className="text-amber-600">Since 2011</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Reltsen Health Care was established in the year 2011 as a Medium Scale Industry in the centrally located industrial area of <span className="text-slate-900 font-semibold">Puducherry, India</span>. 
                </p>
                <p>
                  We have grown into a reputed manufacturer of finished pharmaceutical formulations, specializing in contract manufacturing for leading corporations across India.
                </p>
                <p>
                  Our facility is fully restructured as per <span className="text-slate-900 font-semibold">Revised Schedule ‘M’</span> and equipped with centralized Air Handling Units (AHU). The site maintains expansive open spaces and waste disposal infrastructure that strictly adheres to National Pollution Control Department norms.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-md fade-in-section"
                    style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}
                  >
                    <ShieldCheck className="text-amber-600" size={20} />
                    <span className="text-slate-800 font-bold text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 fade-in-section">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1780&auto=format&fit=crop" 
                alt="Modern Laboratory"
                width={1780}
                height={1187}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-sm shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Stat Block */}
              <div 
                className="absolute -bottom-10 -left-10 bg-slate-900 p-8 text-white hidden md:block border-b-8 border-amber-600 shadow-2xl fade-in-section"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="text-5xl font-bold mb-1">14+</div>
                <div className="text-amber-500 font-bold uppercase tracking-widest text-xs">Years of Stability</div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-50 opacity-[0.03] -z-10 pointer-events-none">
              <Factory size={500} />
            </div>
          </div>

        </div>

        {/* Technical Competencies Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          {[
            { 
              icon: Award, 
              title: "Reputed Manufacturer", 
              text: "Recognized as a reliable partner for finished formulations, serving India's top pharmaceutical brands." 
            },
            { 
              icon: ShieldCheck, 
              title: "Licensed Quality", 
              text: "Holds active licenses from the Puducherry Pollution Control Board and maintaining strict effluent tank procedures." 
            },
            { 
              icon: Factory, 
              title: "cGMP Infrastructure", 
              text: "Modern facility equipped with integrated Air Handling Units ensuring a sterile, strictly controlled environment." 
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="group fade-in-section"
              style={{ animationDelay: `${0.2 + (i * 0.15)}s` }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="p-2 bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={20} />
                </div>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(About);
