import React, { useState } from 'react';
import { franchiseData } from '../data/siteData';
import { TrendingUp, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

export default function FranchiseSection({ onOpenFranchiseModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="franquia" className="py-24 relative bg-white border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2ED] text-[#A84826] text-xs font-bold tracking-wider uppercase mb-3 border border-[#F5D8CC]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Expansão de Negócios 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18171A] tracking-tight">
            Seja um Franqueado Escola Carneiro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#38343C] font-normal leading-relaxed">
            {franchiseData.subheadline}
          </p>
        </div>

        {/* 4 Financial & Operational Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {franchiseData.metrics.map((metric, idx) => (
            <div key={idx} className="bg-[#FAF8F5] p-7 rounded-3xl border border-[#E5DFD5] text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#A84826] mb-1.5">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-[#18171A] mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-[#6E6875] font-normal leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18171A] leading-tight">
                {franchiseData.headline}
              </h3>
              
              <p className="text-sm sm:text-base text-[#38343C] font-normal leading-relaxed">
                {franchiseData.description}
              </p>

              <div className="space-y-3.5 pt-2">
                {franchiseData.pillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FDF2ED] text-[#A84826] flex items-center justify-center shrink-0 mt-0.5 border border-[#F5D8CC]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-[#18171A] text-sm block font-bold">{pillar.title}</strong>
                      <span className="text-xs text-[#5C5663] font-normal">{pillar.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenFranchiseModal}
                  className="btn-primary px-8 py-4 rounded-full text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg"
                >
                  <span className="text-white font-bold">Quero Ser um Franqueado</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Profile Requirements */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] space-y-4 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A84826] mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#A84826]" />
                <span>Perfil do Franqueado Ideal:</span>
              </h4>

              {franchiseData.requirements.map((req) => (
                <div key={req.num} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#A84826]">{req.num}.</span>
                    <strong className="text-[#18171A] text-sm font-bold">{req.title}</strong>
                  </div>
                  <p className="text-xs text-[#5C5663] font-normal leading-relaxed pl-5">
                    {req.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 15 FAQs Accordion with High Contrast and Readability */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18171A]">
              Perguntas Frequentes sobre a Franquia
            </h3>
            <p className="text-sm text-[#5C5663] mt-1.5 font-normal">
              Tudo o que você precisa saber sobre o modelo, suporte, rentabilidade e operação.
            </p>
          </div>

          <div className="space-y-3">
            {franchiseData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-bold text-[#A84826] font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#18171A]">
                        {faq.q}
                      </span>
                    </div>
                    <div className="shrink-0 text-[#6E6875]">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#A84826]" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#38343C] font-normal leading-relaxed border-t border-[#E5DFD5] bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Franchise CTA with BOLD High-Contrast Dark Button (Fixes Screenshot 5) */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenFranchiseModal}
              className="btn-dark inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-sm sm:text-base shadow-xl"
            >
              <span className="text-white font-bold">Solicitar Estudo de Viabilidade Territorial</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
