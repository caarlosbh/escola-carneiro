import React, { useState } from 'react';
import { units } from '../data/siteData';
import { MapPin, Phone, ExternalLink, Calendar } from 'lucide-react';

export default function UnitsSection({ onOpenBooking, selectedUnitId }) {
  const [activeState, setActiveState] = useState('ALL');

  const filteredUnits = activeState === 'ALL'
    ? units
    : units.filter(u => u.state === activeState);

  return (
    <section id="unidades" className="py-24 relative bg-[#FAF8F5] border-b border-[#E5DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2ED] border border-[#F5D8CC] text-[#A84826] text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#A84826]" />
            <span>Presença em SP e MG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18171A] tracking-tight">
            Nossas 8 Unidades de Ensino
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#38343C] font-normal leading-relaxed">
            Encontre a Escola Carneiro mais conveniente para você. Espaços projetados com excelente luz natural, cavaletes profissionais, materiais completos e turmas reduzidas.
          </p>
        </div>

        {/* State Filter Tabs */}
        <div className="flex justify-center gap-2.5 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveState('ALL')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeState === 'ALL'
                ? 'btn-primary shadow-md'
                : 'bg-white text-[#18171A] hover:bg-[#FAF8F5] border border-[#E5DFD5]'
            }`}
          >
            Todas as Unidades (8)
          </button>
          <button
            onClick={() => setActiveState('SP')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeState === 'SP'
                ? 'btn-primary shadow-md'
                : 'bg-white text-[#18171A] hover:bg-[#FAF8F5] border border-[#E5DFD5]'
            }`}
          >
            São Paulo - SP (2)
          </button>
          <button
            onClick={() => setActiveState('MG')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeState === 'MG'
                ? 'btn-primary shadow-md'
                : 'bg-white text-[#18171A] hover:bg-[#FAF8F5] border border-[#E5DFD5]'
            }`}
          >
            Belo Horizonte & Nova Lima - MG (6)
          </button>
        </div>

        {/* Units Cards Grid with Larger Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUnits.map(unit => {
            const isHighlight = selectedUnitId === unit.id;
            const waLink = `https://wa.me/${unit.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20${encodeURIComponent(unit.name)}.`;
            
            return (
              <div
                key={unit.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                  isHighlight 
                    ? 'ring-3 ring-[#A84826] border-[#A84826] scale-[1.02]' 
                    : 'border-[#E5DFD5] hover:border-[#A84826]/60 hover:-translate-y-1'
                }`}
              >
                {/* Photo (Taller box) */}
                <div className="h-[210px] sm:h-[230px] relative overflow-hidden bg-stone-100">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#18171A] text-[10px] font-bold tracking-wider uppercase shadow-sm border border-[#E5DFD5]">
                      {unit.stateName}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#18171A] mb-1">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-[#5C5663] font-normal flex items-start gap-1.5 leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-[#A84826] shrink-0 mt-0.5" />
                      <span>{unit.address} • {unit.district}, {unit.cityState}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0EBE1] space-y-2.5">
                    {/* Google Maps link */}
                    <a
                      href={unit.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#8C3717] hover:text-[#A84826] font-semibold flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Ver no Google Maps</span>
                    </a>

                    {/* Action buttons with High Contrast */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                        title="Conversar no WhatsApp"
                      >
                        <Phone className="w-3.5 h-3.5 text-white" />
                        <span className="text-white font-bold">WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onOpenBooking(undefined, unit.id)}
                        className="btn-secondary py-2.5 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                        title="Agendar Aula"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#A84826]" />
                        <span>Agendar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
