import { RSVPItem } from '../types';

const STORAGE_KEY = 'wedding_rsvps_data';

const INITIAL_RSVPS: RSVPItem[] = [
  {
    id: "1",
    name: "Bapak Roni & Keluarga",
    status: "hadir",
    guestsCount: 2,
    message: "Selamat untuk Anton dan Sri. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin YRA.",
    createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString(),
    likes: 12
  },
  {
    id: "2",
    name: "Achmad & Rohaya",
    status: "hadir",
    guestsCount: 4,
    message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khair. Doa terbaik dari kami keluarga besar.",
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    likes: 18
  },
  {
    id: "3",
    name: "Sahabat SMA Anton",
    status: "hadir",
    guestsCount: 5,
    message: "Lancar sampai hari H Ton & Sri! Siap hadir meramaikan resepsi!",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    likes: 7
  }
];

function getLocalRsvps(): RSVPItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_RSVPS));
    return INITIAL_RSVPS;
  } catch (err) {
    return INITIAL_RSVPS;
  }
}

function saveLocalRsvps(items: RSVPItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
  }
}

export async function fetchRsvps(): Promise<{
  data: RSVPItem[];
  stats: { totalResponses: number; hadir: number; tidakHadir: number; ragu: number };
}> {
  try {
    const res = await fetch('/api/rsvps');
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        return { data: json.data, stats: json.stats };
      }
    }
  } catch (err) {
    // API not reachable (e.g. static hosting on InfinityFree/Vercel)
  }

  // Fallback to localStorage
  const data = getLocalRsvps();
  const stats = {
    totalResponses: data.length,
    hadir: data.filter(r => r.status === 'hadir').reduce((acc, curr) => acc + (curr.guestsCount || 1), 0),
    tidakHadir: data.filter(r => r.status === 'tidak').length,
    ragu: data.filter(r => r.status === 'ragu').length,
  };

  return { data, stats };
}

export async function submitRsvp(payload: {
  name: string;
  status: 'hadir' | 'tidak' | 'ragu';
  guestsCount: number;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch('/api/rsvps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success) {
        return { success: true };
      }
    }
  } catch (err) {
    // API failed, fallback to localStorage
  }

  // Fallback to localStorage
  const current = getLocalRsvps();
  const newRsvp: RSVPItem = {
    id: Date.now().toString(),
    name: payload.name.trim(),
    status: payload.status,
    guestsCount: payload.guestsCount || 1,
    message: payload.message.trim(),
    createdAt: new Date().toISOString(),
    likes: 0
  };

  current.unshift(newRsvp);
  saveLocalRsvps(current);

  return { success: true };
}

export async function likeRsvp(id: string): Promise<number | null> {
  try {
    const res = await fetch(`/api/rsvps/${id}/like`, { method: 'POST' });
    if (res.ok) {
      const json = await res.json();
      if (json.success) {
        return json.likes;
      }
    }
  } catch (err) {
    // API failed
  }

  // Fallback to localStorage
  const current = getLocalRsvps();
  const target = current.find(r => r.id === id);
  if (target) {
    target.likes += 1;
    saveLocalRsvps(current);
    return target.likes;
  }
  return null;
}
