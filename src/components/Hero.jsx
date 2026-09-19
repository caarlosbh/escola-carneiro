import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Award, Users, MapPin, Palette, Play, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Hero({ onOpenBooking }) {
  const [activeMedia, setActiveMedia] = useState('video'); // 'video' | 'pintura' | 'desenho' | 'escultura'

  return (
    <section id="inicio" className="relative min-h-screen pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#FAF8F5] bg-canvas-pattern">
      
      {/* Luminous Warm Ambient Accents */}
      <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[500px] bg-gradient-to-b from-amber-100/60 via-rose-100/30 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-[#E5DFD5] shadow-sm text-[#8C3717] text-[11px] sm:text-sm font-bold tracking-wide text-center">
            <Sparkles className="w-3.5 h-3.5 text-[#A84826] shrink-0" />
            <span className="sm:hidden">24 Anos de Tradição • Desde 2002</span>
            <span className="hidden sm:inline">24 Anos de Tradição • Fundada em 2002 pela Artista Thayná Carneiro</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-[#18171A] leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-6">
            MUITO ALÉM <br className="hidden sm:inline" />
            <span className="font-serif-title italic font-normal text-[#A84826] relative inline-block ml-1 sm:ml-0">
              DA ARTE
              <svg className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2 text-[#C5A880]/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-[#38343C] font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto px-1">
            A maior rede de ensino de artes visuais do Brasil. Uma escola de alto padrão focada nos 3 grandes pilares: <strong className="text-[#18171A] font-bold">Pintura a Óleo</strong>, <strong className="text-[#18171A] font-bold">Desenho Artístico</strong> e <strong className="text-[#18171A] font-bold">Escultura em Clay</strong>, desenvolvendo técnica, soft skills e o Belo sem viés político ou cultural.
          </p>

          {/* Action CTAs with High Contrast */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 shadow-lg"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span className="text-white font-bold">Agendar Aula Experimental Gratuita</span>
            </button>

            <a
              href="#cursos"
              className="btn-secondary w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Explorar os Cursos</span>
              <ArrowRight className="w-4 h-4 text-[#A84826] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-[11px] sm:text-sm text-[#6E6875] font-medium mt-3 sm:mt-4 max-w-md sm:max-w-none mx-auto">
            Sem necessidade de experiência prévia. Turmas reduzidas para Crianças (4+ anos), Adultos e Melhor Idade.
          </p>
        </div>

        {/* Strategic Large Cinematic Stage */}
        <div className="mt-6 sm:mt-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-[#E5DFD5] shadow-lg relative">
            
            {/* Stage Selector Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 px-1 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 border-b border-[#F0EBE1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] sm:text-xs font-bold text-[#18171A] uppercase tracking-wider font-mono">
                  Atelier Vivo em Ação
                </span>
              </div>

              {/* Media Switcher Tabs with Horizontal Scroll on Mobile */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setActiveMedia('video')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                    activeMedia === 'video'
                      ? 'btn-primary shadow-sm'
                      : 'bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#18171A] border border-[#E5DFD5]'
                  }`}
                >
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  <span>Vídeo do Atelier</span>
                </button>

                <button
                  onClick={() => setActiveMedia('pintura')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    activeMedia === 'pintura'
                      ? 'btn-primary shadow-sm'
                      : 'bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#18171A] border border-[#E5DFD5]'
                  }`}
                >
                  Pintura a Óleo
                </button>

                <button
                  onClick={() => setActiveMedia('desenho')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    activeMedia === 'desenho'
                      ? 'btn-primary shadow-sm'
                      : 'bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#18171A] border border-[#E5DFD5]'
                  }`}
                >
                  Desenho & Traço
                </button>

                <button
                  onClick={() => setActiveMedia('escultura')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    activeMedia === 'escultura'
                      ? 'btn-primary shadow-sm'
                      : 'bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#18171A] border border-[#E5DFD5]'
                  }`}
                >
                  Escultura Clay
                </button>
              </div>
            </div>

            {/* Giant Visual Viewport (Responsive height: 320px mobile, 480px tablet, 640px desktop) */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[480px] lg:h-[640px] bg-stone-900 shadow-inner group">
              
              {activeMedia === 'video' && (
                <div className="w-full h-full relative">
                  <video
                    src="./assets/videos/atelier-motion.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-8 lg:p-12 text-white">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-300">
                      Experiência Presencial Imersiva
                    </span>
                    <h3 className="text-lg sm:text-3xl lg:text-5xl font-display font-bold mt-1">
                      O Atelier Escola Carneiro em Movimento
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-stone-200 max-w-2xl mt-1 sm:mt-2 font-light line-clamp-2 sm:line-clamp-none">
                      Turmas reduzidas, cavaletes profissionais de madeira nobre, paletas fartas e acompanhamento individual para cada aluno desenvolver seu ritmo, criatividade e autoconfiança.
                    </p>
                  </div>
                </div>
              )}

              {activeMedia === 'pintura' && (
                <div className="w-full h-full relative animate-fadeIn">
                  <img
                    src="./assets/images/80ffe1_48ce90ceb1114d3e95111312a0bc0d2f~mv2.jpg"
                    alt="Pintura a Óleo - Acervo Escola Carneiro"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-8 lg:p-12 text-white">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-300">
                      Pilar 01 • Pintura a Óleo
                    </span>
                    <h3 className="text-lg sm:text-3xl lg:text-5xl font-display font-bold mt-1">
                      Estudo Acadêmico & Expressão em Tela
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-stone-200 max-w-2xl mt-1 sm:mt-2 font-light line-clamp-2 sm:line-clamp-none">
                      Obra real produzida em nosso ateliê. Do aprendizado rigoroso da teoria e mistura de cores na paleta ao domínio de claro-escuro, empastamento e veladuras.
                    </p>
                  </div>
                </div>
              )}

              {activeMedia === 'desenho' && (
                <div className="w-full h-full relative animate-fadeIn">
                  <img
                    src="./assets/images/80ffe1_11384b6a3e01446d9f6558602c2bfcab~mv2.png"
                    alt="Desenho Artístico e Grafite"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-8 lg:p-12 text-white">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-300">
                      Pilar 02 • Desenho Artístico
                    </span>
                    <h3 className="text-lg sm:text-3xl lg:text-5xl font-display font-bold mt-1">
                      A Rigorosidade do Traço e da Luz
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-stone-200 max-w-2xl mt-1 sm:mt-2 font-light line-clamp-2 sm:line-clamp-none">
                      Fundamentos da perspectiva, proporção facial, grafite graduado, hachura, esfuminho, pastel seco e nanquim. A base sólida de qualquer grande artista.
                    </p>
                  </div>
                </div>
              )}

              {activeMedia === 'escultura' && (
                <div className="w-full h-full relative animate-fadeIn">
                  <img
                    src="./assets/images/80ffe1_39691bfc6c864c6ca192ed292ac2f711~mv2.jpg"
                    alt="Escultura em Massa Clay"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-8 lg:p-12 text-white">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-300">
                      Pilar 03 • Escultura em Clay
                    </span>
                    <h3 className="text-lg sm:text-3xl lg:text-5xl font-display font-bold mt-1">
                      Modelagem Tridimensional Anatômica
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-stone-200 max-w-2xl mt-1 sm:mt-2 font-light line-clamp-2 sm:line-clamp-none">
                      Massa clay profissional à base de óleo que não seca no ar, permitindo ao aluno trabalhar a musculatura, ossatura e texturas com paciência e perfeição.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* 4 Pillars of Excellence Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto bg-white p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E5DFD5] shadow-sm">
          
          <div className="flex items-center gap-2.5 sm:gap-3.5 p-2 rounded-xl bg-[#FAF8F5]/80 md:bg-transparent">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF2ED] text-[#A84826] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-lg sm:text-3xl font-bold font-display text-[#18171A]">24 Anos</div>
              <div className="text-[10px] sm:text-xs text-[#6E6875] font-medium leading-tight">História sólida desde 2002</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 p-2 rounded-xl bg-[#FAF8F5]/80 md:bg-transparent">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F8F4ED] text-[#8C6B32] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-lg sm:text-3xl font-bold font-display text-[#18171A]">+10.000</div>
              <div className="text-[10px] sm:text-xs text-[#6E6875] font-medium leading-tight">Alunos formados</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 p-2 rounded-xl bg-[#FAF8F5]/80 md:bg-transparent">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-lg sm:text-3xl font-bold font-display text-[#18171A]">8 Unidades</div>
              <div className="text-[10px] sm:text-xs text-[#6E6875] font-medium leading-tight">SP e MG</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 p-2 rounded-xl bg-[#FAF8F5]/80 md:bg-transparent">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-lg sm:text-3xl font-bold font-display text-[#18171A]">3 Pilares</div>
              <div className="text-[10px] sm:text-xs text-[#6E6875] font-medium leading-tight">Pintura • Desenho • Clay</div>
            </div>
          </div>

        </div>

      </div>

      {/* Brand Value Marquee Bar */}
      <div className="mt-16 py-4 bg-[#F4EFEA] border-y border-[#E5DFD5] overflow-hidden">
        <div className="flex items-center justify-around gap-8 text-xs font-bold uppercase tracking-widest text-[#38343C] text-center whitespace-nowrap">
          <span>Metodologia Própria Validada</span>
          <span className="text-[#A84826]">•</span>
          <span>Sem Viés Político ou Cultural</span>
          <span className="text-[#A84826]">•</span>
          <span>Desenvolvimento de 12 Soft Skills</span>
          <span className="text-[#A84826]">•</span>
          <span>Técnica Acadêmica & O Belo</span>
          <span className="text-[#A84826]">•</span>
          <span>Chamamos Cada Aluno Pelo Nome</span>
        </div>
      </div>

    </section>
  );
}
