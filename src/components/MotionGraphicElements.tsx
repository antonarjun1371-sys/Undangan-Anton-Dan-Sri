import React from 'react';

// Simplified static versions without motion/react animations
export const KineticRings: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 280,
  className = '',
  color = '#D4AF37'
}) => {
  return (
    <div
      className={`relative pointer-events-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export const KineticPulseRadar: React.FC<{ className?: string; color?: string }> = () => {
  return null;
};

export const KineticLightBeam: React.FC<{ className?: string }> = () => {
  return null;
};

export const KineticLineFlourish: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 my-2 ${className}`}>
      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-[#D4AF37]"
      >
        <path
          d="M60 6C45 6 35 1 20 1C10 1 0 6 0 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="w-2.5 h-2.5 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] rounded-xs rotate-45 shadow-[0_0_8px_#D4AF37]" />

      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-[#D4AF37]"
      >
        <path
          d="M0 6C15 6 25 1 40 1C50 1 60 6 60 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const MotionGraphicDiamond: React.FC<{
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
}> = () => {
  return null;
};
