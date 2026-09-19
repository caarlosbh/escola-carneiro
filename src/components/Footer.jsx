import React from 'react';
import { siteConfig, units } from '../data/siteData';
import { Instagram, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4EFEA] border-t border-museum-border pt-16 pb-12 text-museum-stone text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-museum-border">
                <img
                  src="./assets/images/logo.png"
                  alt="Escola Carneiro"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="block font-display text-lg font-bold tracking-wider text-museum-dark uppercase">
                  Escola Carneiro
                </span>
                <span className="block text-[10px] tracking-widest text-museum-terracotta uppercase font-bold">
                  Artes Visuais • Fundada em 2002
                </span>
              </div>
            </div>

            <p className="text-museum-stone text-xs sm:text-sm font-light leading-relaxed max-w-md">
              A maior rede de ensino de artes visuais do Brasil. Há mais de 24 anos lapidando talentos e desenvolvendo técnica, soft skills e realização humana através dos 3 pilares: Pintura a Óleo, Desenho e Escultura em Clay acompanhados do Belo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-rose-50 border border-museum-border text-museum-dark hover:text-rose-600 flex items-center justify-center transition-all shadow-sm"
                title="Siga no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.mainWhatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Escola%20Carneiro.`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-emerald-50 border border-museum-border text-emerald-600 flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp Central"
              >
                <Phone className="w-4 h-4" />
              </a>
              <span className="text-xs text-museum-dark font-medium">
                Instagram: <strong className="text-museum-terracotta">@escolacarneiro</strong>
              </span>
            </div>
          </div>

          {/* Col 3: Cursos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-museum-dark uppercase tracking-wider font-display">
              Cursos & Pilares
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cursos" className="hover:text-museum-terracotta transition-colors">Pintura a Óleo Clássica</a></li>
              <li><a href="#cursos" className="hover:text-museum-terracotta transition-colors">Desenho Artístico & Grafite</a></li>
              <li><a href="#cursos" className="hover:text-museum-terracotta transition-colors">Escultura em Massa Clay</a></li>
              <li><a href="#metodologia" className="hover:text-museum-terracotta transition-colors">Artes para Crianças (4+ anos)</a></li>
              <li><a href="#metodologia" className="hover:text-museum-terracotta transition-colors">Artes para Adultos & Estresse</a></li>
              <li><a href="#metodologia" className="hover:text-museum-terracotta transition-colors">Estimulação para Idosos (Sênior)</a></li>
            </ul>
          </div>

          {/* Col 4: São Paulo Units */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-museum-dark uppercase tracking-wider font-display">
              São Paulo - SP
            </h4>
            <ul className="space-y-2.5 text-xs">
              {units.filter(u => u.state === 'SP').map(u => (
                <li key={u.id}>
                  <div className="font-semibold text-museum-dark">{u.name}</div>
                  <div className="text-museum-muted text-[11px]">{u.address}</div>
                  <a 
                    href={`https://wa.me/${u.whatsapp}?text=Ol%C3%A1!%20Contato%20via%20site.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 transition-colors text-[11px] flex items-center gap-1 mt-0.5 font-medium"
                  >
                    <Phone className="w-3 h-3 text-emerald-600" />
                    <span>{u.whatsappDisplay}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Minas Gerais Units */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-museum-dark uppercase tracking-wider font-display">
              Belo Horizonte - MG
            </h4>
            <ul className="space-y-2 text-[11px]">
              {units.filter(u => u.state === 'MG').map(u => (
                <li key={u.id} className="truncate">
                  <div className="font-semibold text-museum-dark truncate">{u.name}</div>
                  <div className="text-museum-muted truncate">{u.address}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-museum-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-museum-muted text-center sm:text-left">
            © {siteConfig.foundationYear} - 2026 Escola Carneiro - Artes Visuais. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-museum-terracotta hover:text-museum-dark font-medium transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
