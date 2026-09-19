import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { X, TrendingUp, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function FranchiseModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetCity, setTargetCity] = useState('');
  const [capital, setCapital] = useState('R$ 500 mil a R$ 700 mil');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `Olá! Meu nome é *${name}*.\n` +
      `Tenho interesse em ser um *Franqueado Escola Carneiro*.\n` +
      `• *Cidade / Região de interesse:* ${targetCity}\n` +
      `• *Capital disponível:* ${capital}\n` +
      `• *E-mail:* ${email}\n` +
      `• *Telefone:* ${phone}`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${siteConfig.mainWhatsapp}?text=${encodedMsg}`;

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
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Expansão de Negócios 2026</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#18171A]">
                Seja um Franqueado Escola Carneiro
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5663] mt-1 font-normal">
                Preencha seus dados para receber a apresentação executiva e agendar uma conversa com nossa equipe de expansão.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Roberto Alencar"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#18171A] mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#18171A] mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Cidade e Estado de Interesse para Abertura *
                </label>
                <input
                  type="text"
                  required
                  value={targetCity}
                  onChange={(e) => setTargetCity(e.target.value)}
                  placeholder="Ex: Campinas - SP / Ribeirão Preto - SP"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#A84826] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18171A] mb-1">
                  Capital de Investimento Disponível
                </label>
                <select
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-[#18171A] text-sm focus:outline-none focus:border-[#A84826] focus:bg-white font-medium"
                >
                  <option value="R$ 400 mil a R$ 500 mil">R$ 400 mil a R$ 500 mil</option>
                  <option value="R$ 500 mil a R$ 700 mil">R$ 500 mil a R$ 700 mil (Recomendado)</option>
                  <option value="Acima de R$ 700 mil">Acima de R$ 700 mil (Múltiplas unidades)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-white font-bold">Enviar Interesse & Falar com Expansão</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <p className="text-[11px] text-[#6E6875] text-center font-medium">
                Seus dados são confidenciais e protegidos pela LGPD.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#18171A]">
              Interesse Registrado com Sucesso!
            </h3>
            <p className="text-sm text-[#38343C] font-normal max-w-sm mx-auto">
              Nossa equipe de expansão recebeu sua solicitação e entrará em contato via WhatsApp para apresentar o dossiê de franquia da Escola Carneiro.
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
