import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { HERO_COVER_IMAGE, WEDDING_DATE_STRING } from '../data/weddingData';
import { FallingParticles } from './FallingParticles';
import { KineticRings, KineticPulseRadar, MotionGraphicDiamond, KineticLineFlourish } from './MotionGraphicElements';

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-[100dvh] min-h-[100dvh] bg-black overflow-hidden select-none"
        >
          {/* FULL SCREEN BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={HERO_COVER_IMAGE}
              alt="Anton & Sri Wedding Cover"
              className="w-full h-full object-cover brightness-95 scale-105"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            {/* Romantic falling stardust on cover screen */}
            <FallingParticles />
            
            {/* Motion Graphic Floating Sacred Diamonds */}
            <MotionGraphicDiamond x="10%" y="15%" size={20} delay={0} duration={5} />
            <MotionGraphicDiamond x="85%" y="20%" size={24} delay={1.5} duration={6.5} />
            <MotionGraphicDiamond x="15%" y="78%" size={18} delay={0.8} duration={5.5} />
            <MotionGraphicDiamond x="80%" y="82%" size={22} delay={2} duration={7} />
          </div>

          {/* COVER CONTENT CONTAINER - FULL SCREEN */}
          <motion.div
            // ENTRANCE ANIMATION: Smooth scale-up and fade-in
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative z-10 w-full h-full min-h-[100dvh] flex flex-col items-center justify-between py-6 px-4 sm:py-10 sm:px-8 text-center overflow-y-auto no-scrollbar"
          >
            {/* TOP HEADER SECTION WITH KINETIC MOTION GRAPHIC MONOGRAM */}
            <div className="flex flex-col items-center space-y-2 mt-1 sm:mt-2 relative">
              {/* MONOGRAM BADGE WITH RADAR & KINETIC RINGS */}
              <div className="relative flex items-center justify-center">
                <KineticPulseRadar className="w-24 h-24 sm:w-28 sm:h-28" color="#FCF6BA" />
                <KineticRings size={84} color="#D4AF37" className="absolute" />
                
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FAF8F5]/95 border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.7)]"
                >
                  <span className="font-script text-lg sm:text-2xl text-[#8B6B23] font-bold">A & S</span>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-black/60 border border-[#D4AF37] text-[10px] sm:text-xs font-cinzel text-amber-200 uppercase tracking-widest font-bold shadow-lg"
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
                <span>Undangan Pernikahan Digital</span>
              </motion.div>
            </div>

            {/* CENTER WEDDING TITLE - MOTION GRAPHIC LUXURY GLASS FRAME */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="my-auto py-5 px-4 sm:py-7 sm:px-8 flex flex-col items-center max-w-md w-full space-y-2.5 sm:space-y-3 bg-black/40 backdrop-blur-[2px] rounded-3xl border border-[#D4AF37]/70 shadow-[0_15px_45px_rgba(0,0,0,0.6)] ring-1 ring-white/20 relative overflow-hidden"
            >
              {/* Corner Motion Graphic Brackets */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] rounded-tl pointer-events-none" 
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }} 
                transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
                className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] rounded-tr pointer-events-none" 
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }} 
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] rounded-bl pointer-events-none" 
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }} 
                transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
                className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] rounded-br pointer-events-none" 
              />

              <KineticLineFlourish className="text-amber-200/80" />

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
                  scale: [1, 1.015, 1],
                  filter: [
                    "drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(212,175,55,0.35))",
                    "drop-shadow(0 5px 18px rgba(0,0,0,0.95)) drop-shadow(0 0 20px rgba(212,175,55,0.75))",
                    "drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(212,175,55,0.35))"
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
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.06, 1]
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

              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1.5" />

              {/* Guest Name Section - 3D Motion Graphic Card */}
              <div className="w-full max-w-xs [perspective:1000px] my-1">
                <motion.div 
                  animate={{
                    rotateX: [-3, 3, -3],
                    rotateY: [4, -4, 4],
                    y: [-2, 3, -2],
                    boxShadow: [
                      "0 10px 25px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.25), inset 0 1px 2px rgba(255,255,255,0.35)",
                      "0 15px 35px rgba(0,0,0,0.55), 0 0 30px rgba(212,175,55,0.45), inset 0 1px 3px rgba(255,255,255,0.5)",
                      "0 10px 25px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.25), inset 0 1px 2px rgba(255,255,255,0.35)"
                    ]
                  }}
                  transition={{
                    rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 6,
                    rotateY: 0,
                    z: 20,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 35px rgba(212,175,55,0.6), inset 0 1px 3px rgba(255,255,255,0.6)"
                  }}
                  className="relative overflow-hidden bg-[#1A1410]/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37] shadow-2xl [transform-style:preserve-3d]"
                >
                  {/* 3D Corner Filigree Accents */}
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] rounded-tl pointer-events-none [transform:translateZ(15px)]" />
                  <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] rounded-tr pointer-events-none [transform:translateZ(15px)]" />
                  <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] rounded-bl pointer-events-none [transform:translateZ(15px)]" />
                  <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] rounded-br pointer-events-none [transform:translateZ(15px)]" />

                  <p className="text-xs text-[#E6DCCF] font-cinzel font-bold tracking-wider drop-shadow-sm [transform:translateZ(12px)]">
                    Kepada Yth. Bapak/Ibu/Saudara/i:
                  </p>
                  
                  <motion.h3 
                    className="font-serif-wedding text-2xl sm:text-3xl font-extrabold text-white mt-1.5 capitalize text-ellipsis overflow-hidden drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] [transform:translateZ(24px)] select-none"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {guestName || "Tamu Undangan"}
                  </motion.h3>

                  {/* Subtle 3D Decorative Gold Divider */}
                  <div className="w-16 h-[1.5px] mx-auto bg-[#D4AF37] my-1.5 [transform:translateZ(16px)]" />

                  <p className="text-[11px] text-[#D4AF37] font-medium italic drop-shadow-sm [transform:translateZ(10px)]">
                    Tanpa Mengurangi Rasa Hormat
                  </p>
                </motion.div>
              </div>

              {/* EMPHASIS 3D MOTION GRAPHIC: Buka Undangan Button with 3D Floating Geometry & Text Depth */}
              <div className="w-full max-w-xs flex justify-center [perspective:1000px] mt-2 mb-1">
                <motion.button
                  onClick={onOpen}
                  animate={{
                    scale: [1, 1.04, 1],
                    rotateX: [0, 6, -3, 0],
                    rotateY: [-4, 4, -4],
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    boxShadow: [
                      "0 12px 28px rgba(0, 0, 0, 0.4), 0 0 25px rgba(212, 175, 55, 0.6), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.3)",
                      "0 18px 40px rgba(0, 0, 0, 0.5), 0 0 45px rgba(255, 235, 150, 0.9), inset 0 2px 6px rgba(255,255,255,0.9), inset 0 -4px 8px rgba(0,0,0,0.4)",
                      "0 12px 28px rgba(0, 0, 0, 0.4), 0 0 25px rgba(212, 175, 55, 0.6), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotateX: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: 10,
                    rotateY: 0,
                    z: 25,
                    boxShadow: "0 22px 45px rgba(0, 0, 0, 0.6), 0 0 50px rgba(255, 235, 150, 1), inset 0 2px 8px rgba(255,255,255,1)"
                  }}
                  whileTap={{ scale: 0.95, z: 0 }}
                  style={{
                    background: 'linear-gradient(115deg, #8C5F11 0%, #D4AF37 18%, #FFF9D2 38%, #E5C365 58%, #B8860B 80%, #8C5F11 100%)',
                    backgroundSize: '240% 100%',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative overflow-hidden w-full py-4 px-7 rounded-full text-[#1C1405] font-bold text-sm sm:text-base flex items-center justify-center space-x-3 cursor-pointer tracking-wider transition-all border-2 border-[#FFFDF0] drop-shadow-2xl"
                >
                  {/* 3D Expanding Kinetic Halo Wave */}
                  <motion.span
                    className="absolute -inset-2 rounded-full border-2 border-[#FFE89E] pointer-events-none [transform:translateZ(-10px)]"
                    animate={{
                      scale: [1, 1.18, 1.35],
                      opacity: [0.8, 0.35, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  {/* 3D Laser Shimmer Light Sweep */}
                  <motion.div
                    className="absolute inset-0 w-28 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-30deg] pointer-events-none"
                    animate={{
                      x: ['-160%', '360%'],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.4,
                      ease: "easeInOut",
                    }}
                  />

                  {/* 3D Icon Left */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center [transform:translateZ(18px)]"
                    animate={{ y: [-1.5, 2.5, -1.5], rotateZ: [-8, 8, -8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#140E03] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
                  </motion.div>

                  {/* 3D Dynamic Embossed Text - Large, Clear, and Bold */}
                  <motion.span
                    className="relative z-10 font-cinzel font-black tracking-[0.2em] text-base sm:text-lg text-[#140E03] [transform:translateZ(24px)] inline-block select-none whitespace-nowrap"
                    animate={{
                      textShadow: [
                        "0 1px 0 #FFF9D2, 0 2px 0 #D4AF37, 0 4px 6px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.7)",
                        "0 1px 0 #FFFFFF, 0 2px 2px #E5C365, 0 5px 10px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.9)",
                        "0 1px 0 #FFF9D2, 0 2px 0 #D4AF37, 0 4px 6px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.7)"
                      ]
                    }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    BUKA UNDANGAN
                  </motion.span>

                  {/* 3D Icon Right */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center [transform:translateZ(18px)]"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#140E03] stroke-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>

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

