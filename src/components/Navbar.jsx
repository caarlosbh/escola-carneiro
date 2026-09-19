import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { siteConfig, units } from '../data/siteData';

export default function Navbar({ onOpenBooking, onSelectUnit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unitsDropdownOpen, setUnitsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav-light py-2.5 sm:py-3 shadow-sm' : 'bg-transparent py-2.5 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Brand Logo & Name (Protected with shrink-0 and whitespace-nowrap) */}
          <a href="#" className="flex items-center gap-2 sm:gap-3.5 group shrink-0">
            <div className="bg-white p-1 sm:p-2 rounded-xl shadow-sm border border-[#E5DFD5] transition-all duration-300 group-hover:border-[#A84826] shrink-0">
              <img 
                src="./assets/images/logo.png" 
                alt="Escola Carneiro - Artes Visuais" 
                className="h-8 sm:h-11 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <span className="font-display text-sm sm:text-lg xl:text-xl font-bold tracking-wider text-[#18171A] uppercase leading-none whitespace-nowrap">
                Escola Carneiro
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-widest text-[#A84826] uppercase font-bold mt-0.5 sm:mt-1 whitespace-nowrap">
                Artes Visuais • Desde 2002
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Responsive gaps and font sizes to prevent any overlap) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-bold text-[#18171A] shrink-0">
            <a href="#inicio" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1">
              Início
            </a>
            <a href="#cursos" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1">
              Cursos
            </a>
            <a href="#atelier-video" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1 flex items-center gap-1.5">
              <span>O Atelier</span>
              <span className="w-2 h-2 rounded-full bg-[#A84826] animate-pulse shrink-0" />
            </a>
            <a href="#metodologia" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1">
              Metodologia
            </a>
            <a href="#galeria" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1">
              Galeria
            </a>
            
            {/* Dropdown Unidades */}
            <div className="relative" onMouseLeave={() => setUnitsDropdownOpen(false)}>
              <button 
                onClick={() => setUnitsDropdownOpen(!unitsDropdownOpen)}
                onMouseEnter={() => setUnitsDropdownOpen(true)}
                className="whitespace-nowrap flex items-center gap-1 hover:text-[#A84826] transition-colors py-1"
              >
                <span>Unidades (8)</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {unitsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl p-3 border border-[#E5DFD5] mt-2 animate-fadeIn z-50">
                  <div className="text-[11px] font-bold text-[#A84826] uppercase tracking-wider px-3 py-1.5 mb-1 bg-[#FDF2ED] rounded-lg">
                    São Paulo - SP (2)
                  </div>
                  {units.filter(u => u.state === 'SP').map(u => (
                    <a
                      key={u.id}
                      href="#unidades"
                      onClick={() => {
                        setUnitsDropdownOpen(false);
                        if (onSelectUnit) onSelectUnit(u.id);
                      }}
                      className="block px-3 py-2 rounded-xl text-xs hover:bg-[#FAF8F5] text-[#18171A] transition-colors"
                    >
                      <div className="font-bold text-[#18171A]">{u.name}</div>
                      <div className="text-[11px] text-[#6E6875] truncate">{u.address}</div>
                    </a>
                  ))}

                  <div className="text-[11px] font-bold text-[#A84826] uppercase tracking-wider px-3 py-1.5 mt-2 mb-1 bg-[#FDF2ED] rounded-lg">
                    Minas Gerais (6)
                  </div>
                  {units.filter(u => u.state === 'MG').map(u => (
                    <a
                      key={u.id}
                      href="#unidades"
                      onClick={() => {
                        setUnitsDropdownOpen(false);
                        if (onSelectUnit) onSelectUnit(u.id);
                      }}
                      className="block px-3 py-2 rounded-xl text-xs hover:bg-[#FAF8F5] text-[#18171A] transition-colors"
                    >
                      <div className="font-bold text-[#18171A]">{u.name}</div>
                      <div className="text-[11px] text-[#6E6875] truncate">{u.address}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#franquia" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1 flex items-center gap-1.5">
              <span>Franquias</span>
              <span className="bg-[#A84826] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Expansão
              </span>
            </a>

            <a href="#blog" className="whitespace-nowrap hover:text-[#A84826] transition-colors py-1">
              Blog
            </a>
          </nav>

          {/* Action CTAs (Protected with shrink-0) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a 
              href={`https://wa.me/${siteConfig.mainWhatsapp}?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20a%20Escola%20Carneiro.`}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2.5 rounded-full text-emerald-700 bg-white hover:bg-emerald-50 border border-[#E5DFD5] transition-all shadow-sm shrink-0"
              title="Fale conosco no WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="btn-primary flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shrink-0 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="whitespace-nowrap text-white font-bold hidden sm:inline">Aula Experimental</span>
              <span className="whitespace-nowrap text-white font-bold sm:hidden">Agendar</span>
            </button>

            {/* Mobile Menu Button (Shows on screens < xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-xl bg-white border border-[#E5DFD5] text-[#18171A] hover:bg-[#F4EFEA] shrink-0"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E5DFD5] mt-3 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-base">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Início
            </a>
            <a 
              href="#cursos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Cursos (Pintura, Desenho, Escultura)
            </a>
            <a 
              href="#atelier-video" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1 flex items-center justify-between"
            >
              <span>O Atelier em Movimento</span>
              <span className="text-xs bg-[#A84826] text-white px-2 py-0.5 rounded-full font-bold">Vídeo</span>
            </a>
            <a 
              href="#metodologia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Metodologia & Soft Skills
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Galeria de Obras
            </a>
            <a 
              href="#unidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1 flex items-center justify-between"
            >
              <span>Nossas 8 Unidades (SP e MG)</span>
              <MapPin className="w-4 h-4 text-[#A84826]" />
            </a>
            <a 
              href="#franquia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Seja um Franqueado
            </a>
            <a 
              href="#blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18171A] hover:text-[#A84826] font-semibold py-1"
            >
              Blog Cultural
            </a>
          </nav>

          <div className="pt-4 border-t border-[#E5DFD5] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary w-full py-3.5 rounded-xl text-center font-bold"
            >
              Agendar Aula Experimental Gratuita
            </button>
            <a
              href={`https://wa.me/${siteConfig.mainWhatsapp}?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Escola%20Carneiro.`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-center flex items-center justify-center gap-2 font-bold"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Fale Conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
