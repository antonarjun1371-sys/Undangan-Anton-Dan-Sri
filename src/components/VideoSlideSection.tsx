import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import motionJawaVideo from '../assets/Motion-Jawa.mp4';
import { ChevronDown } from 'lucide-react';

interface VideoSlideSectionProps {
  onVideoComplete?: () => void;
}

export const VideoSlideSection: React.FC<VideoSlideSectionProps> = ({ onVideoComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const scrollToSlide2 = () => {
    if (hasScrolled) return;
    setHasScrolled(true);
    const slide2 = document.getElementById('slide-2') || document.getElementById('hero-section');
    if (slide2) {
      slide2.scrollIntoView({ behavior: 'smooth' });
    }
    if (onVideoComplete) {
      onVideoComplete();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Video autoplay error handling:', err);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, []);

  const handleEnded = () => {
    scrollToSlide2();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      // Trigger smooth scroll when video has 0.2s left
      if (duration > 0 && duration - currentTime <= 0.2) {
        scrollToSlide2();
      }
    }
  };

  return (
    <section 
      id="slide-1"
      className="relative w-full h-screen min-h-screen bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Fullscreen Video Canvas - Pure Animation Effect Without Video Controls */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={motionJawaVideo}
          playsInline
          muted
          autoPlay
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover select-none pointer-events-none"
          style={{
            outline: 'none',
            border: 'none',
          }}
        />

        {/* Subtle cinematic vignette for blending seamlessly */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom of Slide 1 */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToSlide2}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-[#FCF6BA] cursor-pointer focus:outline-none"
      >
        <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]/90 drop-shadow-md">
          Geser ke Undangan
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#FCF6BA] drop-shadow-lg" />
        </motion.div>
      </motion.button>
    </section>
  );
};
