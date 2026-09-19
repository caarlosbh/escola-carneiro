import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Calendar } from 'lucide-react';

export default function VideoShowcaseSection({ onOpenBooking }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="atelier-video" className="py-24 relative bg-white border-b border-[#E5DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2ED] text-[#A84826] text-xs font-bold tracking-wider uppercase mb-3 border border-[#F5D8CC]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Imersão no Ateliê</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18171A] tracking-tight">
              A Arte Ganha Vida em Nossas Salas
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#38343C] font-normal max-w-2xl leading-relaxed">
              Assista à rotina do nosso ateliê. Um ambiente acolhedor, inspirador e estruturado para você desacelerar o ritmo cotidiano e se conectar com sua essência criativa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white font-bold">Agendar Minha Visita</span>
            </button>
          </div>
        </div>

        {/* Big Strategic Cinema Block (Taller box for full visibility) */}
        <div ref={containerRef} className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD5] bg-stone-950 min-h-[460px] sm:min-h-[580px] lg:h-[640px] group">
          <video
            ref={videoRef}
            src="./assets/videos/atelier-motion.mp4"
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-300">
            
            {/* Top Info Badge */}
            <div className="flex items-center justify-between">
              <span className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Vídeo Oficial • Escola Carneiro</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all"
                  aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all"
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>
              </div>
            </div>

            {/* Bottom Quote & Experience Highlights */}
            <div className="max-w-2xl text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-1">
                Metodologia em Ação
              </span>
              <p className="text-xl sm:text-3xl font-display font-normal italic leading-snug">
                “Nossa escola é mais do que um espaço de ensino. É um ambiente vivo de transformação, foco e beleza.”
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-4 text-xs sm:text-sm text-stone-200 font-medium">
                <span>✓ Turmas Reduzidas</span>
                <span>✓ Cavaletes Clássicos</span>
                <span>✓ Materiais de Alto Padrão</span>
                <span>✓ Para Todas as Idades</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
