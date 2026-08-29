import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, Navigation } from 'lucide-react';
import { AKAD_EVENT, RESEPSI_EVENT, GOOGLE_MAPS_LINK } from '../data/weddingData';
import { KineticLightBeam, KineticLineFlourish, MotionGraphicDiamond, KineticPulseRadar } from './MotionGraphicElements';

export const EventSection: React.FC = () => {
  return (
    <section id="acara" className="py-20 px-3 sm:px-4 bg-[#FAF5EC]/80 border-y border-[#E6DCCF] scroll-mt-12 relative overflow-hidden content-visibility-auto">
      {/* Floating Diamonds */}
      <MotionGraphicDiamond x="6%" y="20%" size={20} delay={0.4} duration={6} />
      <MotionGraphicDiamond x="92%" y="25%" size={24} delay={1.8} duration={5.8} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel font-bold tracking-widest border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Rangkaian Acara</span>
          </div>
          <h2 className="font-serif-wedding text-4xl sm:text-5xl font-extrabold text-[#2C2622]">
            Jadwal Pernikahan
          </h2>
          <KineticLineFlourish className="text-[#D4AF37]" />
          <p className="font-serif-wedding italic text-base sm:text-lg text-[#786C62]">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
          </p>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* AKAD NIKAH CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] flex flex-col justify-between text-center space-y-6 hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(180,140,70,0.25)] transition-all duration-500 overflow-hidden ring-1 ring-[#D4AF37]/20 group"
          >
            {/* Kinetic Laser Beam */}
            <KineticLightBeam />

            {/* Corner Filigree Accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <KineticPulseRadar color="#D4AF37" className="w-20 h-20" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FAF5EC] to-[#F3E5AB]/40 border border-[#D4AF37]/50 flex items-center justify-center text-[#8B6B23] shadow-md ring-2 ring-white relative z-10 group-hover:rotate-6 transition-transform">
                  <Calendar className="w-8 h-8 text-[#AA771C]" />
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 text-[11px] font-cinzel font-bold text-[#8B6B23] uppercase tracking-widest">
                  Acara Utama
                </span>
                <h3 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#2C2622] mt-2">
                  {AKAD_EVENT.title}
                </h3>
              </div>

              <div className="py-4 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] inline-block w-full space-y-2.5 shadow-inner">
                <div className="flex items-center justify-center space-x-2 text-sm sm:text-base font-bold text-[#2C2622]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{AKAD_EVENT.dateStr}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-[#8B6B23] font-semibold">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{AKAD_EVENT.timeStr}</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[#2C2622] space-y-1.5 pt-1">
                <p className="font-bold text-[#1C1815] text-sm sm:text-base">{AKAD_EVENT.venueName}</p>
                <p className="flex items-center justify-center gap-1.5 text-[#52463C] font-medium leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>{AKAD_EVENT.address}</span>
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full py-3.5 px-5 rounded-full bg-[#2C2622] hover:bg-[#3D352E] text-[#FCF6BA] font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 border border-[#D4AF37]/40 transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Petunjuk Arah Akad</span>
            </a>
          </motion.div>

          {/* RESEPSI CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] flex flex-col justify-between text-center space-y-6 hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(180,140,70,0.25)] transition-all duration-500 overflow-hidden ring-1 ring-[#D4AF37]/20 group"
          >
            {/* Kinetic Laser Beam */}
            <KineticLightBeam />

            {/* Corner Filigree Accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <KineticPulseRadar color="#D4AF37" className="w-20 h-20" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FAF5EC] to-[#F3E5AB]/40 border border-[#D4AF37]/50 flex items-center justify-center text-[#8B6B23] shadow-md ring-2 ring-white relative z-10 group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-8 h-8 text-[#AA771C]" />
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 text-[11px] font-cinzel font-bold text-[#8B6B23] uppercase tracking-widest">
                  Perayaan Syukuran
                </span>
                <h3 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#2C2622] mt-2">
                  {RESEPSI_EVENT.title}
                </h3>
              </div>

              <div className="py-4 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] inline-block w-full space-y-2.5 shadow-inner">
                <div className="flex items-center justify-center space-x-2 text-sm sm:text-base font-bold text-[#2C2622]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{RESEPSI_EVENT.dateStr}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-[#8B6B23] font-semibold">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{RESEPSI_EVENT.timeStr}</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[#2C2622] space-y-1.5 pt-1">
                <p className="font-bold text-[#1C1815] text-sm sm:text-base">{RESEPSI_EVENT.venueName}</p>
                <p className="flex items-center justify-center gap-1.5 text-[#52463C] font-medium leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>{RESEPSI_EVENT.address}</span>
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full py-3.5 px-5 rounded-full bg-[#2C2622] hover:bg-[#3D352E] text-[#FCF6BA] font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 border border-[#D4AF37]/40 transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Petunjuk Arah Resepsi</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
