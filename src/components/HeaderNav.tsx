import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Calendar, MapPin, Image as ImageIcon, MessageSquare, Send, Sparkles } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('mempelai');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'mempelai', label: 'Mempelai', icon: Heart },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'lokasi', label: 'Lokasi', icon: MapPin },
    { id: 'galeri', label: 'Galeri', icon: ImageIcon },
    { id: 'rsvp', label: 'RSVP', icon: Send },
    { id: 'ucapan', label: 'Ucapan', icon: MessageSquare },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navItems.map(item => document.getElementById(item.id));
          const scrollPos = window.scrollY + 200;

          sections.forEach(sec => {
            if (sec) {
              const top = sec.offsetTop;
              const height = sec.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(sec.id);
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0, scale: 0.9, rotateX: 20 }}
      animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[96vw] [perspective:1000px] select-none"
    >
      {/* 3D Motion Graphic Floating Bar Container */}
      <motion.div
        className="relative flex items-center space-x-1 sm:space-x-1.5 p-1.5 sm:p-2 rounded-full bg-gradient-to-b from-[#2A241F]/98 via-[#1C1815]/98 to-[#120F0D]/98 border border-[#D4AF37]/50 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-xl [transform-style:preserve-3d]"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 45px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Kinetic 3D Shimmer Beam across Nav bar */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
          initial={false}
        >
          <motion.div
            className="w-16 h-full bg-gradient-to-r from-transparent via-[#FFFDF0]/25 to-transparent skew-x-[-25deg]"
            animate={{
              x: ['-100%', '400%'],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.08, y: -2, z: 20 }}
              whileTap={{ scale: 0.94, y: 1 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className={`relative flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-xs font-cinzel font-medium transition-colors duration-200 cursor-pointer [transform-style:preserve-3d] ${
                isActive
                  ? 'text-white font-bold'
                  : 'text-[#E6DCCF]/75 hover:text-white'
              }`}
            >
              {/* 3D Motion Graphic Active Capsule */}
              {isActive && (
                <motion.div
                  layoutId="activeNav3DBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-[#E5C365] via-[#C99E32] to-[#996F16] border border-[#FFE89E]/60 shadow-[0_6px_20px_rgba(212,175,55,0.45),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] [transform:translateZ(10px)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                >
                  {/* Subtle pulsing 3D aura ring */}
                  <motion.div
                    className="absolute -inset-1 rounded-full border border-[#D4AF37]/40 pointer-events-none"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              )}

              {/* 3D Hover Indicator if not active */}
              {!isActive && isHovered && (
                <motion.div
                  layoutId="hoverNav3DBg"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm [transform:translateZ(4px)]"
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* 3D Kinetic Icon with 3D depth and rotation */}
              <motion.div
                className="relative z-10 flex items-center justify-center [transform-style:preserve-3d]"
                animate={
                  isActive
                    ? {
                        rotateY: [0, 360],
                        scale: [1, 1.18, 1],
                      }
                    : isHovered
                    ? {
                        rotateZ: [-10, 10, -5, 0],
                        scale: 1.15,
                        rotateY: 15,
                      }
                    : {
                        rotateY: 0,
                        rotateZ: 0,
                        scale: 1,
                      }
                }
                transition={
                  isActive
                    ? {
                        rotateY: { duration: 0.8, ease: "easeOut" },
                        scale: { duration: 0.5 },
                      }
                    : {
                        duration: 0.35,
                      }
                }
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${isActive ? 'text-white' : 'text-[#D4AF37]'}`} />
              </motion.div>

              {/* Label */}
              <span className="relative z-10 hidden sm:inline tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                {item.label}
              </span>

              {/* Micro 3D Sparkle on Active */}
              {isActive && (
                <motion.span
                  className="relative z-10 hidden md:inline-block"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: [0.8, 1.2, 0.8], rotate: 180 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#FFF9D2]" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};
