import React, { useRef, useEffect } from 'react';
import motionJawaVideo from '../assets/Motion-Jawa.mp4';
import { ChevronDown } from 'lucide-react';

interface VideoSlideSectionProps {
  onVideoComplete?: () => void;
}

export const VideoSlideSection: React.FC<VideoSlideSectionProps> = ({ onVideoComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollToSlide2 = () => {
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

  return (
    <section 
      id="slide-1" 
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Fullscreen Video Canvas */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={motionJawaVideo}
          playsInline
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
          className="w-full h-full object-cover select-none pointer-events-none"
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
        onClick={scrollToSlide2}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-[#FCF6BA] cursor-pointer focus:outline-none px-4 py-2 hover:scale-105 transition-transform"
      >
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#D4AF37] drop-shadow-md">
          Geser ke Undangan
        </span>
        <div>
          <ChevronDown className="w-5 h-5 text-[#FCF6BA] drop-shadow-lg" />
        </div>
      </button>
    </section>
  );
};
