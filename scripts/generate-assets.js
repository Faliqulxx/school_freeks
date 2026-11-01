import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/assets/dummy');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createPlaceholderSvg({ width, height, title, subtitle, ratio, bg = '#E4E7EB', textCol = '#52606D' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="${bg}" />
  <rect x="12" y="12" width="${width - 24}" height="${height - 24}" fill="none" stroke="#CBD2D9" stroke-width="2" stroke-dasharray="6 6" rx="8" />
  <g transform="translate(${width / 2}, ${height / 2 - 20})" text-anchor="middle">
    <!-- Camera icon -->
    <path d="M-20 -10 L-14 -18 L14 -18 L20 -10 L28 -10 C30.2 -10 32 -8.2 32 -6 L32 22 C32 24.2 30.2 26 28 26 L-28 26 C-30.2 26 -32 24.2 -32 22 L-32 -6 C-32 -8.2 -30.2 -10 -28 -10 Z" fill="none" stroke="${textCol}" stroke-width="2.5" stroke-linejoin="round" />
    <circle cx="0" cy="8" r="9" fill="none" stroke="${textCol}" stroke-width="2.5" />
    
    <text y="54" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="${textCol}">${escapeXml(title)}</text>
    ${subtitle ? `<text y="78" font-family="Inter, sans-serif" font-size="14" fill="${textCol}" opacity="0.85">${escapeXml(subtitle)} (${ratio})</text>` : ''}
  </g>
