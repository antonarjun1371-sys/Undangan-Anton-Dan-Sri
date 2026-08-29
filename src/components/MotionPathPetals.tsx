import React, { useMemo } from 'react';

interface PetalConfig {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayType: 1 | 2;
  petalType: 'rose' | 'sakura' | 'gold';
  opacity: number;
}

export const MotionPathPetals: React.FC = () => {
  // Pre-configured balanced petals for continuous, smooth falling flow without frame drops
  const petals: PetalConfig[] = useMemo(() => [
    { id: 1, left: '8%', size: 16, duration: 14, delay: 0, swayType: 1, petalType: 'rose', opacity: 0.65 },
    { id: 2, left: '22%', size: 18, duration: 16, delay: 2.5, swayType: 2, petalType: 'sakura', opacity: 0.65 },
    { id: 3, left: '38%', size: 14, duration: 18, delay: 5, swayType: 1, petalType: 'gold', opacity: 0.6 },
    { id: 4, left: '52%', size: 20, duration: 15, delay: 1, swayType: 2, petalType: 'rose', opacity: 0.7 },
    { id: 5, left: '68%', size: 15, duration: 17, delay: 4, swayType: 1, petalType: 'sakura', opacity: 0.65 },
    { id: 6, left: '82%', size: 19, duration: 14, delay: 2, swayType: 2, petalType: 'gold', opacity: 0.6 },
    { id: 7, left: '94%', size: 16, duration: 16, delay: 6.5, swayType: 1, petalType: 'rose', opacity: 0.65 },
    { id: 8, left: '15%', size: 13, duration: 19, delay: 8, swayType: 2, petalType: 'gold', opacity: 0.55 },
    { id: 9, left: '60%', size: 17, duration: 15, delay: 9.5, swayType: 1, petalType: 'rose', opacity: 0.65 },
  ], []);

  const renderPetalSVG = (type: PetalConfig['petalType']) => {
    switch (type) {
      case 'rose':
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
            <path
              d="M15 3 C9 3, 3 8, 4 16 C5 23, 11 27, 15 27 C19 27, 25 23, 26 16 C27 8, 21 3, 15 3 Z"
              fill="#EEA6A6"
            />
          </svg>
        );
      case 'sakura':
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
            <path
              d="M15 2 C10 6, 4 12, 5 19 C6 25, 11 28, 15 28 C19 28, 24 25, 25 19 C26 12, 20 6, 15 2 C14.5 4, 15.5 4, 15 2 Z"
              fill="#FBCFE8"
            />
          </svg>
        );
      case 'gold':
      default:
        return (
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
            <path
              d="M15 3 C10 5, 4 11, 6 18 C8 25, 12 27, 15 27 C18 27, 22 25, 24 18 C26 11, 20 5, 15 3 Z"
              fill="#FDE68A"
            />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none" aria-hidden="true">
      {petals.map((pet) => (
        <div
          key={pet.id}
          className={`absolute -top-8 petal-sway-${pet.swayType}`}
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

