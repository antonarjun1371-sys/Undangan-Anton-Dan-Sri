import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageSquare, CheckCircle, XCircle, HelpCircle, Sparkles, User, ThumbsUp } from 'lucide-react';
import { RSVPItem } from '../types';
import { fetchRsvps, likeRsvp } from '../services/rsvpService';

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
    <section id="ucapan" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Buku Tamu & Doa Restu</span>
        </div>
        <h2 className="font-serif-wedding text-4xl sm:text-5xl font-bold text-[#2C2622]">
          Ucapan Sahabat & Keluarga
        </h2>
        <p className="font-serif-wedding italic text-base text-[#786C62]">
          Kumpulan kehangatan doa dan tulus rasa dari orang-orang tersayang
        </p>
      </motion.div>

      {/* Summary Stats Badges */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-[#8B6B23] font-serif-wedding">{stats.hadir}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Tamu Hadir</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-[#2C2622] font-serif-wedding">{rsvps.length}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Total Doa</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DCCF] text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-rose-600 font-serif-wedding">{stats.tidakHadir}</p>
          <p className="text-[10px] sm:text-xs text-[#786C62] uppercase font-medium mt-0.5">Berhalangan</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-2 mb-6">
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
      </div>

      {/* Wishes Feed List */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
        {loading ? (
          <div className="text-center py-12 text-sm text-[#786C62]">
            Memuat buku tamu...
          </div>
        ) : filteredRsvps.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#E6DCCF] p-8 text-sm text-[#786C62]">
            Belum ada ucapan untuk kategori ini. Jadilah yang pertama memberikan doa!
          </div>
        ) : (
          <AnimatePresence>
            {filteredRsvps.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-5 rounded-2xl border border-[#E6DCCF] shadow-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors"
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

                {item.message && (
                  <p className="text-sm text-[#52463C] leading-relaxed bg-[#FAF8F5] p-3 rounded-xl border border-[#F0E8DD]">
                    "{item.message}"
                  </p>
                )}

                {/* Like Button */}
                <div className="flex items-center justify-between text-xs text-[#786C62] pt-1">
                  <span className="text-[11px] italic text-[#A09386]">
                    Doa Restu
                  </span>
                  <button
                    onClick={() => handleLike(item.id)}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#FAF5EC] hover:bg-[#F2E8D8] text-[#8B6B23] transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="font-medium">{item.likes > 0 ? item.likes : 'Aamiin'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
