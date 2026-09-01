import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { VENUE_COORDS, GOOGLE_MAPS_LINK, WAZE_MAPS_LINK } from '../data/weddingData';
import { KineticLineFlourish } from './MotionGraphicElements';

// Declare Leaflet globally since loaded via script tag in index.html
declare const L: any;

export const MapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);

  useEffect(() => {
    if (typeof L === 'undefined' || !mapContainerRef.current || mapInstanceRef.current) return;

    try {
      // Initialize Leaflet map with coordinates -7.804230, 113.213218
      const map = L.map(mapContainerRef.current).setView([VENUE_COORDS.lat, VENUE_COORDS.lng], 15);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Custom gold SVG pin icon
      const goldIcon = L.divIcon({
        className: 'custom-gold-marker',
        html: `
          <div style="
            background: linear-gradient(135deg, #BF953F, #AA771C);
            width: 38px;
            height: 38px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.6);
            border: 2px solid #FFFFFF;
          ">
            <div style="
              width: 14px;
              height: 14px;
              background: #FFFFFF;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });

      // Add Marker
      const marker = L.marker([VENUE_COORDS.lat, VENUE_COORDS.lng], { icon: goldIcon }).addTo(map);

      // Popup content
      marker.bindPopup(`
        <div style="text-align: center; padding: 4px;">
          <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: bold; color: #2C2622; margin-bottom: 2px;">
            Lokasi Pernikahan Anton & Sri
          </h4>
          <p style="font-size: 12px; color: #8B6B23; margin: 0 0 6px 0;">
            Akad Nikah & Resepsi Pernikahan
          </p>
          <p style="font-size: 11px; color: #786C62; margin-bottom: 8px;">
            Koordinat: ${VENUE_COORDS.lat}, ${VENUE_COORDS.lng}
          </p>
          <a href="${GOOGLE_MAPS_LINK}" target="_blank" style="
            display: inline-block;
            background: #2C2622;
            color: #FCF6BA;
            padding: 5px 12px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 11px;
            font-weight: 600;
          ">
            Petunjuk Arah Google Maps
          </a>
        </div>
      `).openPopup();
    } catch (e) {
      console.error("Leaflet Map Error:", e);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${VENUE_COORDS.lat}, ${VENUE_COORDS.lng}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 3000);
  };

  return (
    <section id="lokasi" className="pt-8 pb-10 sm:pt-10 sm:pb-12 px-3 sm:px-4 max-w-5xl mx-auto scroll-mt-12 relative overflow-hidden content-visibility-auto">
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
        className="text-center mb-6 space-y-2.5 relative z-10"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] text-[#5A1422] text-xs font-cinzel font-bold tracking-[0.2em] border border-[#D4AF37] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#AA771C]" />
          <span>DENAH & PETA INTERAKTIF</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F1418] tracking-wider drop-shadow-sm uppercase">
          Lokasi Acara
        </h2>
        <KineticLineFlourish className="text-[#D4AF37]" />
        <p className="font-serif-wedding italic text-base sm:text-xl text-[#3E101A] font-medium leading-relaxed">
          Koordinat Presisi: <span className="font-sans font-bold text-[#5A1422]">{VENUE_COORDS.lat}, {VENUE_COORDS.lng}</span>
        </p>
      </motion.div>

      {/* Map Card */}
      <motion.div 
        initial={{ opacity: 0, y: 45, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.15, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
        className="relative bg-gradient-to-b from-white/95 via-[#FFFDF9]/95 to-[#FAF5EC]/95 backdrop-blur-sm rounded-3xl p-5 sm:p-8 border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(180,140,70,0.12)] space-y-6 overflow-hidden ring-1 ring-[#D4AF37]/20 hover:border-[#D4AF37] transition-all transform-gpu"
      >
        {/* Subtle Corner Filigree Accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />

        {/* Leaflet Map Canvas */}
        <div
          ref={mapContainerRef}
          className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-inner z-10 ring-4 ring-[#FAF5EC]"
        />

        {/* Direction Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 relative z-10">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#786C62]">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Probolinggo, Jawa Timur</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={copyCoordinates}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#FAF5EC] text-[#8B6B23] border border-[#D4AF37]/40 text-xs font-semibold flex items-center justify-center space-x-1.5 hover:bg-[#F2E8D8] transition-colors cursor-pointer shadow-sm"
            >
              {copiedCoords ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#AA771C]" />}
              <span>{copiedCoords ? "Koordinat Tersalin!" : "Salin Koordinat"}</span>
            </button>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#2C2622] hover:bg-[#3D352E] text-[#FCF6BA] text-xs font-semibold flex items-center justify-center space-x-1.5 border border-[#D4AF37]/40 transition-all cursor-pointer shadow"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Google Maps</span>
            </a>

            <a
              href={WAZE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#33CCFF] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 hover:opacity-90 transition-opacity cursor-pointer shadow"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Waze</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