</svg>`;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

const assets = [
  // Hero & Kepala
  { name: 'hero-madrasah.svg', width: 1200, height: 900, ratio: '4:3', title: 'Foto: Gedung & Siswa MTs Islamiyah', subtitle: 'Suasana Gerbang & Halaman Utama' },
  { name: 'kepala-madrasah.svg', width: 800, height: 1000, ratio: '4:5', title: 'Foto: H. Muhammad Rizal, S.Pd.I., M.Pd.', subtitle: 'Kepala Madrasah' },

  // Berita
  { name: 'berita-01.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Apel & Lomba Kaligrafi Hari Santri', subtitle: 'Siswa berbaris saat apel Hari Santri' },
  { name: 'berita-02.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Tim Olimpiade Sains Kabupaten', subtitle: 'Prestasi Juara 2 Tingkat Kabupaten' },
  { name: 'berita-03.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Penilaian Tengah Semester', subtitle: 'Suasana Ruang Ujian Tertib' },
  { name: 'berita-04.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Jumat Berbagi', subtitle: 'Donasi Siswa untuk Panti Asuhan' },
  { name: 'berita-05.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Pelantikan OSIS 2026/2027', subtitle: 'Pengurus Baru Mengucapkan Ikrar' },
  { name: 'berita-06.svg', width: 1600, height: 1000, ratio: '16:10', title: 'Foto: Kunjungan Studi Banding Perpustakaan', subtitle: 'Diskusi Bersama Sekolah Mitra' },

  // Guru (4:5)
  { name: 'guru-01.svg', width: 400, height: 500, ratio: '4:5', title: 'H. Muhammad Rizal, S.Pd.I., M.Pd.', subtitle: 'Kepala Madrasah' },
  { name: 'guru-02.svg', width: 400, height: 500, ratio: '4:5', title: 'Siti Nurhaliza, S.Pd.', subtitle: 'Waka Kurikulum / Matematika' },
  { name: 'guru-03.svg', width: 400, height: 500, ratio: '4:5', title: 'Ahmad Fauzan, S.Pd.I.', subtitle: 'Waka Kesiswaan / Akidah Akhlak' },
  { name: 'guru-04.svg', width: 400, height: 500, ratio: '4:5', title: 'Dewi Rahmawati, S.Si.', subtitle: 'Guru IPA' },
  { name: 'guru-05.svg', width: 400, height: 500, ratio: '4:5', title: 'Mochamad Ilham, S.Pd.', subtitle: 'Guru Bahasa Inggris' },
  { name: 'guru-06.svg', width: 400, height: 500, ratio: '4:5', title: 'Ustadzah Laila Munawaroh, S.Ag.', subtitle: 'Bahasa Arab & Tahfidz' },
  { name: 'guru-07.svg', width: 400, height: 500, ratio: '4:5', title: 'Hendra Wijaya, S.Pd.', subtitle: 'Guru IPS' },
  { name: 'guru-08.svg', width: 400, height: 500, ratio: '4:5', title: 'Nur Aini, A.Md.', subtitle: 'Tata Usaha' },

  // Fasilitas
  { name: 'fasilitas-kelas.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Ruang Kelas Ber-AC & Kipas', subtitle: 'Meja kursi ergonomis dan proyektor' },
  { name: 'fasilitas-musala.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Musala Madrasah', subtitle: 'Tempat Shalat Dhuha & Dzuhur Berjamaah' },
  { name: 'fasilitas-perpus.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Perpustakaan Ramah Anak', subtitle: 'Koleksi buku lengkap & area baca lesehan' },
  { name: 'fasilitas-lab.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Laboratorium IPA', subtitle: 'Peralatan praktikum fisika & biologi' },
  { name: 'fasilitas-lapangan.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Lapangan Serbaguna', subtitle: 'Futsal, voli, basket, dan upacara bendera' },
  { name: 'fasilitas-kantin.svg', width: 1200, height: 800, ratio: '3:2', title: 'Fasilitas: Kantin Sehat & Bersih', subtitle: 'Menu higienis berstandar gizi siswa' },

  // Ekskul
  { name: 'ekskul-hadrah.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: Hadrah dan Qasidah', subtitle: 'Latihan mingguan seni islami' },
  { name: 'ekskul-pramuka.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: Pramuka Gudep MTs', subtitle: 'Kegiatan kepanduan & cinta alam' },
  { name: 'ekskul-futsal.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: Futsal Pelajar', subtitle: 'Pembinaan fisik & turnamen antar sekolah' },
  { name: 'ekskul-kir.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: Karya Ilmiah Remaja (KIR)', subtitle: 'Riset ilmiah remaja & karya tulis' },
  { name: 'ekskul-tilawah.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: Tilawah & Kaligrafi', subtitle: 'Seni baca Al-Qur\'an & tulisan indah' },
  { name: 'ekskul-english.svg', width: 800, height: 500, ratio: '16:10', title: 'Ekskul: English Club', subtitle: 'Percakapan bahasa Inggris aktif' },

  // Galeri (mixed ratios: 3:2, 4:3, 2:3, 1:1)
  { name: 'galeri-01.svg', width: 900, height: 600, ratio: '3:2', title: 'Hari Santri: Apel Bersama', subtitle: 'Album Hari Santri 2026' },
  { name: 'galeri-02.svg', width: 600, height: 900, ratio: '2:3', title: 'Hari Santri: Lomba Kaligrafi', subtitle: 'Album Hari Santri 2026 (Potret)' },
  { name: 'galeri-03.svg', width: 800, height: 600, ratio: '4:3', title: 'Olimpiade: Presentasi Tim Sains', subtitle: 'Album Sains 2026' },
  { name: 'galeri-04.svg', width: 600, height: 600, ratio: '1:1', title: 'Olimpiade: Penerimaan Piala', subtitle: 'Album Sains 2026 (Persegi)' },
  { name: 'galeri-05.svg', width: 900, height: 600, ratio: '3:2', title: 'OSIS: Ikrar Pengurus', subtitle: 'Album Pelantikan OSIS 2026' },
  { name: 'galeri-06.svg', width: 600, height: 900, ratio: '2:3', title: 'OSIS: Serah Terima Panji', subtitle: 'Album Pelantikan OSIS (Potret)' },
  { name: 'galeri-07.svg', width: 900, height: 600, ratio: '3:2', title: 'Jumat Berbagi: Penyerahan Sembako', subtitle: 'Album Jumat Berbagi' },
  { name: 'galeri-08.svg', width: 800, height: 600, ratio: '4:3', title: 'Jumat Berbagi: Doa Bersama', subtitle: 'Album Jumat Berbagi' },

  // Poster 3D model
  { name: 'poster-3d.svg', width: 500, height: 500, ratio: '1:1', title: 'Logo 3D YPI Ujungpangkah', subtitle: 'Pratinjau Model 3D Logo Yayasan', bg: '#F1F8EA' }
];

for (const a of assets) {
  const p = path.join(outDir, a.name);
  fs.writeFileSync(p, createPlaceholderSvg(a), 'utf8');
}

// Generate YPI Logo 2D SVG
const logoYpiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
      <stop offset="70%" stop-color="#F5D90A" />
      <stop offset="100%" stop-color="#D9BE00" />
    </radialGradient>
  </defs>
  <!-- Petals background (green) -->
  <g fill="#1B7A2F" stroke="#0B3B16" stroke-width="1.5">
    <!-- 8 Petals representing YPI flower -->
    <path d="M80,10 C92,40 108,55 140,40 C125,72 140,88 150,80 C140,92 125,108 140,120 C108,105 92,120 80,150 C68,120 52,105 20,120 C35,108 20,92 10,80 C20,68 35,52 20,40 C52,55 68,40 80,10 Z" />
  </g>
  <!-- Outer Yellow Ring -->
  <circle cx="80" cy="80" r="54" fill="#0F4D1C" stroke="#F5D90A" stroke-width="5" />
  <!-- Text inside ring -->
  <circle cx="80" cy="80" r="44" fill="#1B7A2F" stroke="#F5D90A" stroke-width="2" />
  <!-- Globe & Book Icon in Center -->
  <!-- Globe lines -->
  <circle cx="80" cy="80" r="34" fill="#3DA352" />
  <ellipse cx="80" cy="80" rx="34" ry="14" fill="none" stroke="#CDE8B5" stroke-width="1.5" />
  <ellipse cx="80" cy="80" rx="16" ry="34" fill="none" stroke="#CDE8B5" stroke-width="1.5" />
  <line x1="46" y1="80" x2="114" y2="80" stroke="#CDE8B5" stroke-width="1.5" />
  
  <!-- Open Book -->
  <path d="M60,88 Q80,82 80,94 Q80,82 100,88 L98,100 Q80,94 80,102 Q80,94 62,100 Z" fill="#FAFBF5" stroke="#0B3B16" stroke-width="1.5" />
  <line x1="80" y1="94" x2="80" y2="102" stroke="#0B3B16" stroke-width="1.5" />
  
  <!-- Flaming Torch -->
  <path d="M77,74 L83,74 L81,86 L79,86 Z" fill="#F5D90A" stroke="#0B3B16" stroke-width="1" />
  <!-- Flame -->
  <path d="M80,58 C85,64 86,68 83,73 C80,75 77,73 77,70 C75,67 78,63 80,58 Z" fill="#F5D90A" stroke="#D9BE00" stroke-width="1" />
  <path d="M80,62 C82,65 83,67 81,70 C80,71 78,70 78,68 C77,66 79,64 80,62 Z" fill="#FAFBF5" />
  
  <!-- Golden 5-pointed Star on top -->
  <polygon points="80,42 82.5,49 90,49 84,53 86.5,60 80,56 73.5,60 76,53 70,49 77.5,49" fill="#F5D90A" stroke="#0B3B16" stroke-width="1" />
</svg>`;

fs.writeFileSync(path.resolve('public/assets/logo-ypi.svg'), logoYpiSvg, 'utf8');
console.log(`Generated ${assets.length} placeholder assets and logo-ypi.svg`);

