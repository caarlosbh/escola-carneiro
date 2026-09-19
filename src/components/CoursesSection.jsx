import React, { useState } from 'react';
import { courses } from '../data/siteData';
import { Check, ArrowRight, Sparkles, Paintbrush, PenTool, Box } from 'lucide-react';

export default function CoursesSection({ onOpenBooking }) {
  const [activeCourseId, setActiveCourseId] = useState(courses[0].id);
  const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];

  const getPilarIcon = (pilar) => {
    switch (pilar) {
      case 'PINTURA':
        return <Paintbrush className="w-4 h-4" />;
      case 'DESENHO':
        return <PenTool className="w-4 h-4" />;
      case 'ESCULTURA':
        return <Box className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="cursos" className="py-24 relative bg-[#F6F2EC] border-b border-[#E5DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[#8C3717] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A84826]" />
            <span>Nossos 3 Pilares Fundamentais</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18171A] tracking-tight">
            Pintura • Desenho • Escultura
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#38343C] font-normal leading-relaxed">
            A Escola Carneiro acredita em um processo de ensino que valoriza a técnica acadêmica, a expressão autoral e o florescimento humano. Cada modalidade segue um percurso personalizado ao ritmo de cada estudante.
          </p>
        </div>

        {/* 3 Pillar Tabs with High Contrast */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {courses.map(course => {
            const isActive = course.id === activeCourseId;
            return (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? 'btn-primary shadow-lg scale-105'
                    : 'bg-white text-[#18171A] hover:bg-[#FAF8F5] border border-[#E5DFD5] shadow-sm'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'text-[#A84826]'}`}>
                  {getPilarIcon(course.pilar)}
                </div>
                <span>{course.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Strategic Course Card with Larger Photos */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5DFD5] shadow-lg relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#FDF2ED] text-[#A84826] text-xs font-bold uppercase tracking-wider border border-[#F5D8CC]">
                  {activeCourse.tag}
                </span>
                <span className="text-xs text-[#5C5663] font-semibold bg-[#F4EFEA] px-3.5 py-1 rounded-full">
                  Público: {activeCourse.audiences}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#18171A] mb-2">
                  {activeCourse.title}
                </h3>
                <p className="text-[#A84826] font-semibold text-sm sm:text-base">
                  {activeCourse.subtitle}
                </p>
              </div>

              <p className="text-[#38343C] text-base sm:text-lg leading-relaxed font-normal">
                {activeCourse.fullDesc}
              </p>

              {/* Curriculum Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#18171A] uppercase tracking-wider">
                  O que você domina na prática:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCourse.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222026]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Info */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm space-y-1">
                <strong className="text-[#18171A] block font-bold">Materiais e Instrumentos:</strong>
                <p className="text-[#5C5663] font-normal leading-relaxed">{activeCourse.materials}</p>
              </div>

              {/* CTA with High Contrast */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenBooking(activeCourse.title)}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span className="text-white font-bold">Experimentar Aula de {activeCourse.pilar}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <span className="text-xs text-[#6E6875] font-semibold">
                  Turmas reduzidas • Acompanhamento nominal
                </span>
              </div>
            </div>

            {/* Right Images (LARGER BOXES - NO TIGHT CROPPING) (6 Cols) */}
            <div className="lg:col-span-6 space-y-5">
              {/* Primary Large Artwork Box */}
              <div className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[460px] shadow-md border border-[#E5DFD5] group bg-stone-100">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-xs text-amber-300 uppercase tracking-widest font-bold block mb-1">
                      Obra Real de Aluno da Escola Carneiro
                    </span>
                    <span className="text-base font-display font-bold">
                      Técnica refinada em ateliê com acompanhamento individual
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Large Detail Box */}
              {activeCourse.secondaryImage && (
                <div className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[280px] shadow-md border border-[#E5DFD5] group hidden sm:block bg-stone-100">
                  <img
                    src={activeCourse.secondaryImage}
                    alt={`${activeCourse.title} Detalhe`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5 text-white">
                    <span className="text-sm font-medium">
                      Processo detalhado de observação, técnica e sensibilidade
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
