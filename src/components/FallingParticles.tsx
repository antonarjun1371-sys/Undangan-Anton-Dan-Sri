import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  opacity: number;
  color: string;
}

export const FallingParticles: React.FC = () => {
  // Balanced lightweight particles for ultra smooth 60fps scrolling
  const particles: Particle[] = useMemo(() => {
    const items: Particle[] = [];
    const colors = ['#FCE8B3', '#D4AF37', '#FFF8DC', '#FAD2D2', '#FFE4B5'];
    const total = 18;

    for (let i = 0; i < total; i++) {
      const col = colors[i % colors.length];
      const duration = 12 + ((i * 5) % 12); // 12s to 24s
      const delay = -((i * 2.8) % duration);
      const swayDuration = 3 + ((i * 1.1) % 3);

      items.push({
        id: i,
        left: `${(i * 5.5 + 2) % 96}%`,
        size: 3 + ((i * 1.5) % 3.5),
        duration,
        delay,
        swayDuration,
        opacity: 0.45 + ((i * 2) % 4) * 0.12,
        color: col,
      });
    }
    return items;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[3] overflow-hidden select-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute -top-6 particle-fall"
          style={{
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="particle-sway rounded-full"
            style={{
              animationDuration: `${p.swayDuration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              opacity: p.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
};

