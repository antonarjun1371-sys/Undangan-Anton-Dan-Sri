import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, Navigation } from 'lucide-react';
import { AKAD_EVENT, RESEPSI_EVENT, GOOGLE_MAPS_LINK } from '../data/weddingData';

export const EventSection: React.FC = () => {
  return (
    <section id="acara" className="py-20 px-4 bg-[#FAF5EC]/80 border-y border-[#E6DCCF] scroll-mt-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rangkaian Acara</span>
          </div>
          <h2 className="font-serif-wedding text-4xl sm:text-5xl font-bold text-[#2C2622]">
            Jadwal Pernikahan
          </h2>
          <p className="font-serif-wedding italic text-base text-[#786C62]">
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
            className="relative bg-white rounded-3xl p-8 border border-[#E6DCCF] shadow-xl flex flex-col justify-between text-center space-y-6 hover:shadow-2xl transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FAF5EC] border border-[#D4AF37]/40 flex items-center justify-center text-[#8B6B23]">
                <Calendar className="w-7 h-7" />
              </div>

              <div>
                <span className="font-cinzel text-xs font-semibold text-[#8B6B23] uppercase tracking-widest">
                  Acara Utama
                </span>
                <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622] mt-1">
                  {AKAD_EVENT.title}
                </h3>
              </div>

              <div className="py-3 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] inline-block w-full space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#2C2622]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{AKAD_EVENT.dateStr}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#8B6B23] font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{AKAD_EVENT.timeStr}</span>
                </div>
              </div>

              <div className="text-xs text-[#2C2622] space-y-1">
                <p className="font-bold text-[#1C1815]">{AKAD_EVENT.venueName}</p>
                <p className="flex items-center justify-center gap-1 text-[#3B322B] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B38728] flex-shrink-0" />
                  <span>{AKAD_EVENT.address}</span>
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full bg-[#2C2622] text-[#FCF6BA] font-medium text-xs sm:text-sm flex items-center justify-center space-x-2 hover:bg-[#3D352E] transition-colors shadow"
            >
              <Navigation className="w-4 h-4" />
              <span>Petunjuk Arah Akad</span>
            </a>
          </motion.div>

          {/* RESEPSI CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-white rounded-3xl p-8 border border-[#E6DCCF] shadow-xl flex flex-col justify-between text-center space-y-6 hover:shadow-2xl transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FAF5EC] border border-[#D4AF37]/40 flex items-center justify-center text-[#8B6B23]">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <span className="font-cinzel text-xs font-semibold text-[#8B6B23] uppercase tracking-widest">
                  Perayaan Syukuran
                </span>
                <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622] mt-1">
                  {RESEPSI_EVENT.title}
                </h3>
              </div>

              <div className="py-3 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] inline-block w-full space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#2C2622]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{RESEPSI_EVENT.dateStr}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#8B6B23] font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{RESEPSI_EVENT.timeStr}</span>
                </div>
              </div>

              <div className="text-xs text-[#2C2622] space-y-1">
                <p className="font-bold text-[#1C1815]">{RESEPSI_EVENT.venueName}</p>
                <p className="flex items-center justify-center gap-1 text-[#3B322B] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B38728] flex-shrink-0" />
                  <span>{RESEPSI_EVENT.address}</span>
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-white font-medium text-xs sm:text-sm flex items-center justify-center space-x-2 hover:opacity-95 transition-opacity shadow"
            >
              <Navigation className="w-4 h-4" />
              <span>Petunjuk Arah Resepsi</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
