import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Download, Sparkles } from 'lucide-react';
import { HERO_COVER_IMAGE, WEDDING_DATE, WEDDING_DATE_STRING } from '../data/weddingData';
import { KineticRings, KineticLineFlourish } from './MotionGraphicElements';

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
      className="relative flex flex-col items-center justify-center pt-8 pb-4 px-3 sm:px-4 text-center overflow-hidden content-visibility-auto"
    >
      {/* Decorative Golden Arch Frame */}
      <div className="relative z-10 max-w-2xl w-full mx-auto p-5 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9]/98 via-[#FAF8F5]/98 to-[#FAF5EC]/98 border-2 border-[#D4AF37]/60 shadow-[0_10px_40px_rgba(0,0,0,0.25)] text-[#2C2622] overflow-hidden ring-1 ring-[#D4AF37]/30">
        
        {/* Corner Filigree Accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br pointer-events-none" />

        {/* Walimatul 'Ursy Title */}
        <div className="flex justify-center mb-2">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8B6B23] font-semibold border-b border-[#D4AF37]/40 pb-1">
            Walimatul 'Ursy
          </span>
        </div>

        {/* Bismillah calligraphy text */}
        <div className="my-3 flex justify-center">
          <p className="font-serif text-2xl sm:text-3xl text-[#52463C] tracking-wide" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#786C62] italic max-w-md mx-auto mb-4 font-serif">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan dalam ikatan pernikahan."
        </p>

        {/* COUPLE MAIN HEADLINE NAMES */}
        <h1 className="font-serif-wedding text-4xl sm:text-6xl md:text-7xl font-bold text-[#2C2622] tracking-normal my-2 select-none">
          <span className="bg-gradient-to-r from-[#8B6B23] via-[#D4AF37] to-[#8B6B23] bg-clip-text text-transparent">
            Anton & Sri
          </span>
        </h1>

        <p className="text-xs tracking-[0.25em] text-[#8B6B23] uppercase font-cinzel font-semibold mb-6">
          Anton Dwi Prastia & Sri Yatin
        </p>

        {/* Date Display Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#FAF5EC] border border-[#D4AF37]/60 px-5 py-2 rounded-full text-[#8B6B23] font-cinzel text-xs sm:text-sm font-semibold shadow-sm mb-6">
          <Calendar className="w-4 h-4 text-[#AA771C]" />
          <span>{WEDDING_DATE_STRING}</span>
        </div>

        {/* COUNTDOWN TIMER */}
        <div className="mb-6">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm sm:max-w-md mx-auto">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#FAF5EC] to-[#F3E5AB]/40 border border-[#D4AF37]/50 rounded-2xl p-2.5 sm:p-3 text-center shadow-md"
              >
                <div className="font-serif-wedding text-2xl sm:text-3.5xl font-bold text-[#2C2622] leading-none">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-[#8B6B23] uppercase font-cinzel font-semibold mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save to Calendar Button */}
        <button
          onClick={handleSaveToCalendar}
          className="inline-flex items-center space-x-2 bg-[#2C2622] hover:bg-[#3D352E] text-[#FCF6BA] border border-[#D4AF37] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all shadow-md cursor-pointer hover:shadow-lg"
        >
          <Download className="w-4 h-4 text-[#D4AF37]" />
          <span>Simpan Tanggal ke Google Calendar</span>
        </button>
      </div>
    </section>
  );
};
