import React, { useState } from 'react';
import { blogArticles } from '../data/siteData';
import { BookOpen, Clock, User, ArrowRight, X } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="py-24 relative bg-[#FAF8F5] border-b border-museum-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-museum-gold-bg text-museum-gold-dark text-xs font-semibold tracking-wider uppercase mb-3 border border-museum-border">
            <BookOpen className="w-3.5 h-3.5 text-museum-terracotta" />
            <span>Conteúdo Editorial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-museum-dark tracking-tight">
            Blog Carneiro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-museum-stone font-light">
            Reflexões sobre a interseção entre criatividade, equilíbrio emocional e postura estratégica na arte.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogArticles.map(article => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-museum-border hover:border-museum-terracotta/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-stone-100">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-museum-dark text-[10px] font-bold tracking-wider uppercase shadow-sm border border-museum-border">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-museum-muted font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-museum-terracotta" />
                      {article.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-museum-dark group-hover:text-museum-terracotta transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-museum-stone font-light leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-museum-borderLight">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-museum-terracotta hover:text-museum-terracotta-dark transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-museum-border shadow-2xl my-8 max-h-[90vh] overflow-y-auto relative text-left"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-museum-cream hover:bg-stone-200 text-museum-dark flex items-center justify-center transition-colors"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-museum-terracotta-bg text-museum-terracotta text-xs font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-museum-dark pt-2">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-museum-muted pt-1">
                <span>Por <strong>{selectedArticle.author}</strong></span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9] shadow-md border border-museum-border">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-4 text-sm sm:text-base text-museum-charcoal font-light leading-relaxed">
              {selectedArticle.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-museum-border flex justify-between items-center">
              <span className="text-xs text-museum-muted">
                Escola Carneiro • Artes Visuais
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 rounded-full bg-museum-dark text-white text-xs font-medium hover:bg-stone-800 transition-colors"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
