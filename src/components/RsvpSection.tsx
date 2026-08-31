import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, User, Users, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { submitRsvp } from '../services/rsvpService';
import { KineticLineFlourish } from './MotionGraphicElements';

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
    <section id="rsvp" className="py-20 px-3 sm:px-4 bg-[#FAF5EC]/80 border-t border-[#E6DCCF] scroll-mt-12 relative overflow-hidden content-visibility-auto">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] text-[#5A1422] text-xs font-cinzel font-bold tracking-[0.2em] border border-[#D4AF37] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#AA771C]" />
            <span>KONFIRMASI KEHADIRAN</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F1418] tracking-wider drop-shadow-sm uppercase">
            RSVP &amp; Doa Restu
          </h2>
          <KineticLineFlourish className="text-[#D4AF37]" />
          <p className="font-serif-wedding italic text-base sm:text-xl text-[#3E101A] font-medium leading-relaxed">
            Kehadiran dan doa restu Anda adalah karunia terindah bagi kami
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] overflow-hidden ring-1 ring-[#D4AF37]/20 hover:border-[#D4AF37] transition-all">
          {/* Subtle Corner Filigree Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

          {success && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start space-x-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Terima Kasih!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Konfirmasi RSVP dan ucapan Anda telah berhasil tersimpan dalam buku tamu kami.
                </p>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Tamu */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-bold text-[#8B6B23] uppercase tracking-wider block">
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
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E6DCCF] bg-white/90 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Status Kehadiran Radio Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-bold text-[#8B6B23] uppercase tracking-wider block">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { value: 'hadir', label: 'Hadir', desc: 'Siap Hadir' },
                  { value: 'tidak', label: 'Maaf, Tidak', desc: 'Berhalangan' },
                  { value: 'ragu', label: 'Ragu-ragu', desc: 'Masih Ragu' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setStatus(opt.value as any)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center shadow-sm active:scale-95 ${
                      status === opt.value
                        ? 'bg-gradient-to-r from-[#2C2622] to-[#3D352E] text-[#FCF6BA] border-[#D4AF37]/60 shadow-md ring-2 ring-[#D4AF37]/30'
                        : 'bg-[#FAF8F5] text-[#52463C] border-[#E6DCCF] hover:border-[#D4AF37]/60 hover:bg-white'
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
              <div className="space-y-1.5">
                <label className="text-xs font-cinzel font-bold text-[#8B6B23] uppercase tracking-wider block">
                  Jumlah Tamu Yang Hadir
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09386]" />
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E6DCCF] bg-white/90 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all cursor-pointer shadow-inner"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4+ Orang (Rombongan Keluarga)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Pesan & Doa Restu */}
            <div className="space-y-1.5">
              <label className="text-xs font-cinzel font-bold text-[#8B6B23] uppercase tracking-wider block">
                Pesan & Doa Restu
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#A09386]" />
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan harapan dan doa terbaik untuk kedua mempelai..."
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E6DCCF] bg-white/90 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C2622] transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] hover:brightness-105 active:scale-95 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-[#AA771C]/50 transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Mengirim Konfirmasi...' : 'Kirim RSVP & Doa Restu'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
