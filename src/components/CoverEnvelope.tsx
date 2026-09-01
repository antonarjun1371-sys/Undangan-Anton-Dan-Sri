import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import videoAwal from '../assets/video awal.mp4';

interface CoverEnvelopeProps {
  isOpen: boolean;
  guestName: string;
  onOpen: () => void;
}

export const CoverEnvelope: React.FC<CoverEnvelopeProps> = ({
  isOpen,
  guestName,
  onOpen,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && !isOpen) {
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  const handleOpenClick = () => {
    // Immediately pause cover video to release mobile hardware video decoder for next video
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-cover"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-[100dvh] min-h-[100dvh] bg-black overflow-hidden select-none"
        >
          {/* FULL SCREEN BACKGROUND VIDEO (video awal.mp4) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              ref={videoRef}
              src={videoAwal}
              autoPlay
              loop={false}
              muted
              playsInline
              // @ts-ignore
              webkit-playsinline="true"
              x-webkit-airplay="deny"
              preload="auto"
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              onEnded={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
              className="w-full h-full object-cover transform-gpu"
            />
          </div>

          {/* COVER CONTENT CONTAINER - PURE TEXT ON VIDEO */}
          <div className="relative z-10 w-full h-full min-h-[100dvh] flex flex-col items-center justify-center pt-[6vh] sm:pt-[8vh] pb-6 px-4 sm:px-6 text-center pointer-events-auto bg-[#735454]/40 backdrop-blur-[0.5px]">
            {/* TULISAN PENERIMA & TEKS BUKA UNDANGAN (MURNI TULISAN) */}
            <div className="w-full max-w-sm flex flex-col items-center space-y-1.5 sm:space-y-2 -translate-y-4 sm:-translate-y-8">
              {/* Recipient Greeting */}
              <div className="w-full flex flex-col items-center">
                <p className="text-[10.5px] sm:text-xs text-[#F3E5AB] font-cinzel font-bold tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                
                <h3 className="font-serif-wedding text-2xl sm:text-3.5xl font-extrabold text-white mt-0.5 capitalize text-ellipsis overflow-hidden drop-shadow-[0_3px_12px_rgba(0,0,0,0.98)] select-none">
                  {guestName || "Tamu Undangan"}
                </h3>

                <p className="text-[10.5px] sm:text-xs text-[#FAF8F5] italic mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  Tanpa Mengurangi Rasa Hormat
                </p>
              </div>

              {/* BUKA UNDANGAN (MURNI TULISAN INTERAKTIF) */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={handleOpenClick}
                  style={{ touchAction: 'manipulation' }}
                  className="group flex flex-col items-center cursor-pointer py-1 px-4 bg-transparent border-0 outline-none hover:scale-105 active:scale-95 transition-transform"
                >
                  <span 
                    style={{
                      color: '#6c4e2b',
                      fontWeight: 'bold',
                      textDecorationLine: 'none',
                      textAlign: 'center',
                      borderStyle: 'groove',
                      backgroundColor: '#bfa9a9',
                      borderWidth: '2px',
                      borderColor: '#6c4e2b'
                    }}
                    className="font-cinzel tracking-[0.25em] text-base sm:text-lg uppercase px-5 py-2 rounded-xl shadow-lg inline-block"
                  >
                    BUKA UNDANGAN
                  </span>
                  <span className="w-16 h-[1.5px] bg-[#D4AF37] group-hover:w-24 group-hover:bg-white transition-all duration-300 mt-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

