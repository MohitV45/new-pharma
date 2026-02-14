import { memo } from 'react';
import { Pill, Microscope, ShieldCheck, Users, BarChart3, Clock, Calendar, TrendingUp } from 'lucide-react';

function Services() {
  const capacities = [
    { 
      type: 'Tablets', 
      icon: Pill,
      shift: '4,00,000', 
      month: '1 Crore', 
      year: '12 Crores',
      color: 'amber'
    },
    { 
      type: 'Capsules', 
      icon: Pill,
      shift: '1,00,000', 
      month: '25 Lakhs', 
      year: '3 Crores',
      color: 'emerald'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden relative section-divider">
      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
              <TrendingUp size={16} />
              Operational Scale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Manufacturing <br />Capabilities & Capacity
            </h2>
            <p className="text-gray-600 text-lg">
              In our firm we produce high-precision pharmaceutical formulations. The following output matrix details our current operational capacity per annum.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="p-6 bg-white border-t-4 border-amber-600 shadow-lg rounded-sm">
              <div className="text-xs text-gray-500 font-bold uppercase mb-1">System Status</div>
              <div className="text-green-600 font-bold flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Fully Operational
              </div>
            </div>
          </div>
        </div>

        {/* Capacity Dashboard Cards */}
        <div className="mb-24">
          {/* Header Bar */}
          <div 
            className="bg-slate-900 px-8 py-5 text-white flex items-center justify-between rounded-t-lg fade-in-section"
          >
            <h3 className="font-bold tracking-wider flex items-center gap-3">
              <BarChart3 size={20} className="text-amber-500" />
              ANNUAL PRODUCTION MATRIX
            </h3>
            <span className="text-xs text-slate-400 font-mono bg-slate-800 px-3 py-1 rounded">DOC_CAPACITY_2024_V1</span>
          </div>

          {/* Dashboard Grid */}
          <div 
            className="bg-white border border-gray-100 shadow-xl rounded-b-lg overflow-hidden fade-in-section"
            style={{ animationDelay: '0.2s' }}
          >
            {capacities.map((cap, i) => (
              <div 
                key={i} 
                className={`p-8 ${i !== capacities.length - 1 ? 'border-b-2 border-dashed border-gray-100' : ''} hover:bg-slate-50/50 transition-colors`}
              >
                {/* Product Header */}
                <div 
                  className="flex items-center gap-4 mb-8 fade-in-section"
                  style={{ animationDelay: `${0.4 + (i * 0.2)}s` }}
                >
                  <div className={`p-4 ${cap.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'} rounded-xl shadow-sm`}>
                    <cap.icon size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{cap.type}</h4>
                    <p className="text-sm text-gray-400 font-medium">Production Capacity</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Per Shift", value: cap.shift, icon: Clock, type: "normal" },
                    { label: "Monthly Yield", value: cap.month, icon: Calendar, type: "normal" },
                    { label: "Annual Capacity", value: cap.year, icon: TrendingUp, type: "highlight" }
                  ].map((stat, idx) => (
                    <div 
                      key={idx}
                      className={`fade-in-section ${stat.type === 'highlight' 
                        ? `${cap.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200' : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200'} rounded-xl p-6 border-2 shadow-sm group hover:-translate-y-1.5 transition-all duration-300`
                        : 'bg-slate-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 group'
                      }`}
                      style={{ animationDelay: `${0.6 + (i * 0.2) + (idx * 0.1)}s` }}
                    >
                      <div className={`flex items-center gap-2 ${stat.type === 'highlight' ? (cap.color === 'amber' ? 'text-amber-600' : 'text-emerald-600') : 'text-gray-400'} mb-3`}>
                        <stat.icon size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className={`${stat.type === 'highlight' ? `text-4xl font-black ${cap.color === 'amber' ? 'text-amber-700' : 'text-emerald-700'}` : 'text-3xl font-black text-slate-700 group-hover:text-slate-900 transition-colors'}`}>
                          {stat.value}
                        </span>
                        <span className={`text-sm font-bold ${stat.type === 'highlight' ? (cap.color === 'amber' ? 'text-amber-500' : 'text-emerald-500') : 'text-gray-400 font-semibold'}`}>
                          UNITS
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 fade-in-section">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Relentless Quality Systems (QA/QC)</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reltsen maintains a relentless focus on Quality Control (QC) and Quality Assurance (QA). Our systems are rooted in the belief that quality management defines organization-wide competences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-100 shadow-sm hover:border-amber-500 hover:shadow-md transition-all rounded-lg">
                <ShieldCheck className="text-amber-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Quality Assurance</h4>
                <p className="text-sm text-gray-500">Totality of arrangements ensuring products meet international intended use standards.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-sm hover:border-amber-500 hover:shadow-md transition-all rounded-lg">
                <Microscope className="text-amber-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Quality Control</h4>
                <p className="text-sm text-gray-500">Stringent testing at every gateway from procurement to final release.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 text-white relative flex flex-col justify-center overflow-hidden rounded-xl fade-in-section" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <Users className="text-amber-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-6 italic">"Expertise in Every Unit."</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We recruit specialized staff for every department—Analysis, Chemistry, Manufacturing, and Material Storage. Our team of chemists and engineers ensures operational excellence in every section.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-amber-400">MT</div>
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Highly Specialized Staff</span>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 blur-2xl -ml-24 -mb-24"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default memo(Services);
