import React from 'react';

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
      className={`pointer-events-none select-none ${side === 'right' ? '-scale-x-100' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(40,10,20,0.35)]"
      >
        <defs>
          {/* Gradients for Peonies and Roses */}
          <radialGradient id="peonyWine1" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#C43855" />
            <stop offset="50%" stopColor="#8A1832" />
            <stop offset="100%" stopColor="#4A0C18" />
          </radialGradient>
          <radialGradient id="peonyWine2" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#E05370" />
            <stop offset="60%" stopColor="#9C203B" />
            <stop offset="100%" stopColor="#540D1E" />
          </radialGradient>
          <radialGradient id="roseYellow" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFF280" />
            <stop offset="45%" stopColor="#E8C330" />
            <stop offset="85%" stopColor="#B38A18" />
            <stop offset="100%" stopColor="#75500A" />
          </radialGradient>
          <radialGradient id="orchidWhite" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F5EFE6" />
            <stop offset="85%" stopColor="#E2D1C0" />
            <stop offset="100%" stopColor="#C2AFA0" />
          </radialGradient>
          <radialGradient id="leafGreen" cx="30%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#4D6B3C" />
            <stop offset="60%" stopColor="#2D4521" />
            <stop offset="100%" stopColor="#14260D" />
          </radialGradient>
          <radialGradient id="leafDeep" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#3E5430" />
            <stop offset="70%" stopColor="#1E2E16" />
            <stop offset="100%" stopColor="#0B1408" />
          </radialGradient>
        </defs>

        {/* ================= BACKGROUND LEAVES & FOLIAGE ================= */}
        <g id="leaves-bg">
          {/* Top leaves */}
          <path d="M70 40 C60 15 90 5 110 20 C100 35 85 45 70 40 Z" fill="url(#leafGreen)" />
          <path d="M100 22 C115 5 145 15 140 40 C125 45 108 35 100 22 Z" fill="url(#leafDeep)" opacity="0.9" />
          
          {/* Outer far-left leaves */}
          <path d="M35 120 C10 100 5 70 25 60 C40 75 45 105 35 120 Z" fill="url(#leafGreen)" />
          <path d="M20 160 C-5 145 0 115 20 110 C35 125 35 150 20 160 Z" fill="url(#leafDeep)" />
          
          {/* Mid leaves branching out */}
          <path d="M15 210 C-5 195 0 170 25 175 C35 190 30 215 15 210 Z" fill="url(#leafGreen)" />
          <path d="M25 250 C5 240 10 215 35 220 C45 235 40 255 25 250 Z" fill="url(#leafDeep)" />
          <path d="M40 290 C20 285 30 260 55 268 C60 285 52 300 40 290 Z" fill="url(#leafGreen)" />
        </g>

        {/* ================= 1. TOP MAROON PEONY BLOSSOM ================= */}
        <g id="top-peony" transform="translate(100, 70)">
          {/* Outer petals */}
          <circle cx="0" cy="0" r="42" fill="url(#peonyWine1)" />
          <path d="M-30 -15 C-40 -35 -10 -45 10 -40 C30 -42 45 -25 40 -5 C45 15 30 35 10 40 C-15 42 -35 25 -30 -15 Z" fill="url(#peonyWine2)" />
          {/* Inner ruffle layers */}
          <path d="M-22 -10 C-30 -25 -5 -32 12 -25 C25 -28 32 -15 28 0 C32 15 18 28 5 28 C-12 28 -25 15 -22 -10 Z" fill="#6B1324" />
          <path d="M-15 -6 C-20 -18 0 -22 10 -18 C18 -20 22 -10 20 0 C22 10 12 20 2 20 C-10 20 -18 10 -15 -6 Z" fill="url(#peonyWine1)" />
          <path d="M-8 -3 C-12 -10 2 -12 8 -10 C12 -12 15 -5 12 2 C15 8 8 12 0 12 C-6 12 -10 6 -8 -3 Z" fill="#D94362" opacity="0.85" />
          {/* Center pistil / stamen dots */}
          <circle cx="0" cy="0" r="3" fill="#FFEAA7" />
          <circle cx="-3" cy="2" r="1.5" fill="#FFEAA7" />
          <circle cx="3" cy="-2" r="1.5" fill="#FFEAA7" />
        </g>

        {/* ================= 2. MID MAROON / BURGUNDY ROSE ================= */}
        <g id="mid-rose" transform="translate(65, 145)">
          <circle cx="0" cy="0" r="38" fill="url(#peonyWine1)" />
          <path d="M-28 -12 C-38 -28 -12 -38 8 -32 C26 -35 38 -20 34 -2 C38 15 24 32 6 34 C-16 35 -32 20 -28 -12 Z" fill="url(#peonyWine2)" />
          <path d="M-18 -8 C-25 -20 -4 -25 10 -20 C20 -22 26 -12 22 0 C25 12 14 22 4 22 C-10 22 -20 12 -18 -8 Z" fill="#580E1D" />
          <path d="M-10 -4 C-15 -12 2 -15 8 -12 C14 -14 18 -6 15 2 C16 8 8 14 0 14 C-8 14 -14 7 -10 -4 Z" fill="#C43855" />
          <circle cx="0" cy="0" r="4" fill="#FFE600" opacity="0.8" />
        </g>

        {/* ================= 3. YELLOW BUTTERCUP ROSE ================= */}
        <g id="yellow-rose" transform="translate(105, 160)">
          <circle cx="0" cy="0" r="28" fill="url(#roseYellow)" />
          <path d="M-20 -8 C-26 -20 -8 -26 6 -22 C18 -24 26 -14 24 -1 C27 10 17 22 4 24 C-11 25 -23 14 -20 -8 Z" fill="#D4A71B" />
          <path d="M-12 -5 C-16 -13 -4 -17 5 -14 C12 -15 16 -9 15 0 C17 8 10 14 3 15 C-6 15 -13 9 -12 -5 Z" fill="#FFF494" opacity="0.9" />
          <circle cx="0" cy="0" r="3" fill="#8A5A0A" />
        </g>

        {/* ================= 4. WHITE / BLUSH ORCHID CLUSTER ================= */}
        <g id="white-orchid" transform="translate(68, 220)">
          {/* Top Petal */}
          <path d="M0 0 C-15 -25 -5 -42 12 -38 C28 -35 25 -15 0 0 Z" fill="url(#orchidWhite)" />
          {/* Left Petal */}
          <path d="M0 0 C-30 -15 -45 5 -35 22 C-25 35 -10 20 0 0 Z" fill="url(#orchidWhite)" />
          {/* Right Petal */}
          <path d="M0 0 C15 -10 38 0 35 20 C30 35 15 25 0 0 Z" fill="url(#orchidWhite)" />
          {/* Bottom Lip Petals with Wine Center */}
          <path d="M0 0 C-18 10 -15 35 0 42 C15 35 18 10 0 0 Z" fill="url(#orchidWhite)" />
          <circle cx="0" cy="8" r="8" fill="#9C203B" />
          <circle cx="0" cy="8" r="4" fill="#FFEAA7" />
          <circle cx="0" cy="11" r="2" fill="#E84393" />
        </g>

        {/* ================= 5. LOWER WHITE ORCHID PETALS ================= */}
        <g id="lower-orchid" transform="translate(85, 275)">
          <path d="M0 0 C-22 -12 -32 5 -25 18 C-18 28 -8 15 0 0 Z" fill="url(#orchidWhite)" />
          <path d="M0 0 C12 -8 30 0 28 16 C24 28 12 20 0 0 Z" fill="url(#orchidWhite)" />
          <path d="M0 0 C-14 8 -12 28 0 32 C12 28 14 8 0 0 Z" fill="url(#orchidWhite)" />
          <circle cx="0" cy="6" r="6" fill="#8A1832" />
          <circle cx="0" cy="6" r="3" fill="#FFF280" />
        </g>
      </svg>
    </div>
  );
};
