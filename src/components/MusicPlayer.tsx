import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { BACKGROUND_MUSIC_URL, SONG_INFO } from '../data/weddingData';

interface MusicPlayerProps {
  autoStart: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      const playAudio = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Audio play gesture required or blocked:", err);
            // Fallback retry on window interaction if blocked
            const onUserInteract = () => {
              if (audioRef.current && autoStart) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
              window.removeEventListener('click', onUserInteract);
              window.removeEventListener('touchstart', onUserInteract);
            };
            window.addEventListener('click', onUserInteract, { once: true });
            window.addEventListener('touchstart', onUserInteract, { once: true });
          });
      };

      playAudio();
    }
  }, [autoStart]);

  // Hide song info popover after 7 seconds
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowInfo(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  if (!autoStart) return null;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[70] flex flex-col items-end space-y-2">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={BACKGROUND_MUSIC_URL}
        loop
        preload="auto"
        playsInline
      />

      {/* Floating Song Title Pill */}
      {(showInfo || isPlaying) && (
        <div className="hidden sm:flex items-center space-x-2 py-1 px-3 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg text-[11px] text-amber-200">
          <Music className="w-3 h-3 text-[#D4AF37]" />
          <span className="font-medium text-[#FAF8F5]">{SONG_INFO.title}</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-amber-200/80">{SONG_INFO.artist}</span>
        </div>
      )}

      {/* Floating Control Badge */}
      <div className="flex items-center p-1 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl text-white">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full hover:bg-white/10 text-[#FCF6BA] hover:scale-105 transition-transform cursor-pointer focus:outline-none"
          title={isPlaying ? `Jeda Musik (${SONG_INFO.title})` : `Putar Lagu: ${SONG_INFO.title}`}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
          ) : (
            <VolumeX className="w-4 h-4 text-white/60" />
          )}
        </button>
      </div>
    </div>
  );
};
