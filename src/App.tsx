import React, { useState, useEffect } from 'react';
import { CoverEnvelope } from './components/CoverEnvelope';
import { VideoSlideSection } from './components/VideoSlideSection';
import { BackgroundDecorative } from './components/BackgroundDecorative';
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
import { Gift, Share2, Heart } from 'lucide-react';
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
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initial welcome celebratory confetti burst!
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.4 },
      colors: ['#D4AF37', '#BF953F', '#FCF6BA', '#AA771C', '#FFFFFF']
    });
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#2C2622] font-sans antialiased overflow-x-hidden">
      {/* COVER ENVELOPE OVERLAY */}
      <CoverEnvelope
        isOpen={isOpenEnvelope}
        guestName={guestName}
        onOpen={handleOpenEnvelope}
      />

      {/* LUXURY TEXTURED BACKGROUND & PATTERNS */}
      <BackgroundDecorative />

      {/* BACKGROUND MUSIC PLAYER */}
      <MusicPlayer autoStart={isOpenEnvelope} />

      {/* MAIN INVITATION CONTENT */}
      {isOpenEnvelope && (
        <div>
          {/* FLOATING HEADER NAVIGATION */}
          <HeaderNav />

          <main className="relative z-10 pb-28">
            {/* SLIDE 1: FULLSCREEN VIDEO SLIDE */}
            <VideoSlideSection />

            {/* SLIDE 2: HERO SECTION / INVITATION DETAILS */}
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
                <button
                  onClick={() => setIsGiftModalOpen(true)}
                  className="py-3.5 px-6 rounded-full bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)] transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Gift className="w-4 h-4" />
                  <span>Hadiah / Amplop Digital</span>
                </button>

                <button
                  onClick={() => setIsShareModalOpen(true)}
                  className="py-3.5 px-6 rounded-full bg-[#2C2622] text-[#FCF6BA] text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-lg hover:bg-[#3D352E] transition-all cursor-pointer border border-[#D4AF37]/40 hover:scale-105 active:scale-95"
                >
                  <Share2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Bagikan Undangan</span>
                </button>
              </div>

              {/* FOOTER ACKNOWLEDGEMENT */}
              <div className="pt-8 border-t border-[#D4AF37]/40 text-center space-y-2">
                <p className="font-pinyon text-4xl sm:text-5xl font-bold text-[#5A1422] tracking-wide select-none drop-shadow-sm">
                  Anton &amp; Sri
                </p>
                <p className="font-serif-wedding text-sm sm:text-base text-[#3E101A] font-medium flex items-center justify-center space-x-1.5 italic">
                  <span>Dibuat dengan ketulusan dan kehangatan cinta</span>
                  <Heart className="w-4 h-4 text-rose-600 fill-rose-600 inline animate-pulse" />
                </p>
                <p className="font-cinzel text-xs font-bold text-[#5A1422] tracking-[0.2em] uppercase">
                  10 September 2026 • Probolinggo, Jawa Timur
                </p>
              </div>
            </section>
          </main>
        </div>
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
