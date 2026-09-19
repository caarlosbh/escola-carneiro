import React, { useState } from 'react';
import { units, siteConfig } from '../data/siteData';
import { Phone, X, MessageCircle, MapPin } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Unit Selector Popup in Light Theme */}
      {isOpen && (
        <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-2xl border border-museum-border w-80 mb-3 animate-fadeIn text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-museum-borderLight">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-bold text-museum-dark block font-display">
                  WhatsApp Oficial
                </span>
                <span className="text-[10px] text-emerald-600 font-medium">
                  Atendimento Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-museum-muted hover:text-museum-dark p-1 rounded-full hover:bg-stone-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-museum-stone mb-3 font-light">
            Selecione a unidade mais próxima para falar diretamente com a coordenação:
          </p>

          <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
            {/* Central */}
            <a
              href={`https://wa.me/${siteConfig.mainWhatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20gerais%20sobre%20a%20Escola%20Carneiro.`}
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950 transition-colors"
            >
              <div className="font-bold text-emerald-800">Atendimento Geral / Central</div>
              <div className="text-[10px] text-emerald-700">Dúvidas gerais, matrículas e expansão</div>
            </a>

            {/* Units list */}
            {units.map(u => (
              <a
                key={u.id}
                href={`https://wa.me/${u.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20${encodeURIComponent(u.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="block p-2.5 rounded-xl bg-museum-cream/60 hover:bg-museum-cream border border-museum-border text-xs transition-colors"
              >
                <div className="font-semibold text-museum-dark flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-museum-terracotta shrink-0" />
                  <span className="truncate">{u.name}</span>
                </div>
                <div className="text-[10px] text-museum-muted truncate pl-4.5">{u.district}, {u.state}</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="Fale Conosco no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      </button>

    </div>
  );
}
