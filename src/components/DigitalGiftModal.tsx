import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Copy, Check, QrCode, CreditCard, Sparkles, Heart } from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/weddingData';

interface DigitalGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalGiftModal: React.FC<DigitalGiftModalProps> = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (accountNum: string) => {
    const rawNumber = accountNum.replace(/\s+/g, '');
    navigator.clipboard.writeText(rawNumber);
    setCopiedAccount(accountNum);
    setTimeout(() => setCopiedAccount(null), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
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
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-serif-wedding text-3xl font-bold text-[#2C2622]">
                Hadiah & Amplop Digital
              </h3>
              <p className="font-serif-wedding italic text-xs sm:text-sm text-[#786C62] max-w-sm mx-auto">
                Doa restu Anda adalah karunia yang sangat berarti bagi kami. Apabila ingin memberi tanda kasih, Anda dapat menyalurkan melalui:
              </p>
            </div>

            <div className="space-y-4 text-left">
              {BANK_ACCOUNTS.map((bank, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#E6DCCF] shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs font-bold text-[#8B6B23] tracking-widest uppercase">
                      {bank.bankName}
                    </span>
                    <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#786C62]">Nomor Rekening:</p>
                    <p className="font-mono text-xl font-bold text-[#2C2622] tracking-wider mt-0.5">
                      {bank.accountNumber}
                    </p>
                    <p className="text-xs text-[#52463C] font-semibold mt-0.5">
                      a.n {bank.accountHolder}
                    </p>
                  </div>

                  <button
                    onClick={() => copyToClipboard(bank.accountNumber)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5EC] hover:bg-[#F2E8D8] text-[#8B6B23] border border-[#D4AF37]/30 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    {copiedAccount === bank.accountNumber ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Nomor Rekening Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin Nomor Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#FAF5EC] rounded-xl border border-[#E6DCCF] text-[11px] text-[#786C62]">
              <p className="flex items-center justify-center space-x-1 font-medium">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Terima kasih atas segala ketulusan dan doa restunya.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
