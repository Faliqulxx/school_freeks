# Panduan Struktur Folder & Arsitektur Proyek 🏛️

Dokumen ini ditujukan bagi pengembang (*developer*) atau kontributor yang ingin memahami cara kerja kode, memodifikasi tampilan, menambahkan fitur baru, atau memelihara template ini ke depannya.

---

## 1. Ikhtisar Arsitektur

Template ini mengadopsi prinsip **Islands Architecture** dari **Astro v5 (Static Site Generation / SSG)** dan pendekatan **Data-Driven Design**:

- **Statis & Cepat (Zero JavaScript by Default)**: Halaman informasi publik (Beranda, Profil, Guru, Berita, Fasilitas) dikompilasi menjadi HTML murni saat build. Tidak ada runtime framework JS berat (React/Vue/Angular) yang dikirim ke browser pengguna untuk halaman-halaman tersebut.
- **Client-Side Interactivity**: JavaScript interaktif hanya disertakan secara modular pada komponen yang benar-benar membutuhkan aksi peramban:
  - Menu navigasi mobile accordion ([`Header.astro`](../src/components/Header.astro))
  - Tombol WhatsApp melayang & scroll-to-top ([`FloatingActions.astro`](../src/components/FloatingActions.astro))
  - Formulir pendaftaran multi-step dengan autosave draft ([`daftar.astro`](../src/pages/ppdb/daftar.astro))
  - Viewer 3D model web component ([`ModelViewer3D.astro`](../src/components/ModelViewer3D.astro))
  - Panel visual pengelola konten ([`src/pages/admin/`](../src/pages/admin/))
- **Data Terpisah dari Presentasi**: Seluruh teks, profil, guru, berita, dan jadwal disimpan di file JSON terstruktur dalam `src/data/`. Pengembang dapat mengubah tampilan tanpa merusak data, dan operator sekolah dapat mengubah data tanpa menyentuh kode HTML.

---

## 2. Peta Direktori & Fungsi Berkas

```text
├── .github/                      # Konfigurasi GitHub
│   ├── ISSUE_TEMPLATE/           # Template laporan bug & request fitur
│   ├── workflows/ci.yml          # GitHub Actions CI (otomatis uji 'npm run build' pada PR)
│   └── PULL_REQUEST_TEMPLATE.md  # Format standar saat membuat PR
├── database/                     # Skema SQL untuk integrasi database riil
│   ├── mysql.sql                 # Skema DDL tabel untuk MySQL / MariaDB / PlanetScale
│   └── supabase.sql              # Skema DDL Supabase lengkap dengan Row Level Security (RLS)
├── docs/                         # Dokumentasi panduan teknis
│   ├── ASSETS.md                 # Inventaris aset gambar, dimensi, dan lisensi
│   ├── backend-setup.md          # Panduan integrasi Webhook, Supabase, dan MySQL
│   ├── deploy-cloudflare-pages.md# Panduan rilis ke Cloudflare Pages
│   ├── deploy-github-pages.md    # Panduan rilis ke GitHub Pages
│   ├── deploy-netlify.md         # Panduan rilis ke Netlify
│   ├── deploy-vercel.md          # Panduan rilis ke Vercel
│   ├── privacy-and-security.md   # Pedoman keamanan & perlindungan data anak pada PPDB
│   └── project-structure.md      # Dokumen ini (peta struktur kode untuk developer)
├── public/                       # Aset statis yang disajikan langsung ke root domain
│   ├── assets/                   # Berkas gambar WebP, SVG, logo sekolah, dan model 3D .glb
│   ├── robots.txt                # Panduan perayapan bot mesin pencari
│   └── sitemap.xml               # Peta situs XML untuk SEO Google
├── src/                          # Seluruh kode sumber aplikasi Astro
│   ├── components/               # Komponen UI Astro modular (reusable)
│   ├── data/                     # 17 file JSON penyimpan konten sekolah
│   ├── layouts/                  # Kerangka layout utama halaman
│   ├── lib/                      # Pustaka utilitas dan adapter backend
│   ├── pages/                    # Sistem perutean halaman berbasis berkas (File-based Routing)
│   └── styles/                   # Berkas style CSS terpusat
├── .env.example                  # Template variabel lingkungan (backend, demo mode)
├── .gitignore                    # Berkas/folder yang diabaikan git (node_modules, dist, .env)
├── astro.config.mjs              # Berkas konfigurasi utama Astro v5
├── CONTRIBUTING.md               # Pedoman kontribusi komunitas open source
├── LICENSE                       # Lisensi resmi proyek (MIT License)
├── package.json                  # Dependensi proyek & npm scripts
├── README.md                     # Dokumentasi utama proyek untuk publik
└── tsconfig.json                 # Konfigurasi compiler TypeScript Astro
```

