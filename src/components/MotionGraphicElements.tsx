import React from 'react';
import { motion } from 'motion/react';

/**
 * Kinetic Concentric Rings (Motion Graphic Mandala / Sacred Geometry)
 * Rotates two concentric orbital rings in opposing directions with dashed paths and glittering nodes.
 */
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
      {/* Outer Ring - Clockwise Rotation */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
          opacity="0.3"
        />
        {/* Orbital Nodes */}
        <circle cx="100" cy="8" r="3" fill="#FCF6BA" filter="drop-shadow(0 0 4px #D4AF37)" />
        <circle cx="100" cy="192" r="3" fill="#FCF6BA" filter="drop-shadow(0 0 4px #D4AF37)" />
        <circle cx="8" cy="100" r="3" fill="#FCF6BA" filter="drop-shadow(0 0 4px #D4AF37)" />
        <circle cx="192" cy="100" r="3" fill="#FCF6BA" filter="drop-shadow(0 0 4px #D4AF37)" />
      </motion.svg>

      {/* Inner Ring - Counter-Clockwise Rotation */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100"
          cy="100"
          r="64"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="8 6 2 6"
          opacity="0.6"
        />
        <polygon
          points="100,36 155,132 45,132"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
          opacity="0.25"
        />
        <polygon
          points="100,164 155,68 45,68"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
          opacity="0.25"
        />
        {/* Node particles */}
        <circle cx="145" cy="55" r="2.5" fill="#FFF" filter="drop-shadow(0 0 3px #D4AF37)" />
        <circle cx="55" cy="145" r="2.5" fill="#FFF" filter="drop-shadow(0 0 3px #D4AF37)" />
      </motion.svg>

      {/* Core Pulsating Glow */}
      <motion.div
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.25, 0.6, 0.25]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-1/3 h-1/3 rounded-full bg-gradient-to-tr from-[#BF953F]/30 via-[#FCF6BA]/40 to-transparent blur-md"
      />
    </div>
  );
};

/**
 * Concentric Pulse Radar / Waves
 * Radiates smooth expanding circles outward like ripples of love.
 */
export const KineticPulseRadar: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#D4AF37'
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none flex items-center justify-center ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-dashed"
          style={{ borderColor: color }}
          initial={{ width: '70%', height: '70%', opacity: 0.8, scale: 0.8 }}
          animate={{
            width: ['70%', '150%'],
            height: ['70%', '150%'],
            opacity: [0.7, 0],
            scale: [0.85, 1.4]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: i * 1.15,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  );
};

/**
 * Kinetic Light Beam (Shimmer sweep for luxury cards)
 */
export const KineticLightBeam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute -inset-full pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 ${className}`}
      animate={{
        x: ['-100%', '200%']
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: 'easeInOut'
      }}
    />
  );
};

/**
 * Kinetic Line Flourish (Animated SVG flourish that draws itself in)
 */
export const KineticLineFlourish: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 my-2 ${className}`}>
      {/* Left Wing */}
      <motion.svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-[#D4AF37]"
      >
        <motion.path
          d="M60 6C45 6 35 1 20 1C10 1 0 6 0 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </motion.svg>

      {/* Center Rotating Diamond Node */}
      <motion.div
        animate={{ rotate: [0, 180, 360], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-2.5 h-2.5 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] rounded-xs rotate-45 shadow-[0_0_8px_#D4AF37]"
      />

      {/* Right Wing */}
      <motion.svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-[#D4AF37]"
      >
        <motion.path
          d="M0 6C15 6 25 1 40 1C50 1 60 6 60 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </motion.svg>
    </div>
  );
};

/**
 * Kinetic Floating Diamond / Star
 */
export const MotionGraphicDiamond: React.FC<{
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
}> = ({ x, y, size = 16, delay = 0, duration = 6 }) => {
  return (
    <motion.div
      style={{ left: x, top: y, width: size, height: size }}
      className="absolute pointer-events-none z-10"
      animate={{
        y: [0, -14, 0],
        rotate: [0, 90, 180, 270, 360],
        scale: [0.9, 1.15, 0.9],
        opacity: [0.4, 0.9, 0.4]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut'
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#D4AF37]">
        <path
          d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
          fill="url(#goldGradDiamond)"
          filter="drop-shadow(0 0 6px rgba(212,175,55,0.6))"
        />
        <defs>
          <linearGradient id="goldGradDiamond" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCF6BA" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#AA771C" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};
