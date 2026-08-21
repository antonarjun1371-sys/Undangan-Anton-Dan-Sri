import React, { useMemo } from 'react';

interface PetalConfig {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayType: 1 | 2 | 3 | 4;
  petalType: 'rose' | 'sakura' | 'jasmine' | 'gold';
  opacity: number;
  blur?: boolean;
}

export const MotionPathPetals: React.FC = () => {
  // Pre-configured diverse and balanced petals for continuous, smooth organic falling flow
  const petals: PetalConfig[] = useMemo(() => [
    { id: 1, left: '5%', size: 18, duration: 14, delay: 0, swayType: 1, petalType: 'rose', opacity: 0.65 },
    { id: 2, left: '12%', size: 14, duration: 18, delay: 3, swayType: 2, petalType: 'gold', opacity: 0.55 },
    { id: 3, left: '20%', size: 22, duration: 16, delay: 1.5, swayType: 3, petalType: 'sakura', opacity: 0.7 },
    { id: 4, left: '28%', size: 12, duration: 22, delay: 6, swayType: 4, petalType: 'jasmine', opacity: 0.45 },
    { id: 5, left: '35%', size: 19, duration: 15, delay: 4, swayType: 1, petalType: 'rose', opacity: 0.6 },
    { id: 6, left: '42%', size: 15, duration: 19, delay: 8, swayType: 2, petalType: 'gold', opacity: 0.65 },
    { id: 7, left: '50%', size: 24, duration: 13, delay: 2, swayType: 3, petalType: 'sakura', opacity: 0.75 },
    { id: 8, left: '58%', size: 13, duration: 20, delay: 7, swayType: 4, petalType: 'jasmine', opacity: 0.5 },
    { id: 9, left: '66%', size: 20, duration: 15, delay: 0.8, swayType: 1, petalType: 'rose', opacity: 0.7 },
    { id: 10, left: '74%', size: 16, duration: 17, delay: 5.2, swayType: 2, petalType: 'gold', opacity: 0.6 },
    { id: 11, left: '82%', size: 23, duration: 14, delay: 3.5, swayType: 3, petalType: 'sakura', opacity: 0.65 },
    { id: 12, left: '90%', size: 15, duration: 21, delay: 9, swayType: 4, petalType: 'jasmine', opacity: 0.55 },
    { id: 13, left: '96%', size: 19, duration: 16, delay: 1.2, swayType: 1, petalType: 'rose', opacity: 0.6 },
    { id: 14, left: '8%', size: 11, duration: 24, delay: 11, swayType: 3, petalType: 'gold', opacity: 0.4 },
    { id: 15, left: '24%', size: 17, duration: 17, delay: 9.5, swayType: 2, petalType: 'sakura', opacity: 0.65 },
    { id: 16, left: '46%', size: 21, duration: 15, delay: 12, swayType: 4, petalType: 'rose', opacity: 0.7 },
    { id: 17, left: '62%', size: 14, duration: 19, delay: 10.5, swayType: 1, petalType: 'gold', opacity: 0.5 },
    { id: 18, left: '78%', size: 18, duration: 16, delay: 13, swayType: 2, petalType: 'sakura', opacity: 0.6 },
    { id: 19, left: '88%', size: 12, duration: 23, delay: 4.8, swayType: 3, petalType: 'jasmine', opacity: 0.45 },
  ], []);

  const renderPetalSVG = (type: PetalConfig['petalType']) => {
    switch (type) {
      case 'rose':
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,175,55,0.15)]">
            <defs>
              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9D2D2" />
                <stop offset="50%" stopColor="#EEA6A6" />
                <stop offset="100%" stopColor="#D97777" />
              </linearGradient>
            </defs>
            {/* Elegant curved rose petal */}
            <path
              d="M15 3 C9 3, 3 8, 4 16 C5 23, 11 27, 15 27 C19 27, 25 23, 26 16 C27 8, 21 3, 15 3 Z"
              fill="url(#roseGrad)"
            />
            {/* Inner petal vein curve */}
            <path
              d="M15 5 Q14 15 15 25"
              stroke="#FFFFFF"
              strokeWidth="0.6"
              strokeOpacity="0.45"
              fill="none"
            />
          </svg>
        );
      case 'sakura':
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(244,114,182,0.15)]">
            <defs>
              <linearGradient id="sakuraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF1F2" />
                <stop offset="60%" stopColor="#FBCFE8" />
                <stop offset="100%" stopColor="#F472B6" />
              </linearGradient>
            </defs>
            {/* Notched Cherry/Blossom petal */}
            <path
              d="M15 2 C10 6, 4 12, 5 19 C6 25, 11 28, 15 28 C19 28, 24 25, 25 19 C26 12, 20 6, 15 2 C14.5 4, 15.5 4, 15 2 Z"
              fill="url(#sakuraGrad)"
            />
          </svg>
        );
      case 'jasmine':
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.06)]">
            <defs>
              <linearGradient id="jasmineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#FFFDF7" />
                <stop offset="100%" stopColor="#F6E7CB" />
              </linearGradient>
            </defs>
            {/* Pointed Jasmine Melati petal */}
            <path
              d="M15 2 C8 9, 7 19, 15 28 C23 19, 22 9, 15 2 Z"
              fill="url(#jasmineGrad)"
            />
            <path
              d="M15 4 L15 26"
              stroke="#E8D5B5"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
          </svg>
        );
      case 'gold':
      default:
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full drop-shadow-[0_2px_5px_rgba(212,175,55,0.25)]">
            <defs>
              <linearGradient id="goldPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            {/* Royal Gold Shimmering Petal */}
            <path
              d="M15 3 C10 5, 4 11, 6 18 C8 25, 12 27, 15 27 C18 27, 22 25, 24 18 C26 11, 20 5, 15 3 Z"
              fill="url(#goldPetalGrad)"
            />
            <path
              d="M15 5 Q13 16 15 25"
              stroke="#FFF9DB"
              strokeWidth="0.8"
              strokeOpacity="0.7"
            />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none" aria-hidden="true">
      {/* Soft warm ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#FAF5EC] via-[#FAF8F5]/60 to-transparent opacity-50 pointer-events-none" />

      {/* Floating Realistic Petals with natural 3D Flutter and Sway */}
      {petals.map((pet) => (
        <div
          key={pet.id}
          className={`absolute -top-10 petal-sway-${pet.swayType}`}
          style={{
            left: pet.left,
            width: `${pet.size}px`,
            height: `${pet.size}px`,
            animationDuration: `${pet.duration}s`,
            animationDelay: `${pet.delay}s`,
            opacity: pet.opacity,
          }}
        >
          <div className="w-full h-full petal-flutter">
            {renderPetalSVG(pet.petalType)}
          </div>
        </div>
      ))}
    </div>
  );
};
