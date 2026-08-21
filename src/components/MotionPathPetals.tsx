import React from 'react';

export const MotionPathPetals: React.FC = () => {
  // Lightweight decorative petals floating using pure hardware-accelerated CSS
  const petals = [
    { id: 1, left: '10%', size: '16px', duration: '12s', delay: '0s' },
    { id: 2, left: '25%', size: '20px', duration: '15s', delay: '3s' },
    { id: 3, left: '45%', size: '14px', duration: '11s', delay: '1s' },
    { id: 4, left: '65%', size: '18px', duration: '14s', delay: '4s' },
    { id: 5, left: '80%', size: '22px', duration: '16s', delay: '2s' },
    { id: 6, left: '92%', size: '15px', duration: '13s', delay: '5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft warm ambient background glow (Hardware-accelerated) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#FAF5EC] via-[#FAF8F5]/80 to-transparent opacity-60" />

      {/* Floating Petals using GPU accelerated CSS animation */}
      {petals.map((pet) => (
        <div
          key={pet.id}
          className="absolute top-[-50px] animate-petal-fall"
          style={{
            left: pet.left,
            width: pet.size,
            height: pet.size,
            animationDuration: pet.duration,
            animationDelay: pet.delay,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          <svg viewBox="0 0 24 24" fill="#D4AF37" className="w-full h-full opacity-40 drop-shadow-sm">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
