import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Copy, Check, CreditCard, Sparkles, Heart } from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/weddingData';

interface DigitalGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalGiftModal: React.FC<DigitalGiftModalProps> = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = async (accountNum: string) => {
    const rawNumber = accountNum.replace(/\s+/g, '');
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(rawNumber);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = rawNumber;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedAccount(accountNum);
      setTimeout(() => setCopiedAccount(null), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback
      setCopiedAccount(accountNum);
      setTimeout(() => setCopiedAccount(null), 3000);
    }
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
              className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#E6DCCF] text-[#786C62] hover:text-[#2C2622] transition-colors cursor-pointer shadow-sm"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#FAF5EC] to-[#F3E5AB]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#8B6B23] shadow-md">
                <Gift className="w-7 h-7 text-[#AA771C]" />
              </div>
              <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2C2622]">
                Hadiah & Amplop Digital
              </h3>
              <p className="font-serif-wedding italic text-xs sm:text-sm text-[#786C62] max-w-sm mx-auto">
                Doa restu Anda adalah karunia yang sangat berarti bagi kami. Apabila ingin memberi tanda kasih, Anda dapat menyalurkan melalui rekening berikut:
              </p>
            </div>

            <div className="space-y-4 text-left">
              {BANK_ACCOUNTS.map((bank, idx) => {
                const isCopied = copiedAccount === bank.accountNumber;
                return (
                  <div
                    key={idx}
                    className="relative bg-white p-5 rounded-2xl border border-[#E6DCCF] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-sm hover:shadow-md space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-cinzel text-xs font-bold text-[#8B6B23] tracking-widest uppercase bg-[#FAF5EC] px-2.5 py-1 rounded-md border border-[#D4AF37]/30">
                          {bank.bankName}
                        </span>
                      </div>
                      <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                    </div>

                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE3D5]">
                      <p className="text-[11px] text-[#786C62] uppercase tracking-wider font-medium">Nomor Rekening</p>
                      <p className="font-mono text-xl sm:text-2xl font-bold text-[#2C2622] tracking-wider mt-0.5 select-all">
                        {bank.accountNumber}
                      </p>
                      <p className="text-xs text-[#52463C] font-semibold mt-1">
                        Atas Nama: <span className="text-[#8B6B23]">{bank.accountHolder}</span>
                      </p>
                    </div>

                    {/* Tombol Salin Nomor Rekening */}
                    <button
                      onClick={() => copyToClipboard(bank.accountNumber)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98] ${
                        isCopied
                          ? 'bg-emerald-600 text-white border border-emerald-700 shadow-emerald-200'
                          : 'bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-white hover:brightness-105 border border-[#AA771C]/50 shadow-md'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span className="font-bold">Nomor Rekening Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Salin Nomor Rekening</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 bg-[#FAF5EC] rounded-2xl border border-[#E6DCCF] text-xs text-[#786C62]">
              <p className="flex items-center justify-center space-x-1.5 font-medium">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                <span>Terima kasih atas segala ketulusan, keikhlasan, dan doa restunya.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
