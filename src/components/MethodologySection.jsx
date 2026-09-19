import React, { useState } from 'react';
import { softSkills, audienceBenefits } from '../data/siteData';
import { Compass, CheckCircle2, Quote, Check } from 'lucide-react';

export default function MethodologySection() {
  const [activeAudienceId, setActiveAudienceId] = useState(audienceBenefits[0].id);
  const activeAudience = audienceBenefits.find(a => a.id === activeAudienceId) || audienceBenefits[0];

  return (
    <section id="metodologia" className="py-24 relative bg-[#FAF8F5] border-b border-[#E5DFD5] overflow-hidden">
      
      {/* Delicate background ambient light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2ED] text-[#A84826] text-xs font-bold tracking-wider uppercase mb-3 border border-[#F5D8CC]">
            <Compass className="w-3.5 h-3.5" />
            <span>Educação que Transforma</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18171A] tracking-tight">
            Mais do que Ensino: Um Ambiente de Evolução
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#38343C] font-normal leading-relaxed">
            Metodologia própria lapidada em 24 anos de dedicação. Uma escola de artes de alto padrão desenvolvendo <strong className="text-[#18171A] font-bold">Técnica</strong>, <strong className="text-[#18171A] font-bold">Soft Skills</strong> e <strong className="text-[#18171A] font-bold">Empreendedorismo</strong>, sem viés político ou cultural.
          </p>
        </div>

        {/* Founder Spotlight Card (TALLER PHOTO BOX - NO CROPPING) */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5DFD5] shadow-lg mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Image (Larger container) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden h-[460px] sm:h-[540px] shadow-md border border-[#E5DFD5] group bg-stone-100">
                <img
                  src="./assets/images/80ffe1_3279393fbd884e5b8ba8f02dda88922d~mv2.jpg"
                  alt="Thayná Carneiro - Fundadora da Escola Carneiro"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-xs text-amber-300 uppercase tracking-widest font-bold">Fundadora & Artista Plástica</span>
                  <span className="text-2xl sm:text-3xl font-display font-bold mt-0.5">Thayná Carneiro</span>
                  <span className="text-xs text-stone-200 mt-1">Criadora da Metodologia Escola Carneiro</span>
                </div>
              </div>
            </div>

            {/* Founder Philosophy & Quotes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#A84826] text-xs font-bold tracking-wider uppercase">
                <Quote className="w-4 h-4" />
                <span>Nossa Convicção Pedagógica</span>
              </div>

              <blockquote className="space-y-4 border-l-4 border-[#A84826] pl-5">
                <p className="text-2xl sm:text-3xl font-display italic text-[#18171A] font-medium leading-snug">
                  “Não existe dom. Arte é matemática, método e prática contínua. Tudo pode ser aprendido.”
                </p>
                <p className="text-lg sm:text-xl font-display italic text-[#A84826] font-semibold">
                  “Nunca peguei nenhum aluno que não aprendeu em toda a minha carreira.”
                </p>
              </blockquote>

              <p className="text-[#38343C] text-base leading-relaxed font-normal">
                Fundada em 2002 pela artista plástica e empreendedora Thayná Carneiro, a Escola Carneiro nasceu para desmistificar a crença de que a arte é restrita a poucos 'iluminados'. Com acompanhamento individualizado, turmas reduzidas e atenção profunda a cada ser humano, mais de 10.000 alunos já comprovaram que a criatividade pode ser desenvolvida com rigor e carinho.
              </p>

              {/* 3 Teaching Bases */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-[#E5DFD5]">
                <div className="p-4 rounded-2xl bg-[#FDF2ED] border border-[#F5D8CC]">
                  <div className="text-xs font-bold text-[#A84826] uppercase tracking-wider mb-1">01. Paixão por Ensinar</div>
                  <div className="text-xs text-[#38343C] font-medium">Conhecimento compartilhado, técnica precisa & dedicação absoluta.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F4ED] border border-[#EBE3D5]">
                  <div className="text-xs font-bold text-[#8C6B32] uppercase tracking-wider mb-1">02. Lapidar Talentos</div>
                  <div className="text-xs text-[#38343C] font-medium">Promove (re)conexões, vivência criativa & engajadora no atelier.</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">03. Ampliar Futuros</div>
                  <div className="text-xs text-[#38343C] font-medium">Novas descobertas, autonomia pessoal & postura empreendedora.</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 12 Behavioral Soft Skills Cards */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18171A]">
              As 12 Competências Desenvolvidas
            </h3>
            <p className="text-sm sm:text-base text-[#5C5663] mt-1.5 font-normal">
              Muito além do domínio técnico do pincel: habilidades socioemocionais para toda a vida.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E5DFD5] hover:border-[#A84826] hover:shadow-md transition-all group duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FDF2ED] text-[#A84826] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#18171A] mb-1 group-hover:text-[#A84826] transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-[#5C5663] font-normal leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 3 Audiences: Infantil, Adulto, Sênior */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18171A]">
              A Arte para Todas as Fases da Vida
            </h3>
            <p className="text-sm sm:text-base text-[#5C5663] mt-1.5 font-normal">
              Metodologia adaptada com carinho às necessidades biológicas e emocionais de cada faixa etária.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-3 mb-8">
            {audienceBenefits.map(item => {
              const active = item.id === activeAudienceId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveAudienceId(item.id)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                    active
                      ? 'btn-dark shadow-md scale-105'
                      : 'bg-white text-[#18171A] hover:bg-[#FAF8F5] border border-[#E5DFD5] shadow-sm'
                  }`}
                >
                  {item.title} ({item.age})
                </button>
              );
            })}
          </div>

          {/* Active Audience Card (Taller Box) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] max-w-4xl mx-auto shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              
              <div className="sm:col-span-5 relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] shadow-md border border-[#E5DFD5]">
                <img
                  src={activeAudience.image}
                  alt={activeAudience.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="text-xs text-[#A84826] font-bold uppercase tracking-wider">
                    {activeAudience.age}
                  </span>
                  <h4 className="text-2xl font-display font-bold text-[#18171A]">
                    {activeAudience.title}: {activeAudience.summary}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-[#38343C] leading-relaxed font-normal">
                  {activeAudience.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {activeAudience.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#18171A]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 font-bold">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
