import React, { useMemo } from 'react';
import { MotionPathPetals } from './MotionPathPetals';
import { FallingParticles } from './FallingParticles';

export const BackgroundDecorative: React.FC = () => {
  // Sparkle / Bokeh particles in the background
  const sparkles = useMemo(() => [
    { id: 1, top: '15%', left: '10%', size: 4, duration: 4, delay: 0 },
    { id: 2, top: '28%', left: '85%', size: 6, duration: 5, delay: 1 },
    { id: 3, top: '42%', left: '15%', size: 5, duration: 4.5, delay: 2 },
    { id: 4, top: '55%', left: '80%', size: 4, duration: 6, delay: 0.5 },
    { id: 5, top: '68%', left: '20%', size: 6, duration: 5.2, delay: 1.8 },
    { id: 6, top: '82%', left: '75%', size: 5, duration: 4.8, delay: 2.5 },
    { id: 7, top: '92%', left: '30%', size: 4, duration: 5.5, delay: 0.8 },
    { id: 8, top: '8%', left: '60%', size: 5, duration: 4.2, delay: 3 },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. BASE RICH TEXTURED GRADIENT (Warm Ivory Linen & Antique Champagne) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0] via-[#F6EFE6] to-[#FAF5EC]" />

      {/* 2. REPEATING SEAMLESS LUXURY BATIK / DAMASK PATTERN */}
      <div 
        className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B38728' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Kawung Petals --%3E%3Cpath d='M0,40 Q20,20 40,40 Q20,60 0,40' /%3E%3Cpath d='M80,40 Q60,20 40,40 Q60,60 80,40' /%3E%3Cpath d='M40,0 Q20,20 40,40 Q60,20 40,0' /%3E%3Cpath d='M40,80 Q20,60 40,40 Q60,60 40,80' /%3E%3C!-- Corner Flowers --%3E%3Ccircle cx='40' cy='40' r='3.5' fill='%23D4AF37' fill-opacity='0.5' /%3E%3Ccircle cx='0' cy='0' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='80' cy='0' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='0' cy='80' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='80' cy='80' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3C!-- Inner diamond flourishes --%3E%3Cpath d='M20,20 L60,20 L60,60 L20,60 Z' stroke-dasharray='1,3' stroke='%23C5A028' opacity='0.6' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 3. SOFT ORGANIC WATERCOLOR & GOLD LIGHT GLOWS */}
      {/* Top Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#FCE8B3]/50 via-[#F3E5AB]/20 to-transparent rounded-full blur-3xl opacity-70" />
      {/* Mid Left Ambient Glow */}
      <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-radial from-[#F9D2D2]/35 via-[#FDE8BA]/20 to-transparent rounded-full blur-3xl opacity-60" />
      {/* Mid Right Ambient Glow */}
      <div className="absolute top-[65%] -right-32 w-[600px] h-[600px] bg-radial from-[#EEDAA2]/45 via-[#FAF5EC]/20 to-transparent rounded-full blur-3xl opacity-65" />

      {/* 4. LARGE ARABESQUE / GUNUNGAN WATERMARK EMBOSS (Subtle, elegant) */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[480px] h-[480px] opacity-[0.06] text-[#8B6B23] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M100 5 C75 35 40 70 40 110 C40 150 70 185 100 195 C130 185 160 150 160 110 C160 70 125 35 100 5 Z M100 25 C120 50 145 80 145 110 C145 140 120 170 100 178 C80 170 55 140 55 110 C55 80 80 50 100 25 Z" />
          <circle cx="100" cy="110" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="110" r="16" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] opacity-[0.05] text-[#8B6B23] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 10 L115 70 L175 70 L125 105 L145 165 L100 130 L55 165 L75 105 L25 70 L85 70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. ROYAL GOLD FILIGREE CORNER ORNAMENTS */}
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 opacity-30 text-[#B38728]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
          <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.25" />
          <path d="M0 70 Q30 70 70 30 Q70 0 70 0" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 opacity-30 text-[#B38728] -scale-x-100">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
          <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.25" />
          <path d="M0 70 Q30 70 70 30 Q70 0 70 0" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-36 sm:h-36 opacity-30 text-[#B38728] -scale-y-100">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
          <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.25" />
          <path d="M0 70 Q30 70 70 30 Q70 0 70 0" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 opacity-30 text-[#B38728] -scale-x-100 -scale-y-100">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
          <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.25" />
          <path d="M0 70 Q30 70 70 30 Q70 0 70 0" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* 6. FLOATING BOKEH / FAIRY DUST GLOWS */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="absolute rounded-full bg-gradient-to-r from-[#FFF5C0] to-[#E5C158] opacity-60 shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse"
          style={{
            top: sp.top,
            left: sp.left,
            width: `${sp.size}px`,
            height: `${sp.size}px`,
            animationDuration: `${sp.duration}s`,
            animationDelay: `${sp.delay}s`,
          }}
        />
      ))}

      {/* 7. FALLING FLOWER PETALS (Rose, Sakura, Melati, Gold) */}
      <MotionPathPetals />

      {/* 8. SLOW DRIFTING ROMANTIC GOLD & ROSE STARDUST PARTICLES */}
      <FallingParticles />
    </div>
  );
};
