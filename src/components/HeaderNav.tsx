import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, MapPin, Image as ImageIcon, MessageSquare, Send } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('mempelai');

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
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw]"
    >
      <div className="flex items-center space-x-1 p-1.5 rounded-full bg-[#1C1815]/95 border border-[#D4AF37]/40 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-[#E6DCCF]/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] to-[#AA771C] shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10 hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};
