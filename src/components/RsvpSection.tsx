import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, User, Users, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { submitRsvp } from '../services/rsvpService';

interface RsvpSectionProps {
  onRsvpSuccess: () => void;
  defaultName?: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ onRsvpSuccess, defaultName = '' }) => {
  const [name, setName] = useState<string>(defaultName);
  const [status, setStatus] = useState<'hadir' | 'tidak' | 'ragu'>('hadir');
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Mohon isi nama Anda.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitRsvp({ name, status, guestsCount, message });

      if (res.success) {
        setSuccess(true);
        // Confetti celebration burst!
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#BF953F', '#FCF6BA', '#AA771C']
        });
        setMessage('');
        onRsvpSuccess();
      } else {
        setErrorMsg(res.message || 'Gagal mengirim RSVP.');
      }
    } catch (err) {
      setErrorMsg('Terjadi kesalahan koneksi. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[#FAF5EC]/80 border-t border-[#E6DCCF] scroll-mt-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Konfirmasi Kehadiran</span>
          </div>
          <h2 className="font-serif-wedding text-4xl sm:text-5xl font-bold text-[#2C2622]">
            RSVP & Ucapan
          </h2>
          <p className="font-serif-wedding italic text-base text-[#786C62]">
            Kehadiran dan doa restu Anda adalah karunia terindah bagi kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DCCF] shadow-xl relative"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start space-x-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Terima Kasih!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Konfirmasi RSVP dan ucapan Anda telah berhasil tersimpan dalam buku tamu kami.
                </p>
              </div>
            </motion.div>
          )}

          {errorMsg && (
            <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Tamu */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-semibold text-[#8B6B23] uppercase tracking-wider block">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09386]" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Bapak Ahmad / Saudari Rina"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E6DCCF] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all"
                />
              </div>
            </div>

            {/* Status Kehadiran Radio Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-semibold text-[#8B6B23] uppercase tracking-wider block">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'hadir', label: 'Hadir', desc: 'Siap Hadir' },
                  { value: 'tidak', label: 'Maaf, Tidak', desc: 'Berhalangan' },
                  { value: 'ragu', label: 'Ragu-ragu', desc: 'Masih Ragu' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setStatus(opt.value as any)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      status === opt.value
                        ? 'bg-[#2C2622] text-[#FCF6BA] border-[#2C2622] shadow-md'
                        : 'bg-[#FAF8F5] text-[#52463C] border-[#E6DCCF] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="text-xs font-bold">{opt.label}</span>
                    <span className="text-[10px] opacity-80 mt-0.5">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Jumlah Tamu (if hadir) */}
            {status === 'hadir' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-1.5"
              >
                <label className="text-xs font-cinzel font-semibold text-[#8B6B23] uppercase tracking-wider block">
                  Jumlah Tamu Yang Hadir
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09386]" />
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E6DCCF] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] bg-white transition-all cursor-pointer"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4+ Orang (Rombongan Keluarga)</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Pesan & Doa Restu */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-semibold text-[#8B6B23] uppercase tracking-wider block">
                Pesan & Doa Restu
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#A09386]" />
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan harapan dan doa terbaik untuk kedua mempelai..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E6DCCF] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Mengirim Konfirmasi...' : 'Kirim RSVP & Doa Restu'}</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
