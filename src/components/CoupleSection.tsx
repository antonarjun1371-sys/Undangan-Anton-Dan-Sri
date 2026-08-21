import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, Sparkles } from 'lucide-react';
import { GROOM, BRIDE } from '../data/weddingData';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="py-20 px-4 max-w-5xl mx-auto text-center relative scroll-mt-12">
      {/* Decorative Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#7A5B1E] text-xs font-cinzel font-bold tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pasangan Mempelai</span>
        </div>
        <h2 className="font-serif-wedding text-4xl sm:text-5xl font-extrabold text-[#1C1815]">
          Mempelai Yang Bahagia
        </h2>
        <p className="font-serif-wedding italic text-base text-[#3B322B] font-medium max-w-xl mx-auto">
          "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:"
        </p>
      </motion.div>

      {/* Couple Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* Floating Heart Badge in center for desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FAF5EC] border-2 border-[#D4AF37] items-center justify-center shadow-lg">
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
          className="relative bg-white rounded-3xl p-8 border border-[#E6DCCF] shadow-xl flex flex-col justify-between items-center text-center group hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500"
        >
          <div className="relative mb-6">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-lg">
              <img
                src={GROOM.avatarUrl}
                alt={GROOM.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-[#2C2622] text-[#D4AF37] px-3 py-1 rounded-full text-xs font-cinzel font-semibold shadow">
              Mempelai Pria
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622]">
              {GROOM.fullName}
            </h3>
            <p className="text-sm font-medium text-[#8B6B23]">
              {GROOM.childOrder} dari
            </p>
            <div className="text-sm text-[#52463C] leading-relaxed">
              <p className="font-semibold">{GROOM.fatherName}</p>
              <p>&</p>
              <p className="font-semibold">{GROOM.motherName}</p>
            </div>
            <p className="text-xs text-[#786C62] italic pt-2 border-t border-[#F2EBE1]">
              "{GROOM.bio}"
            </p>
          </div>

          {GROOM.instagram && (
            <a
              href={`https://instagram.com/${GROOM.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-1.5 text-xs text-[#8B6B23] hover:text-[#2C2622] font-medium bg-[#FAF5EC] px-4 py-2 rounded-full border border-[#D4AF37]/30 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
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
          className="relative bg-white rounded-3xl p-8 border border-[#E6DCCF] shadow-xl flex flex-col justify-between items-center text-center group hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500"
        >
          <div className="relative mb-6">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-lg">
              <img
                src={BRIDE.avatarUrl}
                alt={BRIDE.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-[#2C2622] text-[#D4AF37] px-3 py-1 rounded-full text-xs font-cinzel font-semibold shadow">
              Mempelai Wanita
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622]">
              {BRIDE.fullName}
            </h3>
            <p className="text-sm font-medium text-[#8B6B23]">
              {BRIDE.childOrder} dari
            </p>
            <div className="text-sm text-[#52463C] leading-relaxed">
              <p className="font-semibold">{BRIDE.fatherName}</p>
              <p>&</p>
              <p className="font-semibold">{BRIDE.motherName}</p>
            </div>
            <p className="text-xs text-[#786C62] italic pt-2 border-t border-[#F2EBE1]">
              "{BRIDE.bio}"
            </p>
          </div>

          {BRIDE.instagram && (
            <a
              href={`https://instagram.com/${BRIDE.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-1.5 text-xs text-[#8B6B23] hover:text-[#2C2622] font-medium bg-[#FAF5EC] px-4 py-2 rounded-full border border-[#D4AF37]/30 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{BRIDE.instagram}</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};
