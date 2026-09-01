import React, { useRef, useEffect } from 'react';
import motionJawaVideo from '../assets/Motion-Jawa.mp4';
import { ChevronDown } from 'lucide-react';

interface VideoSlideSectionProps {
  active?: boolean;
  onVideoComplete?: () => void;
}

export const VideoSlideSection: React.FC<VideoSlideSectionProps> = ({ active = true, onVideoComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollToSlide2 = () => {
    const slide2 = document.getElementById('slide-2') || document.getElementById('hero-section') || document.getElementById('mempelai');
    if (slide2) {
      slide2.scrollIntoView({ behavior: 'smooth' });
    }
    if (onVideoComplete) {
      onVideoComplete();
    }
  };

  const playVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Autoplay policy handled, retrying muted:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  };

  useEffect(() => {
    if (active) {
      playVideo();
    }
  }, [active]);

  return (
    <section 
      id="slide-1" 
      onClick={playVideo}
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Fullscreen Video Canvas with iOS Safari & Android Hardware Acceleration */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={motionJawaVideo}
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          x-webkit-airplay="deny"
          preload="auto"
          muted
          autoPlay
          loop={false}
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
          className="w-full h-full object-cover select-none pointer-events-none transform-gpu"
          style={{
            outline: 'none',
            border: 'none',
          }}
        />

        {/* Subtle cinematic vignette for blending seamlessly */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
      </div>

      {/* Scroll Down Prompt at the Bottom of Slide 1 */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          scrollToSlide2();
        }}
        style={{ touchAction: 'manipulation' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-[#FCF6BA] cursor-pointer focus:outline-none px-4 py-2 hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#D4AF37] drop-shadow-md">
          Geser ke Undangan
        </span>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#FCF6BA] drop-shadow-lg" />
        </div>
      </button>
    </section>
  );
};