---

## 3. Rincian Modul di dalam `src/`

### A. `src/data/` (Pusat Konten)
Seluruh isi website bersumber dari folder ini:
- `site.json` / `siteData.json`: Konfigurasi global sekolah (nama, singkatan, yayasan, alamat, nomor telepon/WhatsApp, jam kantor, koordinat peta, logo, tema warna).
- `berita.json`: Daftar artikel, tanggal publikasi, kategori, penulis, dan ringkasan konten.
- `guru.json`: Daftar tenaga pendidik, foto, bidang studi, dan jabatan.
- `fasilitas.json`: Sarana & prasarana sekolah (laboratorium, ruang kelas, lapangan).
- `ppdb.json`: Tahun ajaran, status gelombang, alur pendaftaran, rincian biaya, dan kuota.
- `galeri.json`: Dokumentasi foto kegiatan sekolah.
- `pengumuman.json`: Pengumuman resmi mendesak/akademik.
- `ekstrakurikuler.json`, `prestasi.json`, `kalender.json`, `alumni.json`, dll.

### B. `src/components/` (Komponen UI)
- `Header.astro`: Bilah navigasi atas desktop & panel menu accordion responsif mobile.
- `Footer.astro`: Kaki halaman, tautan cepat, hak cipta, dan jam operasional.
- `TopBar.astro`: Bilah informasi kontak dan jam kantor di atas header.
- `Breadcrumb.astro`: Navigasi remah roti untuk memudahkan orientasi pengguna.
- `FloatingActions.astro`: Tombol WhatsApp melayang & tombol kembali ke atas (*Scroll-to-top*).
- `Icon.astro`: Pembungkus ikon berbasis pustaka *Lucide Icons*.
- `ModelViewer3D.astro`: Penampil 3D interaktif berbasis web component Google `<model-viewer>`.
- `ThemeScript.astro`: Skrip client untuk inisialisasi tema instan tanpa *flash*.

### C. `src/layouts/` (Kerangka Halaman)
- `BaseLayout.astro`: Layout utama seluruh halaman publik. Mengatur tag `<head>`, meta SEO, Open Graph media sosial, favicon, `<meta name="robots">` mode demo, serta menyertakan TopBar, Header, Footer, dan FloatingActions.
- `AdminLayout.astro`: Layout khusus untuk area `/admin`. Memuat sidebar navigasi admin, guard autentikasi client-side, dan styling CMS.

### D. `src/pages/` (Perutean / Routing Halaman)
Struktur di dalam folder ini mencerminkan URL website secara persis:
- `index.astro` ➔ Halaman Beranda (`/`)
- `404.astro` ➔ Halaman peringatan tidak ditemukan
- `pencarian.astro` ➔ Fitur pencarian konten instan client-side
- `kontak.astro` ➔ Halaman kontak sekolah & formulir kirim pesan
- `profil/`:
  - `sejarah.astro`, `visi-misi.astro`, `sambutan.astro`, `struktur-organisasi.astro`, `fasilitas.astro`, `yayasan.astro`
- `akademik/`:
  - `kurikulum.astro`, `program-unggulan.astro`, `guru.astro`, `kalender.astro`, `prestasi.astro`
