import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { HERO_COVER_IMAGE, WEDDING_DATE_STRING } from '../data/weddingData';
import { FallingParticles } from './FallingParticles';

interface CoverEnvelopeProps {
  isOpen: boolean;
  guestName: string;
  onOpen: () => void;
}

export const CoverEnvelope: React.FC<CoverEnvelopeProps> = ({
  isOpen,
  guestName,
  onOpen,
}) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-cover"
          // EXIT ANIMATION: Envelope lifts up and dissolves away
          initial={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ 
            opacity: 0, 
            y: -1000, 
            scale: 0.9,
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full bg-black overflow-hidden"
        >
          {/* FULL SCREEN BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={HERO_COVER_IMAGE}
              alt="Anton & Sri Wedding Cover"
              className="w-full h-full object-cover brightness-95 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/15" />
            {/* Romantic falling stardust on cover screen */}
            <FallingParticles />
          </div>

          {/* COVER CONTENT CONTAINER - FULL SCREEN */}
          <motion.div
            // ENTRANCE ANIMATION: Smooth scale-up and fade-in
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-between py-10 px-6 sm:py-14 sm:px-12 text-center overflow-y-auto"
          >
            {/* TOP HEADER SECTION */}
            <div className="flex flex-col items-center space-y-2.5 mt-1 sm:mt-4">
              {/* MONOGRAM BADGE */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF8F5]/90 border-2 border-[#D4AF37] flex items-center justify-center shadow-xl mb-1">
                <span className="font-script text-xl sm:text-2xl text-[#8B6B23] font-bold">A & S</span>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#D4AF37] text-xs font-cinzel text-amber-200 uppercase tracking-widest font-bold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Undangan Pernikahan Digital</span>
              </div>
            </div>

            {/* CENTER WEDDING TITLE - TRANSPARENT LUXURY FRAME (SUBTLE 5% BLUR) */}
            <div className="my-auto py-6 px-5 sm:py-8 sm:px-8 flex flex-col items-center max-w-md w-full space-y-3 bg-black/35 backdrop-blur-[1.5px] rounded-3xl border border-[#D4AF37]/60 shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/15 relative">
              {/* Inner Decorative Corner Frame Accents */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/80 rounded-tl pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/80 rounded-tr pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/80 rounded-bl pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/80 rounded-br pointer-events-none" />

              <motion.p
                animate={{
                  y: [0, -2, 0],
                  opacity: [0.92, 1, 0.92],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-xs uppercase tracking-[0.25em] text-amber-200 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              >
                The Wedding Of
              </motion.p>
              <motion.h1
                animate={{
                  y: [0, -3, 0],
                  scale: [1, 1.012, 1],
                  filter: [
                    "drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(212,175,55,0.25))",
                    "drop-shadow(0 5px 15px rgba(0,0,0,0.95)) drop-shadow(0 0 16px rgba(212,175,55,0.55))",
                    "drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(212,175,55,0.25))"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="font-serif-wedding text-4xl sm:text-6xl text-white font-extrabold leading-tight will-change-transform"
              >
                Anton{" "}
                <motion.span
                  animate={{
                    rotate: [0, 2.5, -2.5, 0],
                    scale: [1, 1.04, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block font-script text-3xl sm:text-5xl text-[#F3E5AB] font-normal will-change-transform"
                >
                  &
                </motion.span>{" "}
                Sri
              </motion.h1>
              <p className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#F3E5AB] mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {WEDDING_DATE_STRING}
              </p>

              <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1.5" />

              {/* Guest Name Section */}
              <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-[#D4AF37]/50 shadow-inner">
                <p className="text-xs text-amber-100 font-semibold drop-shadow-sm">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                <h3 className="font-serif-wedding text-xl sm:text-2xl font-bold text-white mt-1 capitalize text-ellipsis overflow-hidden drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {guestName || "Tamu Undangan"}
                </h3>
                <p className="text-[11px] text-amber-200/90 font-medium italic mt-0.5 drop-shadow-sm">
                  Tanpa Mengurangi Rasa Hormat
                </p>
              </div>

              {/* EMPHASIS ANIMATION: Pulsing "Buka Undangan" Button */}
              <motion.button
                onClick={onOpen}
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 4px 15px rgba(212, 175, 55, 0.4)",
                    "0 8px 25px rgba(212, 175, 55, 0.8)",
                    "0 4px 15px rgba(212, 175, 55, 0.4)"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full max-w-xs py-3 px-6 mt-1 rounded-full bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-white font-semibold text-sm sm:text-base flex items-center justify-center space-x-2.5 cursor-pointer shadow-2xl tracking-wide transition-colors"
              >
                <Mail className="w-4 h-4 animate-bounce" />
                <span>Buka Undangan</span>
                <Heart className="w-4 h-4 fill-white/90 stroke-none" />
              </motion.button>
            </div>

            {/* Bottom Accent Location Text */}
            <p className="text-xs sm:text-sm text-amber-200 font-cinzel tracking-widest pt-3 border-t border-[#D4AF37]/40 w-full max-w-md drop-shadow-md">
              Probolinggo, Jawa Timur
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
