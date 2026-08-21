import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX, Disc } from 'lucide-react';
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
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser policy blocks autostart, user can click manual toggle
          setIsPlaying(false);
        });
    }
  }, [autoStart]);

  // Hide song info popover after 8 seconds on initial load
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

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end space-y-2">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={BACKGROUND_MUSIC_URL}
        loop
        preload="auto"
      />

      {/* Floating Song Title Pill */}
      <AnimatePresence>
        {(showInfo || isPlaying) && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden sm:flex items-center space-x-2 py-1 px-3 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg text-[11px] text-amber-200"
          >
            <Music className="w-3 h-3 text-[#D4AF37] animate-pulse" />
            <span className="font-medium text-[#FAF8F5]">{SONG_INFO.title}</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="text-amber-200/80">{SONG_INFO.artist}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Control Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center space-x-1.5 p-1.5 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-2xl text-white"
      >
        {/* Disk Spin Visualizer */}
        <button
          onClick={togglePlay}
          onMouseEnter={() => setShowInfo(true)}
          className="relative p-2 rounded-full bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-white hover:scale-105 transition-transform cursor-pointer focus:outline-none shadow-md"
          title={isPlaying ? `Jeda Musik (${SONG_INFO.title})` : `Putar Lagu: ${SONG_INFO.title}`}
        >
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Disc className="w-5 h-5" />
          </motion.div>
          {isPlaying && (
            <div className="absolute -top-1 -right-1 flex items-end justify-center space-x-[2px] h-3 w-4 bg-[#1C1815]/90 rounded-full p-0.5 border border-[#D4AF37]/60">
              <span className="w-[2px] bg-[#FCF6BA] rounded-full animate-[bounce_0.8s_infinite_100ms] h-full" />
              <span className="w-[2px] bg-[#D4AF37] rounded-full animate-[bounce_0.8s_infinite_300ms] h-2/3" />
              <span className="w-[2px] bg-[#FCF6BA] rounded-full animate-[bounce_0.8s_infinite_200ms] h-5/6" />
            </div>
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? "Bunyikan" : "Bisukan"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-300" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
        </button>
      </motion.div>
    </div>
  );
};
