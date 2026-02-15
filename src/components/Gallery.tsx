import { memo } from 'react';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import OptimizedImage from './OptimizedImage';

function Gallery() {
  const galleryImages = [
    {
      src: gallery5,
      alt: 'Blister packaging production line',
      title: 'Advanced Packaging Line'
    },
    {
      src: gallery6,
      alt: 'Cleanroom corridor with blue flooring',
      title: 'Sterile Manufacturing Zone'
    },
    {
      src: gallery1,
      alt: 'Capsule filling equipment - pharmaceutical production',
      title: 'Tablet Press Machine'
    },
    {
      src: gallery2,
      alt: 'Pharmaceutical tablets on production line',
      title: 'Precision Manufacturing'
    },
    {
      src: gallery3,
      alt: 'Cleanroom worker operating pharmaceutical machinery',
      title: 'Quality Control Process'
    },
    {
      src: gallery4,
      alt: 'Blister packaging machine for tablets',
      title: 'Automated Packaging'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Portfolio Expansion
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art pharmaceutical manufacturing facility and quality control processes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {image.title}
                  </h3>
                  <div className="w-12 h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
