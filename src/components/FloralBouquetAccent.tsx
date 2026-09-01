import React from 'react';
import realRoseWingImg from '../assets/images/full_garuda_rose_wing.webp';

interface FloralBouquetAccentProps {
  className?: string;
  side?: 'left' | 'right';
}

export const FloralBouquetAccent: React.FC<FloralBouquetAccentProps> = ({
  className = '',
  side = 'left'
}) => {
  return (
    <div
      className={`pointer-events-none select-none relative w-full h-full flex items-center ${
        side === 'left' ? 'justify-end' : 'justify-start -scale-x-100'
      } ${className}`}
      aria-hidden="true"
    >
      {/* Real Full-Length Blooming Garuda Rose Wing along the outer curve */}
      <img
        src={realRoseWingImg}
        alt="Sayap Bunga Mawar Asli Garuda"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain filter drop-shadow-[0_14px_30px_rgba(45,10,20,0.55)]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};


