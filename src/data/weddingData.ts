// ============================================================================
// CARA MENGUBAH FOTO ATAU TEKS UNDANGAN PERNIKAHAN
// 1. Untuk foto: Simpan file foto baru di folder `src/assets/images/`
//    lalu ubah import di bawah ini, atau masukkan URL foto online.
// 2. Untuk teks: Ubah nilai pada objek GROOM, BRIDE, AKAD_EVENT, RESEPSI_EVENT, dll.
// ============================================================================

import { CouplePerson, EventDetail, GalleryPhoto, BankAccount } from '../types';

import heroCoverImg from '../assets/images/wedding_hero_cover_1786035117896.jpeg';
import coupleMainImg from '../assets/images/couple_portrait_main_1786035134752.jpeg';
import coupleGallery2Img from '../assets/images/couple_gallery_2_1786035154936.jpeg';
import ringsDetailImg from '../assets/images/wedding_rings_detail_1786035171458.jpeg';

export const HERO_COVER_IMAGE = heroCoverImg;
export const COUPLE_MAIN_IMAGE = coupleMainImg;

// ==================== DATA MEMPELAI PRIA & WANITA ====================
export const GROOM: CouplePerson = {
  fullName: "Anton Dwi Prastia",
  shortName: "Anton",
  genderRole: "mempelai_pria",
  childOrder: "Putra pertama",
  fatherName: "Bapak Roni Sudarmanto",
  motherName: "Ibu Ike Irawati",
  avatarUrl: coupleMainImg, // Ganti dengan foto Mempelai Pria
  instagram: "@antondwiprastia",
  bio: "Seorang pria penyabar yang selalu percaya bahwa cinta adalah perjalanan tumbuh bersama dengan saling menghargai."
};

export const BRIDE: CouplePerson = {
  fullName: "Sri Yatin",
  shortName: "Sri",
  genderRole: "mempelai_wanita",
  childOrder: "Putri ketiga",
  fatherName: "Bapak Achmad",
  motherName: "Ibu Rohaya",
  avatarUrl: coupleGallery2Img, // Ganti dengan foto Mempelai Wanita
  instagram: "@sriyatin_",
  bio: "Seorang wanita yang hangat, penuh senyum dan senantiasa meyakini takdir indah saat dua hati disatukan dalam ketulusan."
};

export const WEDDING_DATE = new Date("2026-09-10T07:00:00+07:00");
export const WEDDING_DATE_STRING = "Kamis, 10 September 2026";

export const VENUE_COORDS = {
  lat: -7.804230,
  lng: 113.213218
};

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${VENUE_COORDS.lat},${VENUE_COORDS.lng}`;
export const WAZE_MAPS_LINK = `https://waze.com/ul?ll=${VENUE_COORDS.lat},${VENUE_COORDS.lng}&navigate=yes`;

export const AKAD_EVENT: EventDetail = {
  id: "akad",
  title: "Akad Nikah",
  dateStr: "Kamis, 10 September 2026",
  isoDate: "2026-09-10",
  timeStr: "07.00 WIB s.d Selesai",
  venueName: "Kediaman Mempelai / Lokasi Utama",
  address: "Probolinggo, Jawa Timur (Koordinat: -7.804230, 113.213218)",
  coords: VENUE_COORDS,
  googleMapsUrl: GOOGLE_MAPS_LINK,
  wazeUrl: WAZE_MAPS_LINK
};

export const RESEPSI_EVENT: EventDetail = {
  id: "resepsi",
  title: "Resepsi Pernikahan",
  dateStr: "Kamis, 10 September 2026",
  isoDate: "2026-09-10",
  timeStr: "14.00 - 17.00 WIB",
  venueName: "Gedung / Lokasi Utama",
  address: "Probolinggo, Jawa Timur (Koordinat: -7.804230, 113.213218)",
  coords: VENUE_COORDS,
  googleMapsUrl: GOOGLE_MAPS_LINK,
  wazeUrl: WAZE_MAPS_LINK
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    url: coupleMainImg,
    title: "Momen Bahagia Anton & Sri",
    caption: "Langkah awal menyongsong masa depan dalam satu ikatan suci."
  },
  {
    id: "g2",
    url: coupleGallery2Img,
    title: "Kebersamaan & Kehangatan",
    caption: "Setiap tawa dan senyuman menjadi saksi ketulusan cinta kami."
  },
  {
    id: "g3",
    url: ringsDetailImg,
    title: "Simbol Cincin Suci",
    caption: "Dua lingkaran keabadian melambangkan janji setia selamanya."
  },
  {
    id: "g4",
    url: heroCoverImg,
    title: "Ukiran Kisah Kami",
    caption: "Keindahan momen yang akan dikenang sepanjang masa."
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: "Bank BRI",
    accountNumber: "6294 0102 9483 531",
    accountHolder: "ANTON DWI PRASTIA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg"
  },
  {
    bankName: "Bank BRI",
    accountNumber: "0012 0108 3948 502",
    accountHolder: "SRI YATIN",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg"
  }
];

export const SONG_INFO = {
  title: "Ketika Cinta Bertasbih",
  artist: "Melly Goeslaw feat. Amee",
  subtitle: "Soundtrack Pernikahan Islami"
};

// URL Audio Soundtrack Pernikahan: Ketika Cinta Bertasbih - Melly Goeslaw feat. Amee
// Jika ingin menggunakan file audio lokal sendiri, masukkan file .mp3 ke folder `src/assets/` dan import di sini.
export const BACKGROUND_MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ketika-cinta-bertasbih-soundtrack.mp3";
