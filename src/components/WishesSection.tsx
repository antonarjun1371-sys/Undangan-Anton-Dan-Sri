import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageSquare, CheckCircle, XCircle, HelpCircle, Sparkles, User, ThumbsUp } from 'lucide-react';
import { RSVPItem } from '../types';
import { fetchRsvps, likeRsvp } from '../services/rsvpService';
import { KineticLineFlourish } from './MotionGraphicElements';

interface WishesSectionProps {
  refreshTrigger: number;
}

export const WishesSection: React.FC<WishesSectionProps> = ({ refreshTrigger }) => {
  const [rsvps, setRsvps] = useState<RSVPItem[]>([]);
  const [stats, setStats] = useState({ totalResponses: 0, hadir: 0, tidakHadir: 0, ragu: 0 });
  const [filter, setFilter] = useState<'all' | 'hadir' | 'tidak'>('all');
  const [loading, setLoading] = useState<boolean>(true);

  const loadWishes = async () => {
    try {
      const res = await fetchRsvps();
      setRsvps(res.data);
      setStats(res.stats);
    } catch (err) {
      console.error("Failed to load wishes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWishes();
  }, [refreshTrigger]);

  const handleLike = async (id: string) => {
    try {
      const newLikes = await likeRsvp(id);
      if (newLikes !== null) {
        setRsvps(prev =>
          prev.map(item => item.id === id ? { ...item, likes: newLikes } : item)
        );
      }
    } catch (err) {
      console.error("Failed to like wish:", err);
    }
  };

  const filteredRsvps = rsvps.filter(item => {
    if (filter === 'hadir') return item.status === 'hadir';
    if (filter === 'tidak') return item.status === 'tidak';
    return true;
  });

  return (
    <section 
      id="ucapan" 
      className="py-14 sm:py-18 px-3 sm:px-4 bg-gradient-to-b from-[#4A2E26]/40 via-[#3B221B]/30 to-[#482B22]/40 backdrop-blur-[4px] border-y border-[#D4AF37]/25 scroll-mt-12 relative overflow-hidden content-visibility-auto shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),inset_0_0_50px_rgba(25,10,6,0.15),0_15px_35px_rgba(30,12,8,0.06)]"
    >
      {/* Decorative Multi-layered Warm Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12)_0%,_transparent_65%)]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(250,245,236,0.08)_0%,_transparent_60%)]" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-8 space-y-2.5 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] text-[#5A1422] text-xs font-cinzel font-bold tracking-[0.2em] border border-[#D4AF37] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#AA771C]" />
            <span>BUKU TAMU &amp; DOA RESTU</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1016] tracking-wider drop-shadow-sm uppercase">
            Ucapan Sahabat &amp; Keluarga
          </h2>
          <KineticLineFlourish className="text-[#D4AF37]" />
          <p className="font-serif-wedding italic text-base sm:text-xl text-[#3E101A] font-medium leading-relaxed">
            Kumpulan kehangatan doa dan tulus rasa dari orang-orang tersayang
          </p>
        </motion.div>

      {/* Summary Stats Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
        className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 relative z-10"
      >
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all">
          <p className="text-xl sm:text-2xl font-bold text-[#8B6B23] font-serif-wedding">{stats.hadir}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Tamu Hadir</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all">
          <p className="text-xl sm:text-2xl font-bold text-[#2C2622] font-serif-wedding">{rsvps.length}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Total Doa</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all">
          <p className="text-xl sm:text-2xl font-bold text-rose-600 font-serif-wedding">{stats.tidakHadir}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Berhalangan</p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        style={{ willChange: 'transform, opacity' }}
        className="flex justify-center space-x-2 mb-6 relative z-10"
      >
        {[
          { key: 'all', label: 'Semua Ucapan' },
          { key: 'hadir', label: 'Tamu Hadir' },
          { key: 'tidak', label: 'Berhalangan' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              filter === tab.key
                ? 'bg-[#2C2622] text-[#FCF6BA] shadow'
                : 'bg-[#FAF5EC] text-[#786C62] border border-[#E6DCCF] hover:bg-[#F2E8D8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Wishes Feed List */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
        className="space-y-4 max-h-[500px] overflow-y-auto pr-1 relative z-10 no-scrollbar"
      >
        {loading ? (
          <div className="text-center py-12 text-sm text-[#786C62]">
            Memuat buku tamu...
          </div>
        ) : filteredRsvps.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#E6DCCF] p-8 text-sm text-[#786C62]">
            Belum ada ucapan untuk kategori ini. Jadilah yang pertama memberikan doa!
          </div>
        ) : (
          filteredRsvps.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-[#E6DCCF] shadow-sm space-y-3 hover:border-[#D4AF37]/60 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#D4AF37]/30 flex items-center justify-center text-[#8B6B23] font-serif-wedding font-bold text-lg">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif-wedding text-lg font-bold text-[#2C2622]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#A09386]">
                      {new Date(item.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                    item.status === 'hadir'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : item.status === 'tidak'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {item.status === 'hadir' ? (
                    <>
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Hadir ({item.guestsCount} Org)</span>
                    </>
                  ) : item.status === 'tidak' ? (
                    <>
                      <XCircle className="w-3 h-3 text-rose-600" />
                      <span>Berhalangan</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-3 h-3 text-amber-600" />
                      <span>Ragu-ragu</span>
                    </>
                  )}
                </span>
              </div>

              <p className="text-sm text-[#4A3E35] leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E6DCCF]/70">
                "{item.message}"
              </p>

              <div className="flex items-center justify-end pt-1">
                <button
                  onClick={() => handleLike(item.id)}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#8B6B23] hover:text-[#AA771C] font-semibold transition-colors cursor-pointer py-1 px-2.5 rounded-full hover:bg-[#FAF5EC]"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Suka ({item.likes})</span>
                </button>
              </div>
            </div>
          ))
        )}
      </motion.div>
      </div>
    </section>
  );
};
