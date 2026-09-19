import React, { useState } from 'react';
import { galleryWorks } from '../data/siteData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['Todos', 'Pintura', 'Desenho', 'Escultura', 'Atelier'];

  const filteredWorks = activeCategory === 'Todos'
    ? galleryWorks
    : galleryWorks.filter(w => w.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredWorks.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredWorks.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="galeria" className="py-24 relative bg-[#F8F5F0] border-b border-museum-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-terracotta-bg text-museum-terracotta text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nosso Acervo Artístico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-museum-dark tracking-tight">
            A Beleza que Nossos Alunos Criam
          </h2>
          <p className="mt-4 text-base sm:text-lg text-museum-stone font-light">
            Obras reais criadas em nossas salas de aula. Uma demonstração tangível de que a metodologia correta capacita qualquer pessoa a expressar sua sensibilidade com alto rigor técnico.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-museum-terracotta text-white shadow-md'
                    : 'bg-white text-museum-charcoal hover:bg-museum-cream border border-museum-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Strategic Large Presentation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorks.map((work, idx) => (
            <div
              key={work.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-museum-border cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="aspect-square overflow-hidden bg-stone-100 relative">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-museum-dark shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <span className="text-[10px] text-museum-terracotta font-bold uppercase tracking-widest block mb-1">
                  {work.category}
                </span>
                <h4 className="text-museum-dark font-display font-bold text-base line-clamp-1 group-hover:text-museum-terracotta transition-colors">
                  {work.title}
                </h4>
                <p className="text-xs text-museum-muted mt-0.5">{work.artist}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next image */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Próxima"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Lightbox Content */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full flex flex-col items-center"
          >
            <div className="max-h-[78vh] max-w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <img
                src={filteredWorks[lightboxIndex]?.image}
                alt={filteredWorks[lightboxIndex]?.title}
                className="max-h-[78vh] w-auto object-contain mx-auto"
              />
            </div>
            
            <div className="mt-4 text-center text-white">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                {filteredWorks[lightboxIndex]?.category}
              </span>
              <h3 className="text-2xl font-display font-bold">
                {filteredWorks[lightboxIndex]?.title}
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">
                {filteredWorks[lightboxIndex]?.artist}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
