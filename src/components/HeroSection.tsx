import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Download, Sparkles } from 'lucide-react';
import { HERO_COVER_IMAGE, WEDDING_DATE, WEDDING_DATE_STRING } from '../data/weddingData';
import { KineticRings, KineticPulseRadar, KineticLineFlourish, KineticLightBeam, MotionGraphicDiamond } from './MotionGraphicElements';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = WEDDING_DATE.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSaveToCalendar = () => {
    const title = encodeURIComponent("Pernikahan Anton & Sri");
    const details = encodeURIComponent("Akad Nikah & Resepsi Pernikahan Anton Dwi Prastia & Sri Yatin. Lokasi: Probolinggo, Jawa Timur");
    const location = encodeURIComponent("Probolinggo, Jawa Timur (-7.804230, 113.213218)");
    const startDate = "20260910T000000Z";
    const endDate = "20260910T100000Z";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section 
      id="slide-2" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 px-3 sm:px-4 text-center overflow-hidden content-visibility-auto"
    >
      {/* Floating Motion Graphic Diamonds */}
      <MotionGraphicDiamond x="6%" y="18%" size={20} delay={0.2} duration={5.5} />
      <MotionGraphicDiamond x="90%" y="22%" size={22} delay={1.8} duration={6} />
      <MotionGraphicDiamond x="8%" y="75%" size={18} delay={1} duration={5} />
      <MotionGraphicDiamond x="88%" y="78%" size={20} delay={2.2} duration={6.5} />

      {/* Decorative Golden Arch Frame with Motion Graphic Sheen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl w-full mx-auto p-5 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9]/98 via-[#FAF8F5]/98 to-[#FAF5EC]/98 border-2 border-[#D4AF37]/60 shadow-[0_10px_40px_rgba(0,0,0,0.25)] text-[#2C2622] overflow-hidden ring-1 ring-[#D4AF37]/30"
      >
        {/* Kinetic Laser Shimmer Beam */}
        <KineticLightBeam />

        {/* Animated Corner Filigree Accents */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
          className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br pointer-events-none" 
        />

        {/* Walimatul 'Ursy Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-2"
        >
          <motion.span 
            animate={{ scale: [1, 1.06, 1], y: [0, -2, 0] }} 
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl sm:text-4xl text-[#D4AF37] font-script drop-shadow-sm inline-block"
          >
            Walimatul 'Ursy
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <KineticLineFlourish className="text-[#D4AF37]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#7A5B1E] font-bold mt-1 mb-2"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Dynamic Heading with Rotating '&' Motion Graphic */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-wedding text-5xl md:text-6xl text-[#1C1815] font-extrabold tracking-tight my-3"
        >
          Anton{' '}
          <motion.span 
            animate={{ 
              rotate: [0, 4, -4, 0],
              scale: [1, 1.08, 1] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block font-script text-4xl md:text-5xl text-[#966E18] font-normal will-change-transform"
          >
            &
          </motion.span>{' '}
          Sri
        </motion.h1>

        {/* Quran Verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="font-serif-wedding italic text-base sm:text-lg text-[#2C2622] font-medium max-w-lg mx-auto leading-relaxed"
        >
          "Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="font-cinzel text-xs font-semibold text-[#7A5B1E] mt-1 mb-6"
        >
          (QS. Ar-Rum: 21)
        </motion.p>

        {/* Wedding Date Display Badge with Pulsing Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF5EC] to-[#FFFDF9] border-2 border-[#D4AF37]/60 shadow-[0_4px_15px_rgba(212,175,55,0.2)] mb-8"
        >
          <Calendar className="w-4 h-4 text-[#7A5B1E] animate-pulse" />
          <span className="font-cinzel text-xs sm:text-sm font-bold text-[#1C1815] tracking-wider">
            {WEDDING_DATE_STRING}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>

        {/* MOTION GRAPHIC COUNTDOWN TIMER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <p className="text-xs font-cinzel tracking-widest text-[#4A3E35] font-semibold uppercase mb-4 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B38728] animate-spin-slow" />
            <span>Hitung Mundur Menuju Hari Bahagia</span>
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {[
              { label: 'Hari', value: timeLeft.days, max: 365 },
              { label: 'Jam', value: timeLeft.hours, max: 24 },
              { label: 'Menit', value: timeLeft.minutes, max: 60 },
              { label: 'Detik', value: timeLeft.seconds, max: 60 },
            ].map((unit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85 + idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -3 }}
                animate={{ scale: [1, 1.025, 1] }}
                className="relative flex flex-col p-2.5 sm:p-3.5 rounded-2xl bg-white/95 border-2 border-[#D6C4AD] shadow-md text-center overflow-hidden group hover:border-[#D4AF37] transition-all"
              >
                {/* Motion Graphic Dial Arc */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    className="animate-spin-slow"
                  />
                </svg>

                <span className="font-serif-wedding text-2xl sm:text-3xl font-extrabold text-[#7A5B1E] drop-shadow-sm relative z-10">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#4A3E35] uppercase font-bold mt-0.5 tracking-wider relative z-10">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Button: Save to Calendar */}
        <motion.button
          onClick={handleSaveToCalendar}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, backgroundColor: "#3D352E" }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#2C2622] text-[#FCF6BA] font-semibold text-xs sm:text-sm shadow-xl hover:shadow-[0_4px_15px_rgba(44,38,34,0.35)] border border-[#D4AF37]/50 transition-all cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#D4AF37] relative z-10" />
          <span className="relative z-10 font-cinzel tracking-wider">Simpan ke Google Calendar</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

