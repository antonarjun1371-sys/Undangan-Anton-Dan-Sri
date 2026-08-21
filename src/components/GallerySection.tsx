import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { ChevronLeft, ChevronRight, X, Sparkles, Maximize2, Play, Pause, LayoutGrid, Columns } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  // Auto slide timer
  React.useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % GALLERY_PHOTOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="galeri" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Galeri Momen Bahagia</span>
        </div>
        <h2 className="font-serif-wedding text-4xl sm:text-5xl font-bold text-[#2C2622]">
          Kisah & Kenangan
        </h2>
        <p className="font-serif-wedding italic text-base text-[#786C62]">
          Kumpulan momen indah perjalanan kasih Anton & Sri
        </p>
      </motion.div>

      {/* FEATURED SLIDESHOW CAROUSEL */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white rounded-3xl p-4 sm:p-6 border border-[#E6DCCF] shadow-xl overflow-hidden mb-8"
      >
        <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={GALLERY_PHOTOS[activeSlide].url}
              alt={GALLERY_PHOTOS[activeSlide].title}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Slide Overlay Gradient & Caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#FCF6BA]">
              {GALLERY_PHOTOS[activeSlide].title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl italic">
              "{GALLERY_PHOTOS[activeSlide].caption}"
            </p>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/70 transition-colors cursor-pointer"
            title="Foto Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/70 transition-colors cursor-pointer"
            title="Foto Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* AutoPlay & Lightbox Controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 rounded-full bg-black/40 backdrop-blur text-white hover:bg-black/70 transition-colors cursor-pointer"
              title={isAutoPlay ? "Jeda SlideShow" : "Putar SlideShow"}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 text-[#D4AF37]" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedImageIndex(activeSlide)}
              className="p-2 rounded-full bg-black/40 backdrop-blur text-white hover:bg-black/70 transition-colors cursor-pointer"
              title="Perbesar Foto"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {GALLERY_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeSlide === idx
                  ? 'w-8 bg-gradient-to-r from-[#BF953F] to-[#AA771C]'
                  : 'w-2 bg-[#E6DCCF] hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Gallery Control Bar with Grid vs Masonry View Filter */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center space-x-2 text-xs font-cinzel text-[#7A5B1E] tracking-wider uppercase font-bold">
          <span>Koleksi Foto</span>
          <span className="text-[#4A3E35]">({GALLERY_PHOTOS.length})</span>
        </div>

        {/* View Layout Filter Buttons */}
        <div className="inline-flex items-center p-1 rounded-xl bg-[#F8F5F0] border border-[#D6C4AD] shadow-inner space-x-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-white shadow-md'
                : 'text-[#4A3E35] hover:text-[#1C1815] hover:bg-white/80'
            }`}
            title="Tampilan Grid Simetris"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'masonry'
                ? 'bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-white shadow-md'
                : 'text-[#4A3E35] hover:text-[#1C1815] hover:bg-white/80'
            }`}
            title="Tampilan Masonry / Portfolio"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Masonry</span>
          </button>
        </div>
      </div>

      {/* THUMBNAIL GALLERY DISPLAY */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {GALLERY_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setSelectedImageIndex(index)}
                className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#E6DCCF] shadow-sm cursor-pointer group bg-white"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-6 h-6 text-[#FCF6BA]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="masonry-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="columns-2 sm:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          >
            {GALLERY_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => setSelectedImageIndex(index)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-[#E6DCCF] shadow-sm cursor-pointer group bg-white"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-4 flex flex-col justify-end text-white">
                  <p className="font-serif-wedding text-xs sm:text-sm font-bold text-[#FCF6BA]">{photo.title}</p>
                  <p className="text-[10px] sm:text-xs text-white/80 line-clamp-2 italic">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <motion.img
                key={selectedImageIndex}
                src={GALLERY_PHOTOS[selectedImageIndex].url}
                alt={GALLERY_PHOTOS[selectedImageIndex].title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <div className="text-center mt-4 text-white space-y-1">
                <h4 className="font-serif-wedding text-2xl font-bold text-[#FCF6BA]">
                  {GALLERY_PHOTOS[selectedImageIndex].title}
                </h4>
                <p className="text-xs text-white/80 italic">
                  {GALLERY_PHOTOS[selectedImageIndex].caption}
                </p>
              </div>

              {/* Modal Next / Prev */}
              <button
                onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_PHOTOS.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
