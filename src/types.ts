export interface GuestInfo {
  name: string;
  category?: string;
}

export interface CouplePerson {
  fullName: string;
  shortName: string;
  genderRole: 'mempelai_pria' | 'mempelai_wanita';
  childOrder: string; // e.g. "Putra pertama" or "Putri ketiga"
  fatherName: string;
  motherName: string;
  avatarUrl: string;
  instagram?: string;
  bio?: string;
}

export interface EventDetail {
  id: 'akad' | 'resepsi';
  title: string;
  dateStr: string; // "Kamis, 10 September 2026"
  isoDate: string; // "2026-09-10"
  timeStr: string; // "07.00 WIB s.d Selesai"
  venueName: string;
  address: string;
  coords: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  wazeUrl: string;
}

export interface RSVPItem {
  id: string;
  name: string;
  status: 'hadir' | 'tidak' | 'ragu';
  guestsCount: number;
  message: string;
  createdAt: string;
  likes: number;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logoUrl?: string;
  qrCodeUrl?: string;
}
