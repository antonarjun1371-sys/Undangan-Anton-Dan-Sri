import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { VENUE_COORDS, GOOGLE_MAPS_LINK, WAZE_MAPS_LINK } from '../data/weddingData';

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
    <section id="lokasi" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B6B23] text-xs font-cinzel tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Denah & Peta Interaktif</span>
        </div>
        <h2 className="font-serif-wedding text-4xl sm:text-5xl font-bold text-[#2C2622]">
          Lokasi Acara
        </h2>
        <p className="font-serif-wedding italic text-base text-[#786C62]">
          Koordinat Presisi: <span className="font-sans font-semibold text-[#8B6B23]">{VENUE_COORDS.lat}, {VENUE_COORDS.lng}</span>
        </p>
      </motion.div>

      {/* Map Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E6DCCF] shadow-xl space-y-6"
      >
        {/* Leaflet Map Canvas */}
        <div
          ref={mapContainerRef}
          className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-inner z-10"
        />

        {/* Direction Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center space-x-2 text-xs text-[#786C62]">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Probolinggo, Jawa Timur</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={copyCoordinates}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#FAF5EC] text-[#8B6B23] border border-[#D4AF37]/30 text-xs font-medium flex items-center justify-center space-x-1.5 hover:bg-[#F2E8D8] transition-colors cursor-pointer"
            >
              {copiedCoords ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCoords ? "Koordinat Tersalin!" : "Salin Koordinat"}</span>
            </button>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#2C2622] text-[#FCF6BA] text-xs font-medium flex items-center justify-center space-x-1.5 hover:bg-[#3D352E] transition-colors cursor-pointer shadow"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Google Maps</span>
            </a>

            <a
              href={WAZE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#33CCFF] text-white text-xs font-medium flex items-center justify-center space-x-1.5 hover:opacity-90 transition-opacity cursor-pointer shadow"
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
