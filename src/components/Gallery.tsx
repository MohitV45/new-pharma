import { memo, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid } from 'lucide-react';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';
import gallery6 from '../assets/gallery/gallery-6.jpg';
import gallery10 from '../assets/gallery/gallery-10.jpg';
import gallery11 from '../assets/gallery/gallery-11.jpg';
import gallery15 from '../assets/gallery/gallery-15.jpg';
import gallery23 from '../assets/gallery/gallery-23.jpg';
import gallery24 from '../assets/gallery/gallery-24.jpg';
import gallery26 from '../assets/gallery/gallery-26.jpg';
import compressionMachine from '../assets/gallery/compressiontasb.jpeg';
import qualityprocess1 from '../assets/gallery/qualityprocess1.jpeg';
import qualityprocess2 from '../assets/gallery/qualityprocess2.jpeg';
import qualityprocess3 from '../assets/gallery/qualityprocess3.jpeg';
import qualityprocess4 from '../assets/gallery/qualityprocess4.jpeg';
import qualityprocess5 from '../assets/gallery/qualityprocess5.jpeg';
import qualityprocess6 from '../assets/gallery/qualityprocess6.jpeg';
import qualityprocess7 from '../assets/gallery/qualityprocess7.jpeg';
import rawmat1 from '../assets/gallery/rawmat1.jpeg';
import rawmat2 from '../assets/gallery/rawmat2.jpeg';
import corridor1 from '../assets/gallery/Corridor -II Production Floor1.jpeg';
import corridor2 from '../assets/gallery/Corridor -II Production Floor2.jpeg';
import ahuArea from '../assets/gallery/AirFiltration-AHUArea.jpeg';
import ahuGrill from '../assets/gallery/AirFiltration-AHUGrill.jpeg';
import ahuReturn from '../assets/gallery/AirFiltration-AHUreturn.jpeg';
import airCeiling from '../assets/gallery/AirFiltrationCeiling.jpeg';
import dmWaterPlant from '../assets/gallery/DMwaterplant.jpeg';
import diffGauge from '../assets/gallery/DiffrentialPressureGauge.jpeg';
import pipelineProd from '../assets/gallery/pipelineproductionarea.jpeg';
import retlsenHome from '../assets/gallery/RetlsenHomepage.jpeg';
import OptimizedImage from './OptimizedImage';

const CATEGORIES = ['Manufacturing', 'Quality Control', 'Infrastructure'] as const;
type Category = typeof CATEGORIES[number];

