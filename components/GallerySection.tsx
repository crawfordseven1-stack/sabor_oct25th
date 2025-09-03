import React from 'react';
import { GallerySectionData } from '../types';

interface GallerySectionProps {
  data: GallerySectionData;
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  return (
    <section
      className="py-20 px-6 bg-gray-900 text-center relative"
      aria-label="Experience the Vibe gallery"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-6">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

        {data.items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {data.items.map((item, index) => (
              <div
                key={`${item.src.substring(0, 30)}-${index}`}
                className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 aspect-square"
                aria-label={item.alt}
                role="img"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/50">
            <p className="text-gray-400 text-xl">The gallery is currently empty.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
