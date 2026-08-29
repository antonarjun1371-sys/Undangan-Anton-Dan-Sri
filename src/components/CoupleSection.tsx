import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, Sparkles } from 'lucide-react';
import { GROOM, BRIDE } from '../data/weddingData';
import { KineticRings, KineticPulseRadar, KineticLineFlourish, KineticLightBeam, MotionGraphicDiamond } from './MotionGraphicElements';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="py-20 px-3 sm:px-4 max-w-5xl mx-auto text-center relative scroll-mt-12 overflow-hidden content-visibility-auto">
      {/* Motion Graphic Floating Sacred Diamonds */}
      <MotionGraphicDiamond x="5%" y="15%" size={20} delay={0.3} duration={6} />
      <MotionGraphicDiamond x="92%" y="18%" size={22} delay={1.5} duration={5.5} />
      <MotionGraphicDiamond x="8%" y="85%" size={18} delay={1} duration={6.5} />
      <MotionGraphicDiamond x="90%" y="80%" size={24} delay={2} duration={7} />

      {/* Decorative Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16 space-y-3 relative"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FAF5EC] to-[#FFFDF9] border border-[#D4AF37]/50 text-[#7A5B1E] text-xs font-cinzel font-bold tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span>Pasangan Mempelai</span>
        </div>
        <h2 className="font-serif-wedding text-4xl sm:text-5xl font-extrabold text-[#1C1815]">
          Mempelai Yang Bahagia
        </h2>
        <KineticLineFlourish className="text-[#D4AF37]" />
        <p className="font-serif-wedding italic text-base sm:text-lg text-[#3B322B] font-medium max-w-xl mx-auto leading-relaxed">
          "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:"
        </p>
      </motion.div>

      {/* Couple Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* Floating Heart Badge in center for desktop with Kinetic Radar */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#FAF5EC] border-2 border-[#D4AF37] items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <KineticPulseRadar color="#D4AF37" className="w-24 h-24" />
          <motion.div
            animate={{ scale: [1, 1.25, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
          </motion.div>
        </div>

        {/* GROOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] flex flex-col justify-between items-center text-center group hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(180,140,70,0.25)] transition-all duration-500 overflow-hidden ring-1 ring-[#D4AF37]/20"
        >
          {/* Kinetic Laser Shimmer Beam */}
          <KineticLightBeam />

          {/* Subtle Corner Filigree Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

          {/* Soft Romantic Floral Watermark in Corner */}
          <div className="absolute -right-8 -top-8 w-32 h-32 opacity-[0.06] text-[#8B6B23] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" />
            </svg>
          </div>

          <div className="relative mb-6 flex items-center justify-center">
            {/* Motion Graphic Kinetic Rings behind Groom Avatar */}
            <div className="absolute -inset-4 flex items-center justify-center opacity-60">
              <KineticRings size={240} color="#D4AF37" />
            </div>
            <KineticPulseRadar className="w-48 h-48 sm:w-56 sm:h-56" color="#D4AF37" />

            <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_8px_25px_rgba(212,175,55,0.35)] ring-4 ring-[#FAF5EC]">
              <img
                src={GROOM.avatarUrl}
                alt={GROOM.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#2C2622] via-[#3D352E] to-[#2C2622] text-[#FCF6BA] border border-[#D4AF37]/60 px-4 py-1 rounded-full text-xs font-cinzel font-bold shadow-md whitespace-nowrap">
              Mempelai Pria
            </div>
          </div>

          <div className="space-y-3 w-full relative z-10">
            <motion.h3
              className="font-serif-wedding text-3xl sm:text-4xl font-extrabold text-[#2C2622] tracking-wide relative inline-block cursor-default select-none"
              initial={{ opacity: 0, y: 15, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -2 }}
            >
              {/* Dynamic Motion Graphic 3D Gradient Text Shimmer */}
              <motion.span
                className="bg-gradient-to-r from-[#2C2622] via-[#8B6B23] to-[#2C2622] bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {GROOM.fullName}
              </motion.span>

              {/* Kinetic Floating Gold Accent Underline */}
              <motion.span
                className="block h-[2px] w-0 mx-auto mt-1 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                whileInView={{ w: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              />
            </motion.h3>
            <div className="inline-block px-3 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 text-xs font-semibold text-[#8B6B23]">
              {GROOM.childOrder} dari
            </div>
            <div className="text-sm sm:text-base text-[#52463C] leading-relaxed bg-[#FAF8F5]/80 p-3 rounded-2xl border border-[#EBE3D5]">
              <p className="font-semibold text-[#2C2622]">{GROOM.fatherName}</p>
              <p className="font-script text-base text-[#AA771C]">&</p>
              <p className="font-semibold text-[#2C2622]">{GROOM.motherName}</p>
            </div>
            <p className="text-xs sm:text-sm text-[#786C62] italic pt-2 px-2 leading-relaxed">
              "{GROOM.bio}"
            </p>
          </div>

          {GROOM.instagram && (
            <a
              href={`https://instagram.com/${GROOM.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 relative z-10 inline-flex items-center space-x-1.5 text-xs text-[#8B6B23] hover:text-[#2C2622] font-semibold bg-gradient-to-r from-[#FAF5EC] to-[#F3E5AB]/40 hover:from-[#F3E5AB]/60 hover:to-[#FAF5EC] px-4 py-2 rounded-full border border-[#D4AF37]/40 transition-all shadow-sm cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-[#AA771C]" />
              <span>{GROOM.instagram}</span>
            </a>
          )}
        </motion.div>

        {/* BRIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] flex flex-col justify-between items-center text-center group hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(180,140,70,0.25)] transition-all duration-500 overflow-hidden ring-1 ring-[#D4AF37]/20"
        >
          {/* Kinetic Laser Shimmer Beam */}
          <KineticLightBeam />

          {/* Subtle Corner Filigree Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

          {/* Soft Romantic Floral Watermark in Corner */}
          <div className="absolute -left-8 -top-8 w-32 h-32 opacity-[0.06] text-[#8B6B23] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" />
            </svg>
          </div>

          <div className="relative mb-6 flex items-center justify-center">
            {/* Motion Graphic Kinetic Rings behind Bride Avatar */}
            <div className="absolute -inset-4 flex items-center justify-center opacity-60">
              <KineticRings size={240} color="#D4AF37" />
            </div>
            <KineticPulseRadar className="w-48 h-48 sm:w-56 sm:h-56" color="#D4AF37" />

            <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_8px_25px_rgba(212,175,55,0.35)] ring-4 ring-[#FAF5EC]">
              <img
                src={BRIDE.avatarUrl}
                alt={BRIDE.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#2C2622] via-[#3D352E] to-[#2C2622] text-[#FCF6BA] border border-[#D4AF37]/60 px-4 py-1 rounded-full text-xs font-cinzel font-bold shadow-md whitespace-nowrap">
              Mempelai Wanita
            </div>
          </div>

          <div className="space-y-3 w-full relative z-10">
            <motion.h3
              className="font-serif-wedding text-3xl sm:text-4xl font-extrabold text-[#2C2622] tracking-wide relative inline-block cursor-default select-none"
              initial={{ opacity: 0, y: 15, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              whileHover={{ scale: 1.04, y: -2 }}
            >
              {/* Dynamic Motion Graphic 3D Gradient Text Shimmer */}
              <motion.span
                className="bg-gradient-to-r from-[#2C2622] via-[#8B6B23] to-[#2C2622] bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {BRIDE.fullName}
              </motion.span>

              {/* Kinetic Floating Gold Accent Underline */}
              <motion.span
                className="block h-[2px] w-0 mx-auto mt-1 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                whileInView={{ w: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              />
            </motion.h3>
            <div className="inline-block px-3 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 text-xs font-semibold text-[#8B6B23]">
              {BRIDE.childOrder} dari
            </div>
            <div className="text-sm sm:text-base text-[#52463C] leading-relaxed bg-[#FAF8F5]/80 p-3 rounded-2xl border border-[#EBE3D5]">
              <p className="font-semibold text-[#2C2622]">{BRIDE.fatherName}</p>
              <p className="font-script text-base text-[#AA771C]">&</p>
              <p className="font-semibold text-[#2C2622]">{BRIDE.motherName}</p>
            </div>
            <p className="text-xs sm:text-sm text-[#786C62] italic pt-2 px-2 leading-relaxed">
              "{BRIDE.bio}"
            </p>
          </div>

          {BRIDE.instagram && (
            <a
              href={`https://instagram.com/${BRIDE.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 relative z-10 inline-flex items-center space-x-1.5 text-xs text-[#8B6B23] hover:text-[#2C2622] font-semibold bg-gradient-to-r from-[#FAF5EC] to-[#F3E5AB]/40 hover:from-[#F3E5AB]/60 hover:to-[#FAF5EC] px-4 py-2 rounded-full border border-[#D4AF37]/40 transition-all shadow-sm cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-[#AA771C]" />
              <span>{BRIDE.instagram}</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

