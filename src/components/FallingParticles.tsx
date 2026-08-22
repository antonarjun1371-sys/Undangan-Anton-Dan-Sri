import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  type: 'sparkle' | 'orb' | 'star' | 'dust';
  opacity: number;
  color: string;
  glow: string;
}

export const FallingParticles: React.FC = () => {
  // Generate 45 romantic falling stardust particles with staggered negative delays
  // so particles fill the entire screen immediately upon load
  const particles: Particle[] = useMemo(() => {
    const items: Particle[] = [];
    const colors = [
      { color: '#FCE8B3', glow: 'rgba(252, 232, 179, 0.8)', type: 'sparkle' as const },
      { color: '#D4AF37', glow: 'rgba(212, 175, 55, 0.75)', type: 'star' as const },
      { color: '#FFF8DC', glow: 'rgba(255, 248, 220, 0.9)', type: 'orb' as const },
      { color: '#FAD2D2', glow: 'rgba(250, 210, 210, 0.7)', type: 'dust' as const },
      { color: '#FFE4B5', glow: 'rgba(255, 228, 181, 0.85)', type: 'sparkle' as const },
      { color: '#F3E5AB', glow: 'rgba(243, 229, 171, 0.8)', type: 'orb' as const },
    ];

    const total = 42;
    for (let i = 0; i < total; i++) {
      const col = colors[i % colors.length];
      const duration = 14 + ((i * 7) % 16); // 14s to 29s (slow and graceful)
      // Negative delays ensure particles are distributed vertically on first paint
      const delay = -((i * 3.7) % duration);
      const swayDuration = 3.5 + ((i * 1.3) % 4.5); // 3.5s to 8s

      items.push({
        id: i,
        left: `${(i * 2.38 + 1.5) % 97}%`,
        size: 2.5 + ((i * 1.7) % 4.5), // 2.5px to 7px
        duration,
        delay,
        swayDuration,
        type: col.type,
        opacity: 0.4 + ((i * 3) % 5) * 0.12, // 0.4 to 0.9
        color: col.color,
        glow: col.glow,
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
          className="absolute -top-12 particle-fall"
          style={{
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: 'transform',
          }}
        >
          <div
            className="particle-sway flex items-center justify-center"
            style={{
              animationDuration: `${p.swayDuration}s`,
              width: `${p.size * 2}px`,
              height: `${p.size * 2}px`,
              willChange: 'transform',
            }}
          >
            {p.type === 'sparkle' && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: `${p.size * 2}px`,
                  height: `${p.size * 2}px`,
                  filter: `drop-shadow(0 0 ${p.size}px ${p.glow})`,
                  opacity: p.opacity,
                }}
                className="particle-twinkle"
              >
                <path
                  d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
                  fill={p.color}
                />
              </svg>
            )}

            {p.type === 'star' && (
              <svg
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  width: `${p.size * 1.8}px`,
                  height: `${p.size * 1.8}px`,
                  filter: `drop-shadow(0 0 ${p.size * 1.2}px ${p.glow})`,
                  opacity: p.opacity,
                }}
                className="particle-twinkle"
              >
                <path
                  d="M10 2 L12 7 L17 8 L13 12 L14 17 L10 14 L6 17 L7 12 L3 8 L8 7 Z"
                  fill={p.color}
                />
              </svg>
            )}

            {p.type === 'orb' && (
              <div
                className="rounded-full particle-pulse"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 2}px ${p.size * 0.8}px ${p.glow}`,
                  opacity: p.opacity,
                }}
              />
            )}

            {p.type === 'dust' && (
              <div
                className="rounded-full particle-twinkle"
                style={{
                  width: `${p.size * 0.9}px`,
                  height: `${p.size * 0.9}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 1.5}px ${p.glow}`,
                  opacity: p.opacity,
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
