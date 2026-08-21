import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface RSVP {
  id: string;
  name: string;
  status: 'hadir' | 'tidak' | 'ragu';
  guestsCount: number;
  message: string;
  createdAt: string;
  likes: number;
}

// Initial mock dataset for a warm, active guestbook look
const rsvps: RSVP[] = [
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/rsvps", (req, res) => {
    res.json({
      success: true,
      data: rsvps,
      stats: {
        totalResponses: rsvps.length,
        hadir: rsvps.filter(r => r.status === 'hadir').reduce((acc, curr) => acc + curr.guestsCount, 0),
        tidakHadir: rsvps.filter(r => r.status === 'tidak').length,
        ragu: rsvps.filter(r => r.status === 'ragu').length,
      }
    });
  });

  app.post("/api/rsvps", (req, res) => {
    const { name, status, guestsCount, message } = req.body;

    if (!name || !status) {
      return res.status(400).json({ success: false, message: "Nama dan status kehadiran wajib diisi" });
    }

    const newRsvp: RSVP = {
      id: Date.now().toString(),
      name: name.trim(),
      status: status || 'hadir',
      guestsCount: Number(guestsCount) || 1,
      message: (message || '').trim(),
      createdAt: new Date().toISOString(),
      likes: 0
    };

    rsvps.unshift(newRsvp);

    res.status(201).json({
      success: true,
      data: newRsvp,
      message: "RSVP dan ucapan berhasil dikirim!"
    });
  });

  app.post("/api/rsvps/:id/like", (req, res) => {
    const { id } = req.params;
    const target = rsvps.find(r => r.id === id);
    if (target) {
      target.likes += 1;
      return res.json({ success: true, likes: target.likes });
    }
    res.status(404).json({ success: false, message: "Ucapan tidak ditemukan" });
  });

  // Vite development server / production static server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
