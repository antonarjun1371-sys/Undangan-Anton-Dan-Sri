import React from 'react';
import { MotionPathPetals } from './MotionPathPetals';
import { FallingParticles } from './FallingParticles';
import captureBg from '../assets/Capture.PNG';

export const BackgroundDecorative: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none gpu-accelerated" aria-hidden="true">
      {/* 1. CUSTOM CAPTURE.PNG BACKGROUND IMAGE */}
      <img
        src={captureBg}
        alt="Latar Belakang Undangan"
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />

      {/* 2. SUBTLE WARM OPACITY OVERLAY TO PRESERVE HIGH TEXT LEGIBILITY */}
      <div className="absolute inset-0 bg-[#FAF6F0]/25 mix-blend-soft-light" />

      {/* 3. REPEATING SEAMLESS LUXURY BATIK / DAMASK PATTERN WATERMARK */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B38728' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Kawung Petals --%3E%3Cpath d='M0,40 Q20,20 40,40 Q20,60 0,40' /%3E%3Cpath d='M80,40 Q60,20 40,40 Q60,60 80,40' /%3E%3Cpath d='M40,0 Q20,20 40,40 Q60,20 40,0' /%3E%3Cpath d='M40,80 Q20,60 40,40 Q60,60 40,80' /%3E%3C!-- Corner Flowers --%3E%3Ccircle cx='40' cy='40' r='3.5' fill='%23D4AF37' fill-opacity='0.5' /%3E%3Ccircle cx='0' cy='0' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='80' cy='0' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='0' cy='80' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3Ccircle cx='80' cy='80' r='4' fill='%23D4AF37' fill-opacity='0.4' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 4. SOFT AMBIENT CORNER GLOWS */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FCE8B3]/25 rounded-full blur-2xl opacity-50" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#F9D2D2]/20 rounded-full blur-2xl opacity-40" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#EEDAA2]/25 rounded-full blur-2xl opacity-40" />

      {/* 5. ROYAL GOLD FILIGREE CORNER ORNAMENTS */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 opacity-25 text-[#B38728]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 opacity-25 text-[#B38728] -scale-x-100">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M0 0 L45 0 C45 25 25 45 0 45 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M5 5 L85 5 C70 20 40 40 40 85 L5 85 Z" strokeWidth="1" />
          <path d="M12 12 Q50 15 50 50 Q15 50 12 12 Z" fill="currentColor" fillOpacity="0.12" />
        </svg>
      </div>

      {/* 6. FALLING FLOWER PETALS */}
      <MotionPathPetals />

      {/* 7. SLOW DRIFTING ROMANTIC GOLD & ROSE STARDUST PARTICLES */}
      <FallingParticles />
    </div>
  );
};