const galleryImages = [
  { src: retlsenHome, alt: 'OUR FACTORY', title: 'OUR FACTORY', category: 'Manufacturing' },
  { src: gallery5, alt: 'Blister packaging production line', title: 'Advanced Packaging Line', category: 'Manufacturing' },
  { src: gallery6, alt: 'Cleanroom corridor with blue flooring', title: 'Manufacturing Zone', category: 'Manufacturing' },
  { src: compressionMachine, alt: 'Compression tablet machine', title: 'Compression Tablet Machine', category: 'Manufacturing' },
  { src: gallery2, alt: 'Pharmaceutical tablets', title: 'Precision Manufacturing', category: 'Manufacturing' },
  { src: qualityprocess1, alt: 'Cleanroom worker', title: 'Quality Control Process', category: 'Quality Control' },
  { src: gallery4, alt: 'Blister packaging machine', title: 'Automated Packaging', category: 'Manufacturing' },
  { src: gallery10, alt: 'Industrial machinery', title: 'Advanced Manufacturing Process', category: 'Manufacturing' },
  { src: gallery11, alt: 'Sterile manufacturing facility', title: 'Advanced capsules filling', category: 'Manufacturing' },
  { src: qualityprocess2, alt: 'Advanced testing laboratory', title: 'Research & Development', category: 'Quality Control' },
  { src: gallery15, alt: 'Sterile packaging environment', title: 'Manufacturing Zone', category: 'Manufacturing' },
  { src: qualityprocess3, alt: 'Quality control inspection station', title: 'Inspection Unit', category: 'Quality Control' },
  { src: qualityprocess6, alt: 'Microbiology testing lab', title: 'Microbiology Lab', category: 'Quality Control' },
  { src: gallery23, alt: 'High-speed blister packing machine', title: 'Advanced manufacturing process', category: 'Manufacturing' },
  { src: gallery24, alt: 'Finished product storage facility', title: 'Controlled Storage', category: 'Infrastructure' },
  { src: qualityprocess5, alt: 'Chemical analysis equipment', title: 'Chemical Analysis', category: 'Quality Control' },
  { src: gallery26, alt: 'Pharmaceutical compounding area', title: 'Advanced Capsules filling', category: 'Manufacturing' },
  { src: qualityprocess4, alt: 'Quality assurance process', title: 'Quality Assurance', category: 'Quality Control' },
  { src: qualityprocess7, alt: 'Quality testing process', title: 'Quality Testing', category: 'Quality Control' },
  { src: rawmat1, alt: 'Raw material storage 1', title: 'Raw Material Storage', category: 'Infrastructure' },
  { src: rawmat2, alt: 'Raw material storage 2', title: 'Raw Material Storage', category: 'Infrastructure' },
  { src: corridor1, alt: 'Corridor II Production Floor 1', title: 'Corridor II Production Floor', category: 'Infrastructure' },
  { src: corridor2, alt: 'Corridor II Production Floor 2', title: 'Corridor II Production Floor', category: 'Infrastructure' },
  { src: ahuArea, alt: 'Air Filtration AHU Area', title: 'Air Filtration AHU Area', category: 'Infrastructure' },
  { src: ahuGrill, alt: 'Air Filtration AHU Grill', title: 'Air Filtration AHU Grill', category: 'Infrastructure' },
  { src: ahuReturn, alt: 'Air Filtration AHU Return', title: 'Air Filtration AHU Return', category: 'Infrastructure' },
  { src: airCeiling, alt: 'Air Filtration Ceiling', title: 'Air Filtration Ceiling', category: 'Infrastructure' },
  { src: dmWaterPlant, alt: 'DM Water Plant', title: 'DM Water Plant', category: 'Infrastructure' },
  { src: diffGauge, alt: 'Differential Pressure Gauge', title: 'Differential Pressure Gauge', category: 'Infrastructure' },
  { src: pipelineProd, alt: 'Pipeline Production Area', title: 'Pipeline Production Area', category: 'Infrastructure' }
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : [];

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleClose]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Our Facility
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {selectedCategory ? `Viewing ${selectedCategory} archives` : 'Explore our facility by category'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            /* Category Selection View */
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {CATEGORIES.map((cat) => {
                const representative = galleryImages.find(img => img.category === cat);
                const count = galleryImages.filter(img => img.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="group relative h-[400px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <OptimizedImage
                      src={representative?.src || ''}
                      alt={cat}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-left">
                      <div className="text-amber-500 font-bold mb-2 flex items-center gap-2">
                        <Grid size={16} />
                        {count} Photos
                      </div>
                      <h3 className="text-white text-3xl font-bold uppercase tracking-tight">{cat}</h3>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            /* Detailed Image Grid View */
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-gray-700 hover:text-amber-800 font-bold mb-10 transition-colors group"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Categories
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    layout
                    key={image.src}
                    whileHover={{ y: -5 }}
                    onClick={() => setLightboxIndex(index)}
                    className="cursor-zoom-in group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur p-2 rounded-full text-amber-600">
                        <ZoomIn size={18} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h4 className="text-white font-bold">{image.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            >
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              >
                <X size={32} />
              </button>

              <button 
                onClick={handlePrev}
                className="absolute left-6 text-white/50 hover:text-white transition-colors z-[110] p-4 bg-white/5 rounded-full backdrop-blur"
              >
                <ChevronLeft size={32} />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-6 text-white/50 hover:text-white transition-colors z-[110] p-4 bg-white/5 rounded-full backdrop-blur"
              >
                <ChevronRight size={32} />
              </button>

              <motion.div 
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) handlePrev();
                  else if (info.offset.x < -100) handleNext();
                }}
                className="relative max-w-5xl w-full px-12 aspect-[4/3] flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <motion.img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  className="max-h-full max-w-full rounded-2xl shadow-2xl pointer-events-none"
                  whileTap={{ scale: 1.05 }}
                />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <p className="text-white font-bold text-lg">{filteredImages[lightboxIndex].title}</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest">{filteredImages[lightboxIndex].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default memo(Gallery);
