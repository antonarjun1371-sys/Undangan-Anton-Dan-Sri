import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Image as ImageIcon, MessageSquare, Send, Sparkles } from 'lucide-react';

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
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[96vw] select-none">
      {/* Floating Bar Container */}
      <div className="relative flex items-center space-x-1 sm:space-x-1.5 p-1.5 sm:p-2 rounded-full bg-gradient-to-b from-[#2A241F]/98 via-[#1C1815]/98 to-[#120F0D]/98 border border-[#D4AF37]/50 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-xs font-cinzel font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-b from-[#E5C365] via-[#C99E32] to-[#996F16] text-white font-bold shadow-[0_4px_15px_rgba(212,175,55,0.4)]'
                  : 'text-[#E6DCCF]/75 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-center">
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-[#D4AF37]'}`} />
              </div>

              {/* Label */}
              <span className="hidden sm:inline tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
