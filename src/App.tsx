import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CoverEnvelope } from './components/CoverEnvelope';
import { MotionPathPetals } from './components/MotionPathPetals';
import { MusicPlayer } from './components/MusicPlayer';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { EventSection } from './components/EventSection';
import { MapSection } from './components/MapSection';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { WishesSection } from './components/WishesSection';
import { DigitalGiftModal } from './components/DigitalGiftModal';
import { ShareModal } from './components/ShareModal';
import { Gift, Share2, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [isOpenEnvelope, setIsOpenEnvelope] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('');
  const [refreshWishes, setRefreshWishes] = useState<number>(0);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Parse guest name from URL parameter e.g. ?to=Bapak+Ahmad
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      setGuestName(toParam);
    }
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpenEnvelope(true);
    // Initial welcome confetti burst!
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#BF953F', '#FCF6BA', '#AA771C']
    });
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#2C2622] font-sans antialiased overflow-x-hidden">
      {/* COVER ENVELOPE OVERLAY (Entrance, Emphasis, Exit Animations) */}
      <CoverEnvelope
        isOpen={isOpenEnvelope}
        guestName={guestName}
        onOpen={handleOpenEnvelope}
      />

      {/* MOTION PATH PETALS & SPARKLES ANIMATION LAYER */}
      <MotionPathPetals />

      {/* BACKGROUND MUSIC PLAYER */}
      <MusicPlayer autoStart={isOpenEnvelope} />

      {/* MAIN INVITATION CONTENT (Shown after envelope opened or smoothly visible) */}
      {isOpenEnvelope && (
        <>
          {/* FLOATING HEADER NAVIGATION */}
          <HeaderNav />

          <main className="relative z-10 pb-28">
            {/* HERO SECTION */}
            <HeroSection />

            {/* COUPLE SECTION */}
            <CoupleSection />

            {/* EVENT SCHEDULE SECTION */}
            <EventSection />

            {/* INTERACTIVE MAP SECTION */}
            <MapSection />

            {/* GALLERY SLIDESHOW & LIGHTBOX */}
            <GallerySection />

            {/* RSVP FORM SECTION */}
            <RsvpSection
              defaultName={guestName}
              onRsvpSuccess={() => setRefreshWishes(prev => prev + 1)}
            />

            {/* WISHES & GUESTBOOK SECTION */}
            <WishesSection refreshTrigger={refreshWishes} />

            {/* FLOATING ACTION BUTTONS FOOTER BAR */}
            <section className="py-12 px-4 max-w-xl mx-auto text-center space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsGiftModalOpen(true)}
                  className="py-3 px-6 rounded-full bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Hadiah / Amplop Digital</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsShareModalOpen(true)}
                  className="py-3 px-6 rounded-full bg-[#2C2622] text-[#FCF6BA] text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Bagikan Undangan</span>
                </motion.button>
              </div>

              {/* FOOTER ACKNOWLEDGEMENT */}
              <div className="pt-8 border-t border-[#E6DCCF] text-center space-y-2">
                <p className="font-serif-wedding text-xl font-bold text-[#8B6B23]">
                  Anton & Sri
                </p>
                <p className="text-xs text-[#786C62] flex items-center justify-center space-x-1">
                  <span>Dibuat dengan ketulusan dan kehangatan cinta</span>
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
                </p>
                <p className="text-[10px] text-[#A09386]">
                  10 September 2026 • Probolinggo, Jawa Timur
                </p>
              </div>
            </section>
          </main>
        </>
      )}

      {/* DIGITAL GIFT MODAL */}
      <DigitalGiftModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />

      {/* SHARE MODAL */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
