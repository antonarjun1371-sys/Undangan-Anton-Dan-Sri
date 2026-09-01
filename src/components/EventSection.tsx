import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';
import { AKAD_EVENT, RESEPSI_EVENT, GOOGLE_MAPS_LINK } from '../data/weddingData';
import capture123Img from '../assets/Capture123.webp';

export const EventSection: React.FC = () => {
  return (
    <section 
      id="acara" 
      className="py-14 sm:py-18 px-3 sm:px-4 bg-gradient-to-b from-[#4A2E26]/40 via-[#3B221B]/30 to-[#482B22]/40 backdrop-blur-[4px] border-y border-[#D4AF37]/25 scroll-mt-12 relative overflow-hidden content-visibility-auto shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),inset_0_0_50px_rgba(25,10,6,0.15),0_15px_35px_rgba(30,12,8,0.06)]"
    >
      {/* Decorative Multi-layered Warm Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12)_0%,_transparent_65%)]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(250,245,236,0.08)_0%,_transparent_60%)]" 
        aria-hidden="true" 
      />

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto items-center justify-center relative z-10">
        
        {/* ================= 1. AKAD NIKAH CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 55, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] aspect-[9/14] rounded-[160px] sm:rounded-[190px] shadow-[0_20px_50px_rgba(50,15,25,0.35)] overflow-hidden border-2 sm:border-[3px] border-[#5A1422]/60 group transform-gpu"
        >
          {/* Background Image Template Capture123 */}
          <img 
            src={capture123Img} 
            alt="Background Akad Nikah" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Layered Subtle Cream Inner Frame (Bingkai di Dalam Bingkai) */}
          <div 
            className="absolute inset-2.5 sm:inset-3.5 rounded-[148px] sm:rounded-[178px] border border-[#5A1422]/30 bg-gradient-to-b from-[#FFFDF9]/45 via-[#FAF5EC]/25 to-[#F3E9D9]/40 backdrop-blur-[1.5px] shadow-[inset_0_0_25px_rgba(255,255,255,0.5),inset_0_1px_3px_rgba(212,175,55,0.25)] pointer-events-none z-[5]" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-4 sm:inset-5 rounded-[138px] sm:rounded-[168px] border border-[#5A1422]/15 pointer-events-none z-[5]" 
            aria-hidden="true"
          />

          {/* Inner Content Layer Aligned with Screenshot */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 sm:py-14 px-8 text-center text-[#2A181C]">
            
            {/* Top Event Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="w-full pt-4"
            >
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#2A181C] uppercase">
                AKAD NIKAH
              </h3>
              <div className="w-44 sm:w-52 h-[1px] bg-[#2A181C]/40 mx-auto mt-2.5" />
            </motion.div>

            {/* Date Details (Day, Number, Month Year) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="my-auto py-2"
            >
              {/* Day in cursive script */}
              <p className="font-pinyon text-4xl sm:text-5xl text-[#2A181C] italic tracking-wide">
                Kamis
              </p>
              
              {/* Big Maroon Date Number */}
              <p className="font-serif-wedding text-6xl sm:text-7xl font-bold text-[#6B1424] leading-none my-1 tracking-tight">
                10
              </p>

              {/* Month and Year */}
              <p className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#2A181C] uppercase mt-1">
                SEPTEMBER 2026
              </p>

              {/* Time with Clock */}
              <div className="inline-flex items-center justify-center space-x-1.5 mt-3 text-xs sm:text-sm font-bold text-[#2A181C]">
                <span className="w-4 h-4 rounded-full bg-[#6B1424] text-white flex items-center justify-center">
                  <Clock className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="tracking-wide">07:00 WIB s.d Selesai</span>
              </div>
            </motion.div>

            {/* Location & Google Maps Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="w-full pb-4 space-y-1.5"
            >
              <p className="font-serif-wedding text-base sm:text-lg italic text-[#2A181C]">
                Lokasi Acara
              </p>
              <p className="font-serif-wedding text-sm sm:text-base font-bold text-[#2A181C] leading-snug">
                {AKAD_EVENT.venueName}
              </p>
              <p className="font-serif-wedding text-xs sm:text-sm text-[#4A383C] leading-tight max-w-xs mx-auto">
                {AKAD_EVENT.address}
              </p>

              {/* Google Maps Pill Button */}
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 bg-[#4A0D18] hover:bg-[#681424] text-white px-6 py-2 rounded-full text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="tracking-wide">Google Maps</span>
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= 2. RESEPSI CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 55, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] aspect-[9/14] rounded-[160px] sm:rounded-[190px] shadow-[0_20px_50px_rgba(50,15,25,0.35)] overflow-hidden border-2 sm:border-[3px] border-[#5A1422]/60 group transform-gpu"
        >
          {/* Background Image Template Capture123 */}
          <img 
            src={capture123Img} 
            alt="Background Resepsi Pernikahan" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Layered Subtle Cream Inner Frame (Bingkai di Dalam Bingkai) */}
          <div 
            className="absolute inset-2.5 sm:inset-3.5 rounded-[148px] sm:rounded-[178px] border border-[#5A1422]/30 bg-gradient-to-b from-[#FFFDF9]/45 via-[#FAF5EC]/25 to-[#F3E9D9]/40 backdrop-blur-[1.5px] shadow-[inset_0_0_25px_rgba(255,255,255,0.5),inset_0_1px_3px_rgba(212,175,55,0.25)] pointer-events-none z-[5]" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-4 sm:inset-5 rounded-[138px] sm:rounded-[168px] border border-[#5A1422]/15 pointer-events-none z-[5]" 
            aria-hidden="true"
          />

          {/* Inner Content Layer Aligned with Screenshot */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 sm:py-14 px-8 text-center text-[#2A181C]">
            
            {/* Top Event Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="w-full pt-4"
            >
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#2A181C] uppercase">
                RESEPSI
              </h3>
              <div className="w-44 sm:w-52 h-[1px] bg-[#2A181C]/40 mx-auto mt-2.5" />
            </motion.div>

            {/* Date Details (Day, Number, Month Year) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="my-auto py-2"
            >
              {/* Day in cursive script */}
              <p className="font-pinyon text-4xl sm:text-5xl text-[#2A181C] italic tracking-wide">
                Kamis
              </p>
              
              {/* Big Maroon Date Number */}
              <p className="font-serif-wedding text-6xl sm:text-7xl font-bold text-[#6B1424] leading-none my-1 tracking-tight">
                10
              </p>

              {/* Month and Year */}
              <p className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#2A181C] uppercase mt-1">
                SEPTEMBER 2026
              </p>

              {/* Time with Clock */}
              <div className="inline-flex items-center justify-center space-x-1.5 mt-3 text-xs sm:text-sm font-bold text-[#2A181C]">
                <span className="w-4 h-4 rounded-full bg-[#6B1424] text-white flex items-center justify-center">
                  <Clock className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="tracking-wide">14:00 - 17:00 WIB</span>
              </div>
            </motion.div>

            {/* Location & Google Maps Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="w-full pb-4 space-y-1.5"
            >
              <p className="font-serif-wedding text-base sm:text-lg italic text-[#2A181C]">
                Lokasi Acara
              </p>
              <p className="font-serif-wedding text-sm sm:text-base font-bold text-[#2A181C] leading-snug">
                {RESEPSI_EVENT.venueName}
              </p>
              <p className="font-serif-wedding text-xs sm:text-sm text-[#4A383C] leading-tight max-w-xs mx-auto">
                {RESEPSI_EVENT.address}
              </p>

              {/* Google Maps Pill Button */}
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 bg-[#4A0D18] hover:bg-[#681424] text-white px-6 py-2 rounded-full text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="tracking-wide">Google Maps</span>
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

