import React from 'react';
import { Instagram, Heart, Sparkles } from 'lucide-react';
import { GROOM, BRIDE } from '../data/weddingData';
import { FloralBouquetAccent } from './FloralBouquetAccent';

export const CoupleSection: React.FC = () => {
  return (
    <section 
      id="mempelai" 
      className="pt-4 pb-12 sm:pt-6 sm:pb-16 px-3 sm:px-4 max-w-4xl mx-auto relative content-visibility-auto"
    >
      {/* THE MAIN ARCH DOME CARD (KUBAH) WITH SUBTLE LAYERED CREAM DIMENSION */}
      <div className="relative bg-gradient-to-b from-[#FFFDF9]/60 via-[#FAF5EC]/40 to-[#F3E9D9]/55 backdrop-blur-[3px] rounded-[180px] sm:rounded-[260px] border-[2px] sm:border-[2.5px] border-[#5A1422]/70 shadow-[0_20px_50px_rgba(90,20,34,0.08),inset_0_0_30px_rgba(255,255,255,0.45),inset_0_1px_3px_rgba(212,175,55,0.25)] overflow-hidden">
        
        {/* Subtle Ambient Light Reflection for Depth Layer */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/35 via-transparent to-[#5A1422]/[0.02]" 
          aria-hidden="true" 
        />
        
        {/* CARD HEADER & GREETING */}
          <div className="pt-16 sm:pt-20 px-4 sm:px-10 pb-8 text-center relative z-20">
            {/* Greeting */}
            <h3 className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-[#5A1422] tracking-wider mb-3 uppercase">
              Assalamu’alaikum Warahmatullahi Wabarakatuh
            </h3>

            {/* Prayer Quote */}
            <p className="font-serif-wedding text-sm sm:text-base md:text-lg text-[#3E101A] leading-relaxed max-w-md mx-auto italic px-2 font-normal">
              Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
            </p>
          </div>

          {/* ================= 1. GROOM (MEMPELAI PRIA) ================= */}
          <div className="px-4 sm:px-8 pb-10 flex flex-col items-center text-center relative z-20">
            {/* Oval Portrait Frame with Floral Cluster on Left */}
            <div className="relative mb-3 flex items-center justify-center">
              {/* Floral Bouquet Accent Wrapping on the Left */}
              <div className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 w-32 sm:w-44 h-56 sm:h-72 z-30 pointer-events-none">
                <FloralBouquetAccent side="left" className="w-full h-full" />
              </div>

              {/* Oval / Capsule Frame */}
              <div className="relative z-10 w-48 h-64 sm:w-60 sm:h-80 rounded-[100px] sm:rounded-[130px] overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_12px_35px_rgba(70,15,25,0.25)] ring-4 ring-[#FAF5EC] border-2 border-[#5A1422]/40">
                <img
                  src={GROOM.avatarUrl}
                  alt={GROOM.fullName}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[92px] sm:rounded-[122px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Groom Name & Details */}
            <div className="space-y-2 w-full max-w-md">
              {/* Full Formal Name */}
              <h4 className="font-cinzel text-lg sm:text-2xl font-bold text-[#5A1422] tracking-wider uppercase">
                {GROOM.fullName}
              </h4>

              <div className="font-serif-wedding text-sm sm:text-base text-[#4E393E] space-y-0.5 pt-1">
                <p className="italic">{GROOM.childOrder} dari Pasangan:</p>
                <p className="font-semibold text-base sm:text-lg text-[#2F1418]">
                  {GROOM.fatherName} &amp; {GROOM.motherName}
                </p>
              </div>

              {GROOM.bio && (
                <p className="font-serif-wedding text-xs sm:text-sm text-[#5D454A] italic pt-1 px-4 leading-relaxed max-w-sm mx-auto">
                  "{GROOM.bio}"
                </p>
              )}

              {GROOM.instagram && (
                <div className="pt-2">
                  <a
                    href={`https://instagram.com/${GROOM.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#5A1422] hover:text-[#3E101A] font-semibold bg-[#FAF5EC]/90 hover:bg-[#F2E8D8] px-4 py-1.5 rounded-full border border-[#D4AF37] transition-all shadow-sm cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#5A1422]" />
                    <span>{GROOM.instagram}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* ================= MIDDLE FLORAL / HEART DIVIDER ================= */}
          <div className="w-full my-6 px-10 relative flex items-center justify-center z-20">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#5A1422]/40 to-transparent" />
            <div className="absolute z-20 w-10 h-10 rounded-full bg-[#FAF5EC] border-2 border-[#5A1422]/60 flex items-center justify-center shadow-md">
              <Heart className="w-4 h-4 text-[#6B1829] fill-[#6B1829]" />
            </div>
          </div>

          {/* ================= 2. BRIDE (MEMPELAI WANITA) ================= */}
          <div className="px-4 sm:px-8 pb-16 sm:pb-24 flex flex-col items-center text-center relative z-20">
            {/* Oval Portrait Frame with Floral Cluster on Right */}
            <div className="relative mb-3 flex items-center justify-center">
              {/* Floral Bouquet Accent Wrapping on the Right */}
              <div className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 w-32 sm:w-44 h-56 sm:h-72 z-30 pointer-events-none">
                <FloralBouquetAccent side="right" className="w-full h-full" />
              </div>

              {/* Oval / Capsule Frame */}
              <div className="relative z-10 w-48 h-64 sm:w-60 sm:h-80 rounded-[100px] sm:rounded-[130px] overflow-hidden p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_12px_35px_rgba(70,15,25,0.25)] ring-4 ring-[#FAF5EC] border-2 border-[#5A1422]/40">
                <img
                  src={BRIDE.avatarUrl}
                  alt={BRIDE.fullName}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[92px] sm:rounded-[122px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bride Name & Details */}
            <div className="space-y-2 w-full max-w-md">
              {/* Full Formal Name */}
              <h4 className="font-cinzel text-lg sm:text-2xl font-bold text-[#5A1422] tracking-wider uppercase">
                {BRIDE.fullName}
              </h4>

              <div className="font-serif-wedding text-sm sm:text-base text-[#4E393E] space-y-0.5 pt-1">
                <p className="italic">{BRIDE.childOrder} dari Pasangan:</p>
                <p className="font-semibold text-base sm:text-lg text-[#2F1418]">
                  {BRIDE.fatherName} &amp; {BRIDE.motherName}
                </p>
              </div>

              {BRIDE.bio && (
                <p className="font-serif-wedding text-xs sm:text-sm text-[#5D454A] italic pt-1 px-4 leading-relaxed max-w-sm mx-auto">
                  "{BRIDE.bio}"
                </p>
              )}

              {BRIDE.instagram && (
                <div className="pt-2">
                  <a
                    href={`https://instagram.com/${BRIDE.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#5A1422] hover:text-[#3E101A] font-semibold bg-[#FAF5EC]/90 hover:bg-[#F2E8D8] px-4 py-1.5 rounded-full border border-[#D4AF37] transition-all shadow-sm cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#5A1422]" />
                    <span>{BRIDE.instagram}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
    </section>
  );
};
