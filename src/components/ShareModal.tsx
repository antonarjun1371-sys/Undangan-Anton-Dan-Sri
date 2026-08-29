import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Share2, Copy, Check, MessageCircle, UserPlus, Sparkles } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [customName, setCustomName] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const baseUrl = window.location.origin + window.location.pathname;
  const generateLink = () => {
    if (!customName.trim()) return baseUrl;
    return `${baseUrl}?to=${encodeURIComponent(customName.trim())}`;
  };

  const currentGeneratedLink = generateLink();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentGeneratedLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Kepada Yth. ${customName || 'Bapak/Ibu/Saudara/i'},\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara Pernikahan kami:\n\n*Anton Dwi Prastia & Sri Yatin*\nKamis, 10 September 2026\n\nUntuk informasi selengkapnya dan konfirmasi kehadiran, silakan buka link undangan berikut:\n${currentGeneratedLink}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.\n\nTerima kasih.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-scrollbar"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl space-y-6 text-center my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#E6DCCF] text-[#786C62] hover:text-[#2C2622] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 flex items-center justify-center text-[#8B6B23]">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622]">
                Bagikan Undangan
              </h3>
              <p className="font-serif-wedding italic text-xs sm:text-sm text-[#786C62] max-w-sm mx-auto">
                Buat tautan undangan khusus dengan nama tamu pilihan Anda untuk dikirimkan via WhatsApp.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-cinzel font-semibold text-[#8B6B23] uppercase tracking-wider block">
                  Nama Tamu Yang Diundang
                </label>
                <div className="relative">
                  <UserPlus className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09386]" />
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Contoh: Bapak Joko / Ibu Dewi"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E6DCCF] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all bg-white"
                  />
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#E6DCCF]">
                <p className="text-[10px] text-[#A09386] font-mono truncate">
                  {currentGeneratedLink}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCopy}
                  className="py-3 px-4 rounded-xl bg-[#FAF5EC] hover:bg-[#F2E8D8] text-[#8B6B23] border border-[#D4AF37]/30 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? "Tautan Tersalin!" : "Salin Tautan"}</span>
                </button>

                <button
                  onClick={handleWhatsAppShare}
                  className="py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity cursor-pointer shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