- `kesiswaan/`:
  - `ekstrakurikuler.astro`, `osis.astro`, `tata-tertib.astro`, `alumni.astro`
- `informasi/`:
  - `berita/index.astro` ➔ Katalog warta berita
  - `berita/[slug].astro` ➔ Halaman dinamis detail artikel berita
  - `pengumuman.astro`, `galeri.astro`, `unduhan.astro`
- `ppdb/`:
  - `index.astro`, `alur.astro`, `syarat-biaya.astro`, `jadwal.astro`, `daftar.astro` (Form wizard 4 tahap), `faq.astro`
- `admin/`:
  - `login.astro`, `index.astro`, `pengaturan.astro`, `beranda.astro`, `profil.astro`, `akademik.astro`, `kesiswaan.astro`, `informasi.astro`, `ppdb.astro`, `kontak.astro`

### E. `src/lib/backend/` (Arsitektur Adapter Backend)
Modul untuk menghubungkan formulir pendaftaran PPDB dan pesan kontak ke backend pilihan:
- `types.ts`: Interface TypeScript (`RegistrationPayload`, `ContactMessagePayload`, `BackendResult`, `BackendProvider`).
- `index.ts`: Factory function `getBackendProvider()` yang memilih provider berdasarkan `PUBLIC_BACKEND_PROVIDER`.
- `providers/none.ts`: Provider default (simpan ke browser `localStorage` + direct WA).
- `providers/webhook.ts`: Kirim POST JSON ke Google Sheets / Make / n8n / Zapier.
- `providers/supabase.ts`: Kirim ke PostgreSQL Supabase via REST API publik (RLS).
- `providers/mysql.ts`: Teruskan ke API endpoint MySQL sekolah.

### F. `src/styles/` (Sistem Styling)
- `tokens.css`: Variabel desain CSS terpusat (palet warna, jarak/spacing, bayangan/shadow, radius sudut, tipografi).
- `global.css`: Reset CSS dasar, utilitas tata letak kontainer responsif, styling tombol, badge, dan kartu.

---

## 4. Panduan Developer: "Saya Ingin Mengubah..."

| Keperluan Anda | Berkas yang Perlu Diedit |
|---|---|
| **Mengubah Nama Sekolah, Alamat, No WA** | Cukup edit [`src/data/site.json`](../src/data/site.json) |
| **Mengganti Warna Tema Utama** | Edit bagian `"theme"` di [`src/data/site.json`](../src/data/site.json) dan variabel warna di [`src/styles/tokens.css`](../src/styles/tokens.css) |
| **Menambah / Mengubah Menu Navigasi** | Edit array menu di [`src/components/Header.astro`](../src/components/Header.astro) |
| **Menambah Isian Input Baru pada Form PPDB** | Edit formulir HTML dan skrip validasi di [`src/pages/ppdb/daftar.astro`](../src/pages/ppdb/daftar.astro), lalu tambahkan field di [`src/lib/backend/types.ts`](../src/lib/backend/types.ts) |
| **Menambah Halaman Publik Baru** | Buat file `.astro` baru di `src/pages/` (misal: `src/pages/prestasi/beasiswa.astro`) |
| **Menghubungkan ke Backend Baru (cth: Firebase)** | Tambahkan provider baru di `src/lib/backend/providers/firebase.ts`, daftarkan di `src/lib/backend/index.ts`, dan dokumentasikan di `.env.example` |

---

## 5. Prosedur Uji Coba Build Sebelum Rilis

Setiap kali Anda selesai memodifikasi kode, selalu jalankan pengujian build lokal:

```bash
# 1. Pastikan tidak ada kesalahan kompilasi statis (harus 45 halaman sukses)
npm run build

# 2. Uji pratinjau hasil build statis dist/
npm run preview
```
Jika kedua perintah di atas berjalan mulus tanpa error, kode Anda aman untuk di-commit dan di-push ke server produksi!
