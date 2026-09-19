import React from 'react';
import { testimonials } from '../data/siteData';
import { Heart, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-[#F6F2EC] border-b border-museum-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200">
            <Heart className="w-3.5 h-3.5 text-museum-terracotta" />
            <span>Educação Humanizada</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-museum-dark tracking-tight">
            Cada História é Única
          </h2>
          <p className="mt-4 text-base sm:text-lg text-museum-stone font-light">
            Mais de <strong className="text-museum-dark">10.000 alunos presenciais</strong> já transformaram suas vidas conosco. E nós chamamos cada um de nossos alunos pelo <strong className="text-museum-terracotta">NOME</strong>.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-museum-border flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-museum-cream absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-museum-charcoal font-light italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-museum-borderLight relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-museum-cream shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-museum-dark font-display">
                    {t.name}
                  </h4>
                  <p className="text-xs text-museum-terracotta font-semibold">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-museum-muted">
                    {t.unit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
