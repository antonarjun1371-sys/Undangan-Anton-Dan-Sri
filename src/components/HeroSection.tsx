import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Clock, Download } from 'lucide-react';
import { HERO_COVER_IMAGE, WEDDING_DATE, WEDDING_DATE_STRING } from '../data/weddingData';

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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 px-4 text-center overflow-hidden">
      {/* Hero Background Image with Subtle Parallax & Gradient Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={HERO_COVER_IMAGE}
          alt="Anton & Sri Wedding Background"
          className="w-full h-full object-cover filter brightness-[0.6] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1815]/70 via-[#1C1815]/40 to-transparent" />
      </div>

      {/* Decorative Golden Arch Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full mx-auto p-6 md:p-10 rounded-3xl bg-[#FAF8F5]/95 border border-[#D4AF37]/60 shadow-2xl text-[#2C2622]"
      >
        <div className="flex justify-center mb-3">
          <motion.span 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl text-[#D4AF37] font-script drop-shadow-sm inline-block"
          >
            Walimatul 'Ursy
          </motion.span>
        </div>

        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#7A5B1E] font-bold mb-2">
          Undangan Pernikahan
        </p>

        <h1 className="font-serif-wedding text-5xl md:text-6xl text-[#1C1815] font-extrabold tracking-tight my-3">
          Anton <span className="font-script text-4xl md:text-5xl text-[#966E18] font-normal">&</span> Sri
        </h1>

        <p className="font-serif-wedding italic text-lg text-[#2C2622] font-medium max-w-lg mx-auto">
          "Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        </p>
        <p className="font-cinzel text-xs font-semibold text-[#7A5B1E] mt-1 mb-6">(QS. Ar-Rum: 21)</p>

        {/* Wedding Date Display Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/50 shadow-inner mb-8">
          <Calendar className="w-4 h-4 text-[#7A5B1E]" />
          <span className="font-cinzel text-sm font-bold text-[#1C1815] tracking-wider">
            {WEDDING_DATE_STRING}
          </span>
        </div>

        {/* COUNTDOWN TIMER SECTION */}
        <div className="mb-8">
          <p className="text-xs font-cinzel tracking-widest text-[#4A3E35] font-semibold uppercase mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B38728]" />
            <span>Hitung Mundur Menuju Hari Bahagia</span>
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <motion.div
                key={idx}
                // EMPHASIS ANIMATION: subtle pulsing effect on countdown cards
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                className="flex flex-col p-2 sm:p-3 rounded-xl bg-white border border-[#D6C4AD] shadow-sm text-center"
              >
                <span className="font-serif-wedding text-2xl sm:text-3xl font-extrabold text-[#7A5B1E]">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#4A3E35] uppercase font-bold mt-0.5">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Button: Save to Calendar */}
        <motion.button
          onClick={handleSaveToCalendar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2C2622] text-[#FCF6BA] font-medium text-xs sm:text-sm shadow-md hover:bg-[#3D352E] transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#D4AF37]" />
          <span>Simpan ke Google Calendar</span>
        </motion.button>
      </motion.div>
    </section>
  );
};
