import React, { useState } from 'react';
import { units, siteConfig } from '../data/siteData';
import { X, Calendar, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultCourse, defaultUnitId }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(defaultUnitId || units[0].id);
  const [course, setCourse] = useState(defaultCourse || 'Pintura a Óleo');
  const [ageGroup, setAgeGroup] = useState('Adulto');
  const [period, setPeriod] = useState('Tarde');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentUnitObj = units.find(u => u.id === selectedUnit) || units[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const targetWhatsapp = currentUnitObj.whatsapp || siteConfig.mainWhatsapp;
    const msg = `Olá! Meu nome é *${name}*.\n` +
      `Gostaria de agendar uma *Aula Experimental Gratuita* na *${currentUnitObj.name}*.\n` +
      `• *Curso de interesse:* ${course}\n` +
      `• *Faixa etária:* ${ageGroup}\n` +
      `• *Turno preferido:* ${period}\n` +
      `• *Telefone:* ${phone}`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${targetWhatsapp}?text=${encodedMsg}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] shadow-2xl relative my-8 text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#EAE4DC] text-[#18171A] flex items-center justify-center transition-colors border border-[#E5DFD5]"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FDF2ED] text-[#A84826] text-xs font-bold uppercase tracking-wider mb-2 border border-[#F5D8CC]">
                <Calendar className="w-3.5 h-3.5" />
                <span>100% Gratuita & Sem Compromisso</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#18171A]">
                Agende sua Aula Experimental
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5663] mt-1 font-normal">
                Venha conhecer o ateliê, sentir as tintas e experimentar nossa metodologia na prática.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Mariana Castro"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Seu WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (11) 99999-9999"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white transition-colors"
                />
              </div>

              {/* Unidade */}
              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Escolha a Unidade *
                </label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] text-sm focus:outline-none focus:border-[#A84826] focus:bg-white font-medium"
                >
                  <optgroup label="São Paulo - SP">
                    {units.filter(u => u.state === 'SP').map(u => (
                      <option key={u.id} value={u.id}>
                        {u.name} — {u.district}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Minas Gerais (BH e Nova Lima)">
                    {units.filter(u => u.state === 'MG').map(u => (
                      <option key={u.id} value={u.id}>
                        {u.name} — {u.district}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Curso & Faixa Etária */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#18171A] mb-1">
                    Curso de Interesse
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] text-xs sm:text-sm focus:outline-none focus:border-[#A84826] focus:bg-white font-medium"
                  >
                    <option value="Pintura a Óleo">Pintura a Óleo</option>
                    <option value="Desenho Artístico & Grafite">Desenho & Grafite</option>
                    <option value="Escultura em Clay">Escultura em Clay</option>
                    <option value="Quero experimentar todos">Quero experimentar todos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#18171A] mb-1">
                    Faixa Etária
                  </label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] text-xs sm:text-sm focus:outline-none focus:border-[#A84826] focus:bg-white font-medium"
                  >
                    <option value="Infantil (4 a 12 anos)">Infantil (4 a 12 anos)</option>
                    <option value="Jovem (13 a 17 anos)">Jovem (13 a 17 anos)</option>
                    <option value="Adulto (18+)">Adulto (18+)</option>
                    <option value="Melhor Idade (Sênior)">Melhor Idade (Sênior)</option>
                  </select>
                </div>
              </div>

              {/* Turno */}
              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Preferência de Horário
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {['Manhã', 'Tarde', 'Noite', 'Sábado'].map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setPeriod(t)}
                      className={`py-2.5 rounded-xl font-bold transition-all ${
                        period === t
                          ? 'btn-primary shadow-sm'
                          : 'bg-[#FAF8F5] text-[#18171A] hover:bg-[#EAE4DC] border border-[#E5DFD5]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-white font-bold">Confirmar & Abrir no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <p className="text-[11px] text-[#6E6875] text-center font-medium">
                Sua mensagem será enviada diretamente para a coordenação da <strong>{currentUnitObj.name}</strong>.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#18171A]">
              Agendamento Encaminhado!
            </h3>
            <p className="text-sm text-[#38343C] font-normal max-w-sm mx-auto">
              Estamos abrindo o WhatsApp da <strong>{currentUnitObj.name}</strong> para agendar o melhor dia e horário para sua aula experimental gratuita.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-dark px-8 py-2.5 rounded-full text-white text-xs font-bold"
              >
                Concluir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
