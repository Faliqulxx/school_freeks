# PRD — Website Resmi MTs Islamiyah

> Di bawah naungan Yayasan Taman Pendidikan Islamiyah (YPI) Ujungpangkah, Gresik
> Fokus dokumen: **UI/UX front-end yang responsif**. Backend/CMS dibahas singkat di Bagian 15.

| Item | Isi |
|---|---|
| Versi dokumen | 1.0 |
| Status | Draft untuk dikerjakan |
| Pemilik produk | Pihak madrasah/yayasan `[ISI nama PIC]` |
| Target rilis | `[ISI tanggal]` |

**Aturan penulisan dokumen ini:** teks berformat `[ISI ...]` menandai data asli sekolah yang belum dimiliki. **Untuk tahap pengembangan, semua data tersebut diganti data dummy yang tercantum di Lampiran A.** Data dummy bersifat fiktif, diberi tanda jelas di lingkungan staging, dan **wajib diganti sebelum rilis produksi** (aturan di Bagian 14).

---

## 1. Latar belakang dan tujuan

### 1.1 Masalah
- Calon wali murid mencari info sekolah lewat HP, biasanya Google atau WhatsApp. Info yang tersebar membuat mereka bertanya berulang ke panitia.
- Sekolah belum punya satu tempat resmi untuk profil, berita, prestasi, dan PPDB.
- Kredibilitas sekolah perlu terlihat lewat foto, data, dan tampilan yang rapi.

### 1.2 Tujuan produk
1. Calon wali murid bisa menemukan **syarat, jadwal, biaya, dan cara daftar PPDB dalam maksimal 3 ketukan** dari beranda.
2. Sekolah tampil kredibel dan identitasnya konsisten dengan logo yayasan.
3. Admin sekolah (non-teknis) bisa menambah berita, pengumuman, dan galeri sendiri.
4. Website nyaman dipakai di HP kelas menengah dengan koneksi 4G yang tidak stabil.

### 1.3 Metrik keberhasilan
| Metrik | Target (3 bulan setelah rilis) |
|---|---|
| Lighthouse Mobile: Performance / Accessibility / SEO / Best Practices | ≥ 85 / ≥ 95 / ≥ 95 / ≥ 95 |
| LCP di 4G (Moto G Power, throttled) | ≤ 2,5 detik |
| CLS | ≤ 0,1 |
| Klik tombol "Daftar PPDB" / "Tanya via WhatsApp" pada periode PPDB | dilacak, target dibahas dengan sekolah `[ISI]` |
| Bounce rate halaman PPDB | di bawah 55% |
| Pengunjung dari HP | tampilan HP lulus uji di semua perangkat Bagian 11 |

---

## 2. Pengguna dan skenario utama

| Persona | Perangkat | Kebutuhan utama |
|---|---|---|
| **Wali murid calon siswa** (30–50 th) | HP Android 80%, sebagian iPhone | Biaya, syarat, jadwal, lokasi, keamanan dan kualitas sekolah |
| **Calon siswa** (12–13 th) | HP orang tua | Lihat kegiatan, ekstrakurikuler, suasana sekolah |
| **Wali murid aktif** | HP | Pengumuman, kalender, unduhan formulir |
| **Alumni / masyarakat** | HP/laptop | Berita, sejarah, prestasi |
| **Admin sekolah** | Laptop | Mengisi konten tanpa coding |

### Skenario kunci (acceptance utama)
1. *Ibu Rina membuka link dari grup WhatsApp di HP.* Dalam ≤ 3 ketukan ia sampai di rincian biaya PPDB, lalu menekan tombol WhatsApp panitia.
2. *Bapak Ahmad mencari lokasi sekolah.* Dari beranda ia menggulir ke peta atau membuka Kontak, lalu menekan "Petunjuk Arah" yang membuka Google Maps.
3. *Siswa membuka galeri.* Foto muncul cepat, bisa digeser (swipe), dan dibuka layar penuh.
4. *Admin memposting pengumuman* dan muncul di beranda tanpa menyentuh kode.

---

## 3. Ruang lingkup

### 3.1 Masuk (v1.0)
Beranda, Profil (6 halaman), Akademik (5), Kesiswaan (4), Informasi (berita, pengumuman, galeri, unduhan), PPDB (5), Kontak, halaman 404, halaman pencarian sederhana.

### 3.2 Tidak masuk (v1.0)
Portal nilai/rapor siswa, pembayaran SPP online, e-learning/LMS, login wali murid, chat bot. Boleh dibuka di versi berikutnya.

---

## 4. Prinsip desain dan aturan anti "AI slop"

Tampilan harus terasa **dibuat untuk madrasah ini**, bukan template generik. Aturan berikut **wajib** dan dicek saat review.

### 4.1 Prinsip
1. **Foto asli sekolah adalah bintangnya.** Desain hanya membingkai dan merapikan.
2. **Hangat, rapi, dewasa.** Bukan permainan warna, bukan startup SaaS.
3. **Hierarki jelas.** Satu halaman, satu tujuan utama, satu tombol utama.
4. **Mobile dulu.** Semua layout dirancang di 360 px lebih dulu, baru dilebarkan.
5. **Konten membentuk layout**, bukan sebaliknya. Dilarang mengisi kotak dengan teks pengisi.

### 4.2 Daftar larangan (checklist reviewer)
| # | Dilarang | Gantinya |
|---|---|---|
| 1 | Gradien ungu/biru/neon, glassmorphism berlebihan, blob warna acak | Palet Bagian 5. Gradien hanya hijau tua → hijau sangat tua, subtil, atau tidak sama sekali |
| 2 | Teks *lorem ipsum* atau kalimat motivasi generik ("Mencetak generasi gemilang menuju masa depan cerah") | Teks dummy yang **spesifik dan realistis** seperti di Lampiran A (nama program, tanggal, angka, kegiatan), bukan kalimat pengisi |
| 3 | Emoji sebagai ikon (🎓📚✨) | Set ikon garis tunggal (Lucide, stroke 1.75 px), ukuran seragam |
| 4 | Foto stok orang bule di meja kantor | Foto asli sekolah. Jika belum ada, kotak abu dengan label "Foto: [deskripsi]" |
| 5 | Semua kartu identik dalam grid 3 kolom tanpa variasi ritme | Variasikan: satu kartu besar + kartu kecil, daftar vertikal, timeline, dll. |
| 6 | Semua heading berada di tengah | Rata kiri sebagai default. Tengah hanya untuk hero singkat dan CTA |
| 7 | Bayangan tebal, sudut sangat bulat (≥ 24 px) di semua elemen | Radius dan bayangan sesuai token Bagian 5.5 |
| 8 | Animasi muncul/geser pada setiap elemen, parallax | Gerak hanya untuk umpan balik (hover, buka menu) dan satu animasi hero |
| 9 | Statistik palsu ("1000+ siswa") tanpa sumber di produksi | Di staging boleh data dummy Lampiran A (diberi penanda). Di produksi hanya data asli; kalau belum ada, sembunyikan blok statistik |
| 10 | Testimoni karangan di produksi | Di staging boleh dummy Lampiran A. Di produksi hanya testimoni nyata dengan izin; kalau belum ada, sembunyikan seksi |
| 11 | Ornamen Islami besar yang mengganggu teks | Pola geometris maks. opasitas 6–8%, hanya di latar seksi tertentu |
| 12 | Tombol yang semuanya berwarna kuning | Hanya **satu** CTA kuning per layar (Daftar PPDB). Sisanya hijau/outline |
| 13 | Teks kuning di atas putih | Kuning hanya sebagai latar dengan teks hijau tua, atau teks kuning di atas hijau tua |
| 14 | Hero dengan 3 tombol dan 2 paragraf | Hero: 1 judul, 1 kalimat pendukung, 2 tombol (utama + sekunder) |
| 15 | Ikon dekoratif tanpa makna di tiap judul | Ikon hanya bila membantu memindai (kontak, jadwal, unduhan) |

---

## 5. Design system (tokens)

Semua nilai dibuat sebagai **CSS custom properties** di `:root`. Dilarang menulis nilai warna/ukuran langsung di komponen.

### 5.1 Warna

Diambil dari logo YPI (hijau kelopak, kuning cincin, hijau muda globe).

| Token | Hex | Kegunaan | Kontras (perkiraan) |
|---|---|---|---|
| `--green-900` | `#0B3B16` | Teks judul gelap, footer | ≈ 12 : 1 di atas putih |
| `--green-800` | `#0F4D1C` | Hover tombol, latar bagian gelap | ≈ 10 : 1 di atas putih |
| `--green-700` | `#1B7A2F` | **Primer**: navbar, tombol, tautan | ≈ 5,4 : 1 di atas putih (lulus AA) |
| `--green-500` | `#3DA352` | Ikon, garis aksen (bukan teks kecil) | — |
| `--green-200` | `#CDE8B5` | Latar kartu/seksi selang-seling | — |
| `--green-50` | `#F1F8EA` | Latar seksi lembut | — |
| `--yellow-500` | `#F5D90A` | **Aksen**: CTA PPDB, penanda aktif, garis | teks `--green-900` di atasnya ≈ 9 : 1 |
| `--yellow-600` | `#D9BE00` | Hover CTA | — |
| `--ink-900` | `#1F2933` | Teks isi | ≈ 14 : 1 |
| `--ink-600` | `#52606D` | Teks sekunder, caption | ≈ 6,3 : 1 |
| `--ink-300` | `#CBD2D9` | Garis, border | — |
| `--bg` | `#FFFFFF` | Latar utama | — |
| `--bg-soft` | `#FAFBF5` | Latar krem bergantian | — |
| `--danger` | `#B42318` | Error form | ≈ 6 : 1 |
| `--success` | `#15803D` | Sukses form | ≈ 5 : 1 |
| `--focus` | `#1D4ED8` | Cincin fokus keyboard | tampil jelas di latar putih dan hijau |

Komposisi: ± 60% putih/krem, 30% hijau, 10% kuning. Verifikasi seluruh pasangan warna dengan alat kontras sebelum rilis, target WCAG 2.2 AA (teks normal ≥ 4,5 : 1, teks besar dan ikon ≥ 3 : 1).

### 5.2 Tipografi

| Peran | Font | Fallback | Catatan |
|---|---|---|---|
| Judul | **Plus Jakarta Sans** 700/800 | `system-ui, sans-serif` | Tegas, ramah |
| Isi | **Inter** 400/500/600 | `system-ui, sans-serif` | Sangat terbaca di layar kecil |
| Arab (ayat/doa) | **Amiri** 400/700 | `"Traditional Arabic", serif` | Selalu `dir="rtl"` dan `lang="ar"` |

- Self-host file `woff2`, subset Latin, `font-display: swap`, preload hanya 2 file (judul 700 dan isi 400).
- Maksimum 4 bobot font dimuat.

Skala ukuran (fluid dengan `clamp()`; nilai = min, ideal, maks):

| Token | Ukuran | Line-height | Pemakaian |
|---|---|---|---|
| `--text-xs` | 0.8125rem (13 px) | 1.5 | caption, label |
| `--text-sm` | 0.9375rem (15 px) | 1.55 | meta, teks kartu |
| `--text-base` | 1rem → 1.0625rem | 1.65 | isi (minimal 16 px di HP, jangan lebih kecil) |
| `--text-lg` | 1.125rem → 1.25rem | 1.55 | lead paragraph |
| `--h4` | 1.125rem → 1.25rem | 1.35 | judul kartu |
| `--h3` | 1.25rem → 1.5rem | 1.3 | sub-judul |
| `--h2` | `clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem)` | 1.2 | judul seksi |
| `--h1` | `clamp(1.875rem, 1.2rem + 3.2vw, 3.25rem)` | 1.1 | judul hero/halaman |

Aturan teks: lebar baris isi maks **68 karakter** (`max-width: 68ch`). Rata kiri. Tidak ada teks justify. Judul tidak boleh yatim (gunakan `text-wrap: balance`, paragraf `text-wrap: pretty`).

### 5.3 Spasi
Skala 4 px: `--s-1: 4px, --s-2: 8, --s-3: 12, --s-4: 16, --s-5: 24, --s-6: 32, --s-7: 48, --s-8: 64, --s-9: 96`.
- Jarak vertikal antar seksi: **48 px (HP)**, **72 px (tablet)**, **96 px (desktop)**.
- Padding horizontal kontainer: **16 px (HP)**, **24 px (tablet)**, **32 px (desktop)**.

### 5.4 Layout grid dan breakpoint

| Nama | Lebar viewport | Kolom | Gutter | Lebar maks konten |
|---|---|---|---|---|
| `xs` | 320–479 | 4 | 16 | fluid |
| `sm` | 480–767 | 4 | 16 | fluid |
| `md` | 768–1023 | 8 | 24 | fluid |
| `lg` | 1024–1279 | 12 | 24 | 1024 |
| `xl` | 1280–1535 | 12 | 32 | 1200 |
| `2xl` | ≥ 1536 | 12 | 32 | **1280 (dikunci, konten tidak melebar lagi)** |

- Pakai **CSS Grid + Flexbox**, `min-width` media query, urutan mobile-first.
- Gunakan **container queries** untuk kartu yang dipakai di banyak lebar.
- Dilarang overflow horizontal di lebar apa pun mulai **320 px**.
- Dukungan orientasi landscape HP (tinggi hanya ± 360 px): hero tidak boleh memaksa `100vh`; pakai `min-height: min(88svh, 720px)`.

### 5.5 Bentuk, bayangan, gerak

| Token | Nilai |
|---|---|
| `--radius-sm` | 6 px (input, chip) |
| `--radius-md` | 12 px (kartu, tombol) |
| `--radius-lg` | 20 px (hanya hero image dan modal) |
| `--shadow-1` | `0 1px 2px rgb(15 77 28 / .08)` |
| `--shadow-2` | `0 6px 20px rgb(15 77 28 / .10)` |
| `--border` | `1px solid var(--ink-300)` |
| `--ease` | `cubic-bezier(.2,.7,.2,1)` |
| `--dur-fast / --dur` | 120 ms / 220 ms |

Semua animasi menghormati `prefers-reduced-motion: reduce` (matikan transisi non-esensial dan putaran 3D otomatis).

### 5.6 Ikon dan ornamen
- Ikon: **Lucide**, SVG inline/sprite, stroke 1.75, ukuran 20 px (inline) dan 24 px (fitur).
- Ornamen khas: (1) **bentuk kelopak** dari tepi logo sebagai bingkai foto hero (`clip-path` atau SVG mask), (2) **pola geometris Islami** satu ubin SVG, opasitas ≤ 8%, hanya di latar footer dan hero. Selain itu tidak ada ornamen.
- Garis pemisah seksi: garis tipis 1 px `--ink-300`, dengan segmen pendek kuning 48 × 3 px di bawah judul seksi (penanda khas, dipakai konsisten).

---

## 6. Arsitektur informasi dan navigasi

### 6.1 Peta situs

```
Beranda
Profil
  ├─ Sejarah
  ├─ Visi, Misi, dan Tujuan
  ├─ Sambutan Kepala Madrasah
  ├─ Struktur Organisasi
  ├─ Profil Yayasan (YPI Ujungpangkah)
  └─ Fasilitas
Akademik
  ├─ Kurikulum
  ├─ Program Unggulan
  ├─ Guru dan Tenaga Kependidikan
  ├─ Kalender Akademik
  └─ Prestasi
Kesiswaan
  ├─ Ekstrakurikuler
  ├─ OSIS
  ├─ Tata Tertib
  └─ Alumni
Informasi
  ├─ Berita (daftar + detail)
  ├─ Pengumuman
  ├─ Galeri (Foto, Video)
  └─ Unduhan
PPDB
  ├─ Alur Pendaftaran
  ├─ Syarat dan Biaya
  ├─ Jadwal
  ├─ Daftar Online
  └─ FAQ
Kontak
  ├─ Alamat dan Peta
  └─ Form Pesan
```

### 6.2 URL
Huruf kecil, kata dipisah tanda hubung, tanpa ekstensi. Contoh: `/profil/visi-misi`, `/ppdb/syarat-biaya`, `/informasi/berita/{slug}`.

---

## 7. Komponen global (spesifikasi)

### 7.1 Top bar (hanya ≥ `lg`)
Tinggi 36 px, latar `--green-900`, teks putih 13 px. Isi: telepon, email, jam layanan, tautan sosial (ikon). Disembunyikan di bawah `lg` (info dipindah ke footer dan halaman Kontak).

### 7.2 Header / navbar

**Struktur:** logo (MTs + nama), menu utama, tombol CTA. Latar putih, border bawah 1 px, **sticky**. Saat digulir ke bawah lebih dari 80 px: tinggi mengecil dari 80 → 64 px dan muncul `--shadow-1`. Saat digulir ke atas di HP, header muncul kembali; saat digulir ke bawah, header boleh disembunyikan (`transform`, bukan `display`).

| Breakpoint | Perilaku |
|---|---|
| ≥ `xl` | Logo + nama sekolah dua baris (nama madrasah, nama yayasan lebih kecil). 7 menu terlihat. Dropdown terbuka saat **hover dan fokus**, ditutup `Esc`. CTA kuning di kanan. |
| `lg` | Nama sekolah satu baris, menu dengan jarak rapat. Dropdown dibuka dengan **klik**. |
| < `lg` | Logo + nama singkat di kiri; tombol **menu (hamburger)** 44 × 44 px di kanan. CTA "Daftar PPDB" ditaruh di dalam drawer dan juga sebagai **bar tetap bawah** saat periode PPDB aktif (lihat 7.9). |

**Dropdown (desktop):** panel putih, radius 12, `--shadow-2`, lebar maks 320 px, daftar tautan vertikal. Untuk **Profil** dan **Akademik** (≥ 5 anak) pakai panel dua kolom dengan satu kalimat deskripsi di tiap tautan. Item aktif: teks `--green-700` + garis kiri kuning 3 px. Tidak ada panel yang menyembunyikan menu lain dari urutan fokus keyboard.

**Drawer (mobile):**
- Muncul dari kanan, lebar `min(88vw, 360px)`, latar putih, overlay gelap 50%.
- Menu bertingkat berupa **akordeon**: ketukan pada "Profil" membuka subtautan di tempat (bukan pindah halaman). Hanya satu grup terbuka dalam satu waktu.
- Kunci scroll body saat terbuka; fokus terjebak (focus trap) di drawer; `Esc` atau ketuk overlay menutup; fokus kembali ke tombol hamburger.
- Target sentuh tiap baris ≥ 48 px tinggi.
- Bagian bawah drawer: tombol WhatsApp panitia, telepon, ikon sosial.

**Aksesibilitas navbar:** `<nav aria-label="Utama">`, tombol akordeon memakai `aria-expanded` dan `aria-controls`, tautan halaman aktif memakai `aria-current="page"`, ada tautan **"Lewati ke konten utama"** sebagai elemen fokus pertama.

### 7.3 Tombol

| Varian | Tampilan | Pemakaian |
|---|---|---|
| Primer | latar `--green-700`, teks putih, hover `--green-800` | aksi utama |
| CTA | latar `--yellow-500`, teks `--green-900` (bold), hover `--yellow-600` | **hanya "Daftar PPDB"** |
| Sekunder | border 1.5 px `--green-700`, teks `--green-700`, latar transparan | aksi kedua |
| Tautan | teks `--green-700`, garis bawah, ikon panah | "Baca selengkapnya" |

Ukuran: tinggi 48 px (default), 40 px (kecil, hanya di tabel/kartu padat), 56 px (hero, ≥ `md`). Radius 12. Padding horizontal 20–24 px. Status: default, hover, `:focus-visible` (outline 3 px `--focus`, offset 2 px), active (turun 1 px), disabled (opasitas 0,5, kursor not-allowed), loading (spinner, lebar tetap). Di `xs` tombol dalam grup menjadi **penuh lebar dan bertumpuk**.

### 7.4 Kartu
- **Kartu berita:** gambar rasio 16:10, kategori (chip), judul maks 2 baris (`line-clamp`), tanggal, ringkasan maks 2 baris. Seluruh kartu bisa diklik (satu tautan sebagai `::after` yang menutupi kartu).
- **Kartu program/fasilitas:** gambar, judul, 1–2 kalimat.
- **Kartu guru:** foto rasio 4:5, nama, mapel/jabatan. Tanpa kutipan hiasan.
- **Kartu pengumuman:** tanpa gambar; tanggal besar di kiri (hari + bulan), judul, tautan.
- Hover desktop: border berubah `--green-500` dan naik 2 px. Di perangkat sentuh tidak ada efek hover yang dipertahankan (`@media (hover: hover)`).

### 7.5 Form
- Label selalu terlihat di atas input (bukan hanya placeholder).
- Input tinggi 48 px, font 16 px (**mencegah zoom otomatis di iOS**), border `--ink-300`, fokus border `--green-700` + cincin.
- `inputmode`, `autocomplete`, dan `type` yang benar: `tel`, `email`, `numeric` (NISN).
- Validasi: pesan error di bawah field dengan ikon + teks (jangan hanya warna), `aria-describedby`, ringkasan error di atas form saat gagal kirim.
- Satu kolom di < `md`; dua kolom di ≥ `md` hanya untuk pasangan pendek (mis. Tempat–Tanggal lahir).
- Perlindungan spam: honeypot + token. Hindari CAPTCHA gambar yang menyulitkan.

### 7.6 Peta
Embed Google Maps dimuat **setelah interaksi** ("Tampilkan peta") atau `loading="lazy"` agar tidak membebani. Di HP tinggi 280 px; di ≥ `md` 400 px. Selalu ada tombol **"Petunjuk Arah"** (buka aplikasi Maps) dan alamat teks yang bisa disalin.

### 7.7 Galeri dan lightbox
- Grid masonry sederhana: 2 kolom (`xs`–`sm`), 3 (`md`), 4 (`lg`+). Gambar `loading="lazy"` dengan rasio tetap dari atribut `width/height` (cegah CLS).
- Lightbox layar penuh: geser kiri-kanan (touch), panah keyboard, `Esc` menutup, caption, penghitung "3 / 24", fokus terjebak, `aria-modal`.
- Video: tampilkan poster + tombol putar; YouTube dimuat dengan *facade* (iframe baru dimuat saat diketuk).

### 7.8 Footer
Latar `--green-900`, teks putih/`--green-200`. Empat blok di ≥ `lg` (Identitas + logo MTs dan YPI; Tautan cepat; Informasi/PPDB; Kontak + sosial). Di `md`: 2 × 2. Di < `md`: bertumpuk, blok tautan memakai akordeon agar tidak panjang. Baris paling bawah: hak cipta, kebijakan privasi, tahun. Pola geometris 6% di latar.

### 7.9 Elemen melayang
- **Tombol WhatsApp**: bulat 56 px (48 px di `xs`), pojok kanan bawah, offset aman `env(safe-area-inset-bottom)`. Menuju `https://wa.me/[ISI nomor]?text=...` dengan teks awal terisi.
- **Bar CTA PPDB mobile** (hanya < `md`, hanya saat PPDB dibuka): lebar penuh di bawah, tinggi 64 px, tombol kuning "Daftar PPDB" + tautan "Syarat". Bila bar aktif, tombol WhatsApp naik di atasnya. Tidak boleh menutupi form atau konten utama (beri `padding-bottom` pada `body`).
- **Kembali ke atas**: muncul setelah gulir > 1,5 layar.

### 7.10 Breadcrumb
Tampil di semua halaman dalam (bukan Beranda). Di HP dipotong: hanya "← Induk" (satu tingkat ke atas). Struktur data `BreadcrumbList` untuk SEO.

### 7.11 Status khusus
Loading (skeleton, bukan spinner penuh halaman), kosong ("Belum ada pengumuman"), error jaringan (pesan + tombol coba lagi), 404 (lihat 8.14).

---

## 8. Spesifikasi halaman

Setiap halaman: **tujuan → seksi (urut) → perilaku responsif**. Heading hierarki: satu `h1` per halaman.

### 8.1 Beranda `/`

**Tujuan:** menjawab "Sekolah apa ini, apakah layak, bagaimana mendaftar?" dalam satu gulir.

| # | Seksi | Isi | Desktop (≥ `lg`) | Tablet (`md`) | HP (< `md`) |
|---|---|---|---|---|---|
| 1 | **Hero** | `h1` jelas (nama + lokasi + jenjang), 1 kalimat pendukung `[ISI]`, tombol "Daftar PPDB" (CTA) + "Kenali Madrasah" (sekunder). Foto sekolah dalam bingkai kelopak. | 2 kolom 6/6: teks kiri, foto kanan | 2 kolom 5/3, foto lebih kecil | 1 kolom: foto dulu (rasio 4:3), teks di bawah, tombol penuh lebar |
| 2 | **Logo 3D** (opsional, lihat Bagian 9) | Logo YPI berputar pelan di samping blok identitas yayasan | di dalam hero atau seksi sendiri, 360 px | 280 px | disembunyikan di hero; tampil di seksi "Tentang" sebagai elemen kecil 220 px, putar manual |
| 3 | **Info cepat PPDB** | Strip 3–4 item: gelombang pendaftaran, batas waktu, kuota, tautan "Lihat syarat" `[ISI]` | strip horizontal 4 kolom | 2 × 2 | 1 kolom, kartu horizontal rapat |
| 4 | **Sambutan kepala madrasah** | Foto, kutipan 3–4 kalimat asli, nama dan jabatan, tautan "Baca sambutan" | 5/7 foto-teks | 4/4 | foto bulat 96 px di atas, teks di bawah |
| 5 | **Program unggulan** | 3–5 program nyata `[ISI]` | satu kartu besar (2 kolom tinggi) + kartu kecil di sampingnya (bukan grid seragam) | 2 kolom | daftar vertikal; kartu pertama besar |
| 6 | **Angka sekolah** | Hanya data asli yang diverifikasi: tahun berdiri, jumlah siswa, guru, kelas, prestasi | 4 kolom | 2 × 2 | 2 × 2 |
| 7 | **Berita terbaru** | 3 berita + tautan "Semua berita" | 1 besar + 2 kecil | 2 kolom | **carousel horizontal geser** (scroll-snap) dengan sebagian kartu berikutnya terlihat |
| 8 | **Pengumuman** | 4 pengumuman terakhir (daftar) | 7/5 bersama kalender | tumpuk | tumpuk |
| 9 | **Galeri** | 6–8 foto pilihan | mosaik 4 kolom | 3 | 2 |
| 10 | **Testimoni** (kondisional) | Hanya jika ada izin dan data nyata | 3 kolom | 2 | carousel |
| 11 | **Banner PPDB** | Latar `--green-800`, teks putih, CTA kuning | satu baris | satu baris | bertumpuk |
| 12 | **Lokasi dan kontak** | Peta + alamat + jam layanan + tombol WA | 7/5 | tumpuk | tumpuk, peta setelah alamat |

Seksi 6 dan 10 **disembunyikan otomatis** bila data belum ada.

### 8.2 Profil

Template halaman konten (dipakai semua sub-halaman Profil): header halaman (`h1`, breadcrumb, deskripsi satu kalimat) → area konten 8 kolom + **sidebar sub-menu 4 kolom** di ≥ `lg` (sticky, menampilkan halaman Profil lain). Di < `lg` sidebar menjadi **pil horizontal yang bisa digeser** di atas konten.

| Halaman | Isi spesifik |
|---|---|
| **Sejarah** | Timeline vertikal (tahun → peristiwa) `[ISI]`; foto arsip bila ada. Di HP timeline satu kolom dengan garis kiri. |
| **Visi, Misi, Tujuan** | Visi sebagai blok kutipan besar; misi daftar bernomor; tujuan daftar. Tidak dibuat kartu bergambar. |
| **Sambutan Kepala Madrasah** | Foto, teks panjang dengan lebar baris 68ch, tanda tangan/nama. |
| **Struktur Organisasi** | Bagan. Desktop: diagram SVG. HP: diubah menjadi **daftar bertingkat (indented)**, bukan gambar yang diperkecil. Sediakan juga tombol unduh PDF. |
| **Profil Yayasan** | Info YPI Ujungpangkah, logo yayasan, penjelasan makna logo (bintang, buku, obor, globe) `[ISI makna resmi]`, unit pendidikan di bawah yayasan. |
| **Fasilitas** | Daftar fasilitas nyata (ruang kelas, masjid/musala, perpustakaan, lab, lapangan, dsb.) `[ISI]` dengan foto. Grid 2 kolom di HP, 3 di desktop; klik membuka lightbox. |

### 8.3 Akademik

| Halaman | Isi spesifik |
|---|---|
| **Kurikulum** | Penjelasan kurikulum yang dipakai `[ISI]`, daftar mata pelajaran (tabel). Tabel di HP menjadi **kartu bertumpuk** (label–nilai), bukan tabel yang dipaksa menggulir. |
| **Program Unggulan** | Satu bagian per program: nama, tujuan, jadwal, pembina, foto. Navigasi anchor di atas. |
| **Guru dan Tenaga Kependidikan** | Grid kartu guru, filter berdasarkan mata pelajaran/jabatan, pencarian nama. Desktop 4 kolom, tablet 3, HP 2. |
| **Kalender Akademik** | Tampilan daftar per bulan (default di HP) dan tampilan kalender grid (≥ `md`). Tombol "Unduh PDF" dan "Tambah ke Google Calendar". Kategori diberi warna **dan** label teks. |
| **Prestasi** | Daftar kronologis dengan filter (tahun, tingkat: kecamatan/kabupaten/provinsi/nasional). Tiap item: nama lomba, juara, nama siswa, tahun, foto bila ada. |

### 8.4 Kesiswaan
- **Ekstrakurikuler:** kartu per ekskul (nama, hari-jam, pembina, foto). Filter kategori (keagamaan, olahraga, seni, sains).
- **OSIS:** struktur pengurus, program kerja, kegiatan.
- **Tata Tertib:** dokumen bisa dibaca di halaman (aturan bernomor, bisa dicari dengan `Ctrl+F`) **dan** bisa diunduh PDF. Jangan hanya PDF.
- **Alumni:** daftar cerita alumni dan formulir pendataan alumni.

### 8.5 Informasi

**Berita (daftar)** `/informasi/berita`
- Header + pencarian + filter kategori (chip yang bisa digeser di HP).
- Hasil: grid kartu (3 / 2 / 1 kolom). Berita pertama berformat besar (hanya di halaman 1).
- Pagination bernomor di desktop; tombol "Muat lebih banyak" di HP. URL halaman tetap bisa dibagikan (`?hal=2`).

**Berita (detail)** `/informasi/berita/{slug}`
- Judul, tanggal, penulis, kategori, gambar utama (rasio 16:9), isi dengan lebar 68ch, tombol bagikan (WhatsApp, salin tautan, Facebook), berita terkait (3).
- Daftar isi otomatis hanya untuk artikel > 1.500 kata.
- Gambar dalam isi dapat dibuka di lightbox. Tabel dalam artikel bisa digeser horizontal di dalam wadahnya sendiri (halaman tidak ikut bergeser).

**Pengumuman:** daftar kronologis, status "Penting" (chip kuning dengan teks hijau tua), lampiran berkas.

**Galeri:** tab Foto/Video, album per kegiatan (judul, tanggal, jumlah foto), dalam album tampil grid + lightbox.

**Unduhan:** tabel/daftar berkas: nama, kategori, ukuran, format, tanggal; tombol unduh. Di HP menjadi kartu. Tampilkan ukuran berkas sebelum diunduh.

### 8.6 PPDB (halaman paling kritis)

Pesan utama: **jelas, jujur soal biaya, dan mudah dihubungi.**

**Landing PPDB** `/ppdb`
1. Status periode (chip besar: "Dibuka s.d. [ISI tanggal]" / "Segera dibuka" / "Ditutup") dengan hitung mundur bila perlu.
2. Ringkasan 4 langkah (ikon bernomor), tautan ke detail.
3. Tombol "Daftar Online" (CTA) + "Tanya Panitia via WhatsApp".
4. Ringkasan syarat + tautan ke halaman biaya.

**Alur Pendaftaran:** stepper vertikal (di semua ukuran) dengan nomor, judul langkah, penjelasan singkat, dan dokumen yang diperlukan per langkah. Tidak memakai stepper horizontal di HP.

**Syarat dan Biaya:** daftar syarat dengan kotak centang visual. **Tabel rincian biaya** `[ISI]` (komponen, nominal, keterangan); di HP menjadi kartu per komponen dengan total yang jelas. Catatan keringanan/beasiswa bila ada.

**Jadwal:** timeline (gelombang, pendaftaran, seleksi, pengumuman, daftar ulang) dengan tanggal asli `[ISI]`. Tombol "Tambah ke kalender".

**Daftar Online:** formulir bertahap (lihat 8.6.1).

**FAQ:** akordeon (`<details>`/`aria-expanded`), 8–12 pertanyaan nyata hasil pertanyaan yang sering ditanyakan panitia `[ISI]`. Ada pencarian bila > 12 item.

#### 8.6.1 Form pendaftaran
- Dibagi 4 langkah: **Data Calon Siswa → Data Orang Tua/Wali → Asal Sekolah → Unggah Berkas + Tinjau**.
- Indikator langkah di atas ("Langkah 2 dari 4") dan bilah progres. Draft **tersimpan otomatis** di perangkat dan bisa dilanjutkan.
- Tiap langkah validasi saat pindah; bisa kembali tanpa kehilangan data.
- Unggah berkas: ketuk untuk memilih atau ambil foto dari kamera (`accept="image/*,application/pdf"`, `capture` opsional), batas ukuran ditampilkan, pratinjau nama berkas, tombol hapus.
- Halaman tinjau menampilkan seluruh data untuk dicek sebelum kirim.
- Setelah kirim: halaman sukses dengan **nomor pendaftaran**, ringkasan, dan tombol WhatsApp ke panitia. Tersedia unduh bukti pendaftaran (PDF).
- Data pribadi anak: cantumkan kebijakan privasi di dekat tombol kirim dan hanya minta data yang benar-benar dibutuhkan.

### 8.7 Kontak
Alamat lengkap `[ISI]`, jam layanan, telepon, email, WhatsApp, peta (7.6), form pesan (nama, kontak, subjek, pesan; tampilkan estimasi waktu balasan). Di desktop: kontak kiri, form kanan. Di HP: kartu kontak yang bisa diketuk (telepon, WA, email membuka aplikasi langsung), lalu peta, lalu form.

### 8.8 Pencarian
Ikon cari di header membuka panel penuh. Hasil dikelompokkan (Halaman, Berita, Pengumuman, Unduhan). Keadaan kosong menyarankan kata kunci lain dan tautan ke Kontak.

### 8.9 Halaman 404
Pesan jelas dalam bahasa sehari-hari, kolom pencarian, 4 tautan populer (PPDB, Berita, Kontak, Beranda). Tidak memakai ilustrasi generik.

---

## 9. Logo 3D (model-viewer)

Aset: `logo_ypi_ujungpangkah_3d.glb` (± 6 MB, hasil ekstrusi gambar logo).

| Aturan | Spesifikasi |
|---|---|
| Pustaka | `<model-viewer>` (Google), dimuat sebagai ES module **hanya saat elemen mendekati viewport** (IntersectionObserver). Jangan memuatnya di jalur kritis. |
| Optimasi berkas | Sebelum produksi, kompres dengan `gltf-transform` (Draco/meshopt + tekstur WebP/KTX2). Target **≤ 1,5 MB**. |
| Poster | Wajib ada gambar `poster` (WebP ≤ 40 KB) agar ruang tidak kosong dan tidak menyebabkan CLS. Ruang ditetapkan dengan `aspect-ratio`. |
| Interaksi | `camera-controls`, `auto-rotate` kecepatan pelan (`rotation-per-second="20deg"`), `interaction-prompt="none"`. Putar otomatis **mati** bila `prefers-reduced-motion`. |
| Pencahayaan | `environment-image="neutral"`, `shadow-intensity="0.6"`, `exposure="1"`. |
| Gestur di HP | `touch-action: pan-y` supaya menggulir halaman tidak tertahan oleh model. Putar hanya dengan gerakan horizontal pada model. |
| Fallback | Jika WebGL tidak tersedia atau gagal memuat: tampilkan poster statis, tanpa pesan error teknis. |
| Aksesibilitas | `alt="Logo Yayasan Taman Pendidikan Islamiyah Ujungpangkah Gresik, tampilan tiga dimensi"`, bukan satu-satunya sumber informasi (logo 2D tetap ada di header dan footer). |
| Ukuran tampil | Desktop 360 px, tablet 280 px, HP 220 px. Bentuk persegi, tanpa bingkai/kartu tambahan. |
| Pemakaian | **Satu** instans per halaman (Beranda dan Profil Yayasan). Jangan di setiap seksi. |

---

## 10. Responsif: aturan lintas komponen

| Area | Aturan |
|---|---|
| **Target sentuh** | Minimal 44 × 44 px, jarak antar target ≥ 8 px |
| **Gambar** | `<img>` dengan `srcset` + `sizes`, format AVIF/WebP + fallback JPG, `width`/`height` eksplisit, `loading="lazy"` kecuali gambar LCP (`fetchpriority="high"`). Gunakan `object-fit: cover` dengan `object-position` yang disetel untuk wajah di foto. |
| **Rasio gambar** | Hero 4:3 (HP) / 5:4 (desktop); kartu berita 16:10; guru 4:5; galeri bervariasi mengikuti aslinya |
| **Tabel** | Dilarang membiarkan tabel melebarkan halaman. Pilih: ubah jadi kartu (data pendek), atau bungkus dengan `overflow-x: auto` + bayangan tepi sebagai petunjuk (data lebar) |
| **Teks panjang** | `overflow-wrap: anywhere` pada URL dan email; `hyphens: auto` dengan `lang="id"` |
| **Viewport tinggi** | Pakai unit `svh/dvh`, bukan `vh`, supaya bilah alamat browser HP tidak memotong konten |
| **Safe area** | `padding: env(safe-area-inset-*)` untuk bar bawah, drawer, dan tombol melayang (notch iPhone) |
| **Hover** | Gaya hover dibungkus `@media (hover: hover)` |
| **Zoom** | Jangan menonaktifkan zoom (`user-scalable=no` dilarang). Layout harus tetap pakai pada zoom 200% dan teks 200% |
| **Orientasi** | Semua halaman dapat dipakai dalam portrait dan landscape |
| **Mode gelap** | v1.0 tidak termasuk. Setel `color-scheme: light` agar kontrol bawaan browser tidak berubah acak |
| **Cetak** | Stylesheet cetak untuk Syarat/Biaya, Jadwal, Tata Tertib, dan bukti pendaftaran: sembunyikan navbar, footer, dan elemen melayang |
| **Mode hemat data** | Hormati `prefers-reduced-data` bila tersedia: matikan model 3D dan video otomatis |

---

## 11. Matriks perangkat dan browser (uji wajib)

| Kategori | Perangkat / viewport | Browser |
|---|---|---|
| HP kecil | 320 × 568 (iPhone SE 1), 360 × 640 (Android entry) | Chrome Android, Samsung Internet |
| HP umum | 375 × 667 (iPhone 8), 390 × 844 (iPhone 14), 412 × 915 (Pixel/Samsung) | Safari iOS, Chrome Android |
| HP besar | 430 × 932 (Pro Max) | Safari iOS |
| Lipat | 280 × 653 (Galaxy Fold tertutup), 717 × 512 (terbuka) | Chrome Android |
| Tablet | 768 × 1024, 820 × 1180, 1024 × 1366 (portrait dan landscape) | Safari iPadOS, Chrome |
| Laptop | 1280 × 720, 1366 × 768, 1440 × 900 | Chrome, Edge, Firefox, Safari |
| Desktop | 1920 × 1080, 2560 × 1440 | Chrome, Edge, Firefox |
| Zoom/aksesibilitas | Zoom 200%, ukuran font sistem Besar, pembaca layar (TalkBack, VoiceOver) | — |
| Jaringan | 4G lambat (throttled), 3G cepat | — |

Dukungan browser: dua versi mayor terakhir Chrome, Edge, Firefox, Safari, Samsung Internet; Safari iOS ≥ 15. Fitur modern (container queries, `svh`, `:has`) dipakai dengan fallback wajar.

---

## 12. Aksesibilitas (WCAG 2.2 AA)

- Kontras sesuai Bagian 5.1; info tidak hanya disampaikan lewat warna.
- Semua fungsi bisa dipakai dengan keyboard; urutan fokus logis; `:focus-visible` jelas di semua latar.
- Struktur semantik: `header`, `nav`, `main`, `section`, `footer`; satu `h1`; heading tidak melompat tingkat.
- Gambar bermakna punya `alt` deskriptif; gambar hias `alt=""`.
- Form: label terhubung, error teragregasi, tidak ada batas waktu tersembunyi.
- Bahasa: `<html lang="id">`; teks Arab `lang="ar" dir="rtl"`.
- Gerak: hormati `prefers-reduced-motion`; tidak ada konten berkedip.
- Target sentuh sesuai Bagian 10.
- Uji dengan axe DevTools dan uji manual dengan TalkBack/VoiceOver di halaman: Beranda, PPDB, Form Daftar, Kontak.

---

## 13. Performa, SEO, dan teknis

### 13.1 Anggaran performa (per halaman, mobile)
| Sumber daya | Batas |
|---|---|
| HTML + CSS kritis | ≤ 50 KB (gzip) |
| JavaScript total awal | ≤ 150 KB (gzip) |
| Font | ≤ 2 berkas preload, total ≤ 80 KB |
| Gambar LCP | ≤ 120 KB (AVIF/WebP), diprioritaskan |
| Total transfer Beranda (tanpa lazy) | ≤ 1 MB |
| Model 3D | tidak dihitung dalam muat awal (lazy) |

Teknik: CSS kritis inline, JS dipecah per rute, `defer`, `preconnect` hanya ke domain yang benar-benar dipakai, cache panjang untuk aset ber-hash, kompresi Brotli, CDN.

### 13.2 SEO
- `title` dan `meta description` unik per halaman. Contoh Beranda: "MTs Islamiyah Ujungpangkah Gresik – PPDB `[tahun]`, Profil dan Berita".
- Open Graph + Twitter Card (gambar 1200 × 630) supaya pratinjau saat dibagikan ke WhatsApp rapi. Tiap berita punya gambar OG sendiri.
- Data terstruktur: `EducationalOrganization` / `School` (nama, alamat, telepon, logo), `BreadcrumbList`, `NewsArticle`, `Event` (jadwal PPDB), `FAQPage`.
- `sitemap.xml`, `robots.txt`, tautan kanonik, favicon dari logo (SVG + PNG 192/512 + apple-touch-icon), `theme-color` `#1B7A2F`.
- Daftarkan Google Business Profile agar muncul di Maps. Alamat dan nomor telepon konsisten.

### 13.3 Keamanan dan privasi
HTTPS wajib, header keamanan (CSP, HSTS, X-Content-Type-Options), sanitasi input, batas ukuran unggahan, rate limit pada form, kebijakan privasi (data anak di bawah umur), tidak ada pelacak berlebihan. Analitik ringan (mis. Plausible/Umami atau GA4 dengan persetujuan).

### 13.4 Tren yang perlu diatasi sejak awal
Gambar tanpa dimensi (penyebab CLS), font yang memblokir render, carousel yang memuat semua gambar, iframe peta/YouTube di jalur kritis, dan unggahan foto 5 MB dari admin tanpa kompresi otomatis.

---

## 14. Konten dan penanganan data yang belum ada

| Data yang diperlukan dari sekolah | Dipakai di |
|---|---|
| Nama kepala madrasah, foto, teks sambutan | Beranda, Profil |
| Tahun berdiri, sejarah, visi-misi resmi | Profil |
| Makna logo YPI | Profil Yayasan |
| Daftar guru: nama, jabatan, mapel, foto | Akademik |
| Program unggulan, ekstrakurikuler (nama, jadwal, pembina) | Akademik, Kesiswaan |
| Foto asli: gedung, kelas, kegiatan, siswa, guru (resolusi ≥ 1600 px sisi panjang) | Seluruh situs |
| Alamat lengkap, koordinat peta, telepon, email, WhatsApp, jam layanan | Kontak, footer |
| Detail PPDB: kuota, syarat, biaya, jadwal, dokumen | PPDB |
| Prestasi (tahun, tingkat, nama) | Akademik |
| Akun sosial (Instagram/YouTube/Facebook) | Footer, Kontak |
| Izin publikasi foto siswa dan testimoni | Semua |

**Aturan data dummy (tahap pengembangan):**
1. Semua konten awal diambil dari **Lampiran A**. Dummy dipakai agar layout bisa dinilai dengan panjang teks, jumlah item, dan tanggal yang realistis.
2. Dummy harus **spesifik dan wajar** (nama kegiatan, tanggal, angka masuk akal), bukan *lorem ipsum*. Panjang judul dan teks sengaja bervariasi, termasuk satu kasus judul panjang dan satu kasus data kosong, untuk menguji layout.
3. Di staging, setiap blok dummy diberi penanda kecil "DUMMY" (chip abu di pojok blok) dan banner tipis di atas situs: "Versi pengembangan. Data contoh, bukan data resmi."
4. Data disimpan di berkas terpisah (`/content/*.json` atau data CMS) dengan field `"dummy": true`. Komponen **tidak boleh** menulis teks isi langsung di kode.
5. Foto dummy memakai gambar penampung (kotak abu `#E4E7EB` dengan label deskripsi dan rasio yang benar, mis. "Foto: kegiatan upacara 16:10"), dinamai `/assets/dummy/*`. Dilarang memakai foto orang nyata dari internet.
6. Nama orang, nomor telepon, email, dan alamat dummy bersifat fiktif. Nomor telepon memakai pola jelas palsu (`0000`).
7. **Gerbang rilis:** build produksi gagal (atau menampilkan peringatan keras) bila masih ada konten ber-`dummy: true`. Sebelum rilis, semua data dummy diganti data asli sekolah sesuai tabel di atas.
8. Seksi yang tidak punya data asli saat rilis (mis. testimoni, angka sekolah) **disembunyikan**, bukan diisi dummy.

**Gaya bahasa:** Bahasa Indonesia baku yang ramah, kalimat pendek, tanpa jargon pemasaran. Sapaan konsisten ("Anda" untuk wali murid). Angka dan tanggal ditulis format Indonesia (27 Oktober 2026; Rp1.500.000).

---

## 15. Rekomendasi teknis (ringkas)

Dua opsi, pilih sesuai tim:

| | A. WordPress | B. Kode kustom |
|---|---|---|
| Cocok bila | Admin non-teknis, anggaran terbatas, perlu cepat | Ada developer tetap, ingin kontrol penuh dan performa maksimal |
| Teknologi | Tema kustom (bukan tema jadi yang diubah sedikit), Custom Post Type untuk Guru, Prestasi, Ekskul, PPDB; ACF untuk field | Astro atau Next.js + CMS headless (Sanity/Strapi/Directus) + Tailwind atau CSS modules berbasis token Bagian 5 |
| Form PPDB | Plugin form (mis. Fluent Forms) atau modul kustom | API sendiri + database + notifikasi email/WA |
| Hosting | Hosting WordPress terkelola dengan cache | Vercel/Netlify/Cloudflare Pages + database terkelola |

Apa pun pilihannya, **design token Bagian 5 menjadi sumber tunggal** nilai warna, font, dan spasi.

Struktur komponen yang disarankan: `Header`, `MobileDrawer`, `Footer`, `Button`, `Card*`, `Chip`, `Accordion`, `Tabs`, `Stepper`, `Form*`, `Lightbox`, `Carousel`, `ModelViewerLogo`, `Breadcrumb`, `Pagination`, `DataTableResponsive`, `FloatingActions`.

---

## 16. Kriteria penerimaan (Definition of Done)

Sebuah halaman dianggap **selesai** bila semuanya terpenuhi:

1. Sesuai spesifikasi seksi di Bagian 8 pada tiga lebar acuan: 360, 768, 1280 px.
2. Tidak ada gulir horizontal dari 320 px sampai 2560 px.
3. Lulus daftar larangan Bagian 4.2 (reviewer mencentang satu per satu).
4. Lulus axe tanpa pelanggaran serius/kritis dan uji keyboard penuh.
5. Lighthouse mobile memenuhi target Bagian 1.3.
6. Teks dan data asli (atau seksi disembunyikan), tidak ada *lorem ipsum* atau placeholder terlihat di produksi.
7. Semua tautan, tombol WA, telepon, dan email berfungsi di perangkat nyata (minimal 1 iPhone dan 1 Android).
8. Pratinjau bagikan WhatsApp menampilkan judul, deskripsi, dan gambar yang benar.
9. Form menampilkan error yang jelas, tidak kehilangan data saat salah isi, dan notifikasi terkirim ke panitia.
10. Review visual dibandingkan terhadap token Bagian 5 (tidak ada warna atau ukuran di luar token).

### Checklist QA cepat per rilis
- [ ] Uji 320 / 360 / 390 / 412 / 768 / 1024 / 1280 / 1536 px
- [ ] Putar layar HP (portrait ↔ landscape)
- [ ] Zoom 200% dan font sistem besar
- [ ] Drawer: buka, tutup, `Esc`, fokus kembali, scroll terkunci
- [ ] Dropdown desktop: hover, klik, keyboard, tutup
- [ ] Tabel jadi kartu di HP
- [ ] Lightbox: swipe, panah, `Esc`
- [ ] Form PPDB: validasi, simpan draft, unggah berkas, kirim, halaman sukses
- [ ] Model 3D: lazy load, poster, fallback tanpa WebGL, reduced-motion
- [ ] Throttle 4G: LCP dan CLS sesuai target
- [ ] Tautan rusak (crawler) dan 404 benar
- [ ] Cetak: Syarat/Biaya, Jadwal, Tata Tertib

---

## 17. Tahapan pengerjaan yang disarankan

| Fase | Isi | Keluaran |
|---|---|---|
| 0. Pengumpulan data | Kumpulkan data dan foto (Bagian 14), putuskan opsi teknis | Folder konten, daftar izin foto |
| 1. Fondasi | Token, tipografi, grid, tombol, form, kartu, header, drawer, footer | Pustaka komponen + halaman uji (style guide) |
| 2. Halaman inti | Beranda, PPDB (semua sub-halaman), Kontak | Dapat dipakai untuk periode PPDB |
| 3. Konten | Profil, Akademik, Kesiswaan | Halaman terisi data asli |
| 4. Informasi | Berita, pengumuman, galeri, unduhan, pencarian | Admin bisa mengelola sendiri |
| 5. Penyempurnaan | Logo 3D, optimasi gambar, SEO, aksesibilitas | Lighthouse tercapai |
| 6. Uji dan rilis | Matriks perangkat (Bagian 11), pelatihan admin, rilis | Situs produksi + panduan admin |

---

## 18. Pertanyaan terbuka (perlu jawaban sekolah)

1. Berapa nomor WhatsApp resmi panitia dan siapa yang membalasnya? Jam berapa?
2. Apakah pendaftaran PPDB dilakukan sepenuhnya online, atau online hanya untuk pra-daftar lalu datang ke sekolah?
3. Apakah ada program unggulan khusus (tahfidz, bahasa, sains, dsb.) yang boleh dipromosikan?
4. Siapa yang akan mengelola konten setiap minggu, dan apakah ada fotografer/dokumentasi kegiatan?
5. Apakah ada identitas visual tambahan (logo MTs terpisah dari logo yayasan, warna seragam, slogan resmi)?
6. Apakah situs akan memakai domain sendiri (mis. `.sch.id`) dan siapa yang mengurus pendaftarannya?
7. Apakah foto siswa boleh ditampilkan publik, dan sudah ada izin tertulis dari wali murid?

---

# Lampiran A — Data dummy untuk pengembangan

> **Semua data di lampiran ini fiktif.** Dipakai hanya di staging, ditandai `dummy: true`, dan harus diganti sebelum produksi (Bagian 14). Tanggal disusun relatif terhadap Oktober 2026 dan tahun ajaran PPDB 2027/2028 supaya tampilan status periode, urutan berita, dan hitung mundur bisa diuji.

## A.1 Identitas dan kontak

| Field | Nilai dummy |
|---|---|
| Nama | MTs Islamiyah Ujungpangkah |
| Nama pendek (HP) | MTs Islamiyah |
| Yayasan | Yayasan Taman Pendidikan Islamiyah (YPI) Ujungpangkah Gresik |
| Slogan (dummy) | Beriman, Berilmu, Berakhlak |
| NPSN / Akreditasi | 00000000 / B (dummy) |
| Alamat | Jl. Contoh Raya No. 12, Kec. Ujungpangkah, Kab. Gresik, Jawa Timur 61154 |
| Koordinat peta | -6.9000, 112.5600 (perkiraan, hanya untuk uji embed) |
| Telepon | (031) 0000-0000 |
| WhatsApp panitia | 0812-0000-0000 (tautan `https://wa.me/62812000000000`) |
| Email | info@mtsislamiyah.example |
| Jam layanan | Senin–Jumat 07.00–15.00 WIB, Sabtu 07.00–12.00 WIB |
| Sosial | Instagram `@mtsislamiyah.dummy`, YouTube `MTs Islamiyah Dummy`, Facebook `MTs Islamiyah Dummy` |
| Teks WA awal | "Assalamu'alaikum, saya ingin bertanya tentang PPDB MTs Islamiyah." |

## A.2 Hero dan sambutan

**Hero**
- `h1`: "MTs Islamiyah Ujungpangkah: Madrasah yang Menumbuhkan Ilmu dan Akhlak"
- Pendukung: "Belajar dengan kurikulum nasional dan pembiasaan ibadah harian, di bawah naungan YPI Ujungpangkah, Gresik."
- Tombol: "Daftar PPDB" (CTA) dan "Kenali Madrasah" (sekunder)

**Sambutan kepala madrasah** (nama fiktif)
- Nama: **H. Muhammad Rizal, S.Pd.I., M.Pd.** (dummy), Kepala Madrasah
- Teks: "Assalamu'alaikum warahmatullahi wabarakatuh. Kami percaya anak-anak tumbuh paling baik ketika sekolah dan keluarga berjalan bersama. Di MTs Islamiyah, pembelajaran sehari-hari kami padukan dengan pembiasaan shalat dhuha, tadarus, dan kegiatan sosial, agar ilmu tidak berhenti di buku. Kami mengundang Bapak dan Ibu mengenal madrasah ini lebih dekat, melihat kegiatan siswa, dan berdiskusi langsung dengan para guru."
- Tautan: "Baca sambutan lengkap"

## A.3 Angka sekolah (dummy)

| Label | Nilai |
|---|---|
| Tahun berdiri | 1987 |
| Siswa aktif | 384 |
| Guru dan tenaga kependidikan | 31 |
| Rombongan belajar | 12 |
| Prestasi 2025/2026 | 17 |

## A.4 Program unggulan (5)

1. **Tahfidz Juz 30** – Setoran hafalan tiga kali seminggu dengan pembina bersertifikat. *Kelas VII–IX, Senin/Rabu/Kamis pukul 06.30.*
2. **Kelas Bahasa Arab dan Inggris** – Praktik percakapan dalam kelompok kecil, maksimal 15 siswa per kelompok.
3. **Sains Terapan** – Praktikum mingguan di laboratorium IPA; proyek akhir semester berupa karya ilmiah remaja.
4. **Literasi dan Perpustakaan** – Program "15 Menit Membaca" setiap pagi dan klub resensi buku bulanan.
5. **Pembiasaan Ibadah dan Akhlak** – Shalat dhuha berjamaah, tadarus, dan kegiatan Jumat Berbagi.

## A.5 Berita (6, urut terbaru)

| Tgl | Kategori | Judul | Ringkasan (≤ 2 baris) |
|---|---|---|---|
| 22 Okt 2026 | Kegiatan | Peringatan Hari Santri, Siswa Gelar Apel dan Lomba Kaligrafi | Seluruh siswa mengikuti apel pagi dilanjutkan lomba kaligrafi antarkelas di halaman madrasah. |
| 15 Okt 2026 | Prestasi | Tim Sains MTs Islamiyah Raih Juara 2 Olimpiade Tingkat Kabupaten | Tiga siswa kelas VIII mewakili madrasah dalam olimpiade sains yang diikuti 40 sekolah. |
| 8 Okt 2026 | Akademik | Penilaian Tengah Semester Ganjil Dimulai Senin Depan | Jadwal, tata tertib ruang ujian, dan hal yang perlu disiapkan siswa. |
| 29 Sep 2026 | Kegiatan | Jumat Berbagi: Siswa Kumpulkan Donasi untuk Panti Asuhan Sekitar | Donasi terkumpul dari sumbangan sukarela siswa dan guru selama tiga pekan. |
| 17 Sep 2026 | Kesiswaan | Pelantikan Pengurus OSIS Periode 2026/2027 | Sebelas pengurus baru dilantik dan memaparkan program kerja satu tahun. |
| 3 Sep 2026 | Pengumuman | Kunjungan Studi Banding dari Madrasah Tetangga ke Perpustakaan Kami (judul uji panjang) | Kasus uji untuk judul panjang: "Kunjungan studi banding dan diskusi pengelolaan perpustakaan madrasah bersama rombongan guru dari sekolah mitra di wilayah Gresik" harus terpotong rapi di dua baris. |

Berita pertama diberi isi artikel dummy lengkap (4 paragraf, 1 gambar dalam isi, 1 kutipan, 1 tabel kecil) untuk menguji halaman detail.

## A.6 Pengumuman (4)

| Tgl | Judul | Status | Lampiran |
|---|---|---|---|
| 24 Okt 2026 | Jadwal Penilaian Tengah Semester Ganjil | **Penting** | PDF, 180 KB |
| 20 Okt 2026 | Libur Maulid Nabi dan Pembelajaran Pengganti | Biasa | – |
| 12 Okt 2026 | Pembagian Seragam Batik Kelas VII Gelombang 2 | Biasa | PDF, 95 KB |
| 1 Okt 2026 | Pendaftaran Ekstrakurikuler Semester Ganjil Diperpanjang | Biasa | – |

## A.7 Guru dan tenaga kependidikan (8, fiktif)

| Nama | Jabatan / Mapel |
|---|---|
| H. Muhammad Rizal, S.Pd.I., M.Pd. | Kepala Madrasah |
| Siti Nurhaliza, S.Pd. | Waka Kurikulum, Matematika |
| Ahmad Fauzan, S.Pd.I. | Waka Kesiswaan, Akidah Akhlak |
| Dewi Rahmawati, S.Si. | IPA |
| Mochamad Ilham, S.Pd. | Bahasa Inggris |
| Ustadzah Laila Munawaroh, S.Ag. | Bahasa Arab, Pembina Tahfidz |
| Hendra Wijaya, S.Pd. | IPS |
| Nur Aini, A.Md. | Tata Usaha |

Foto: penampung abu rasio 4:5 berlabel "Foto guru". Satu kartu sengaja tanpa foto (inisial nama dalam lingkaran hijau muda) untuk menguji status kosong.

## A.8 Ekstrakurikuler (6)

| Nama | Kategori | Jadwal | Pembina |
|---|---|---|---|
| Hadrah dan Qasidah | Seni keagamaan | Rabu 14.00 | Ust. Laila M. |
| Pramuka | Kepramukaan | Jumat 14.00 | Hendra W. |
| Futsal | Olahraga | Selasa 15.00 | Ahmad F. |
| Karya Ilmiah Remaja | Sains | Kamis 14.00 | Dewi R. |
| Tilawah dan Kaligrafi | Seni keagamaan | Senin 14.00 | Ust. Laila M. |
| English Club | Bahasa | Sabtu 08.00 | Mochamad I. |

## A.9 Prestasi (6)

| Tahun | Tingkat | Prestasi | Siswa |
|---|---|---|---|
| 2026 | Kabupaten | Juara 2 Olimpiade Sains | Tim 3 siswa kelas VIII |
| 2026 | Kecamatan | Juara 1 Lomba Tilawah Putri | Aisyah Zahra (VIII) |
| 2026 | Kabupaten | Juara 3 Futsal Putra Piala Pelajar | Tim Futsal |
| 2025 | Provinsi | Finalis Lomba Karya Ilmiah Remaja | Tim KIR |
| 2025 | Kecamatan | Juara Harapan 1 Kaligrafi | Rafi Pratama (IX) |
| 2025 | Kabupaten | Juara 2 Pidato Bahasa Arab | Naila Putri (VII) |

## A.10 PPDB (tahun ajaran 2027/2028)

**Status (uji tiga keadaan):** "Dibuka s.d. 28 Februari 2027" (default dummy), "Segera dibuka", "Ditutup".

**Jadwal**

| Tahap | Gelombang 1 | Gelombang 2 |
|---|---|---|
| Pendaftaran | 4 Jan – 28 Feb 2027 | 1 Mar – 30 Apr 2027 |
| Seleksi administrasi dan tes baca Al-Qur'an | 6 Mar 2027 | 8 Mei 2027 |
| Pengumuman | 12 Mar 2027 | 14 Mei 2027 |
| Daftar ulang | 15 – 27 Mar 2027 | 17 – 29 Mei 2027 |

**Kuota (dummy):** 128 siswa (4 rombel × 32).

**Syarat pendaftaran**
1. Lulus atau akan lulus SD/MI tahun 2027
2. Usia maksimal 15 tahun pada 1 Juli 2027
3. Fotokopi akta kelahiran dan Kartu Keluarga
4. Fotokopi rapor kelas IV–VI atau surat keterangan sekolah
5. Pas foto 3×4 sebanyak 2 lembar
6. Bersedia mengikuti tes baca Al-Qur'an dasar

**Rincian biaya (dummy)**

| Komponen | Nominal | Keterangan |
|---|---|---|
| Biaya pendaftaran | Rp150.000 | Sekali bayar, tidak dikembalikan |
| Uang gedung | Rp1.800.000 | Dapat dicicil 3 kali |
| Seragam (4 stel) | Rp900.000 | Termasuk atribut |
| Buku paket dan LKS | Rp450.000 | Per tahun |
| SPP bulanan | Rp175.000 | Per bulan |
| **Total awal masuk** | **Rp3.300.000** | Di luar SPP |

Keringanan: "Tersedia keringanan bagi siswa yatim/piatu dan peraih prestasi tingkat kabupaten ke atas (ketentuan dummy)."

**Alur pendaftaran (4 langkah)**
1. Isi formulir online dan unggah berkas
2. Tunggu verifikasi (maksimal 2 hari kerja)
3. Ikuti seleksi administrasi dan tes baca Al-Qur'an
4. Lihat pengumuman dan lakukan daftar ulang

**FAQ (8)**
1. *Apakah pendaftaran bisa dilakukan sepenuhnya online?* Pengisian formulir dan unggah berkas online; seleksi dilakukan di madrasah.
2. *Apakah ada tes masuk?* Ada seleksi administrasi dan tes baca Al-Qur'an dasar, bukan tes akademik yang menyulitkan.
3. *Berapa kuota tiap gelombang?* 64 siswa per gelombang.
4. *Bisa mencicil uang gedung?* Ya, maksimal 3 kali.
5. *Apakah ada seragam khusus?* Ya, empat stel; ukuran diukur saat daftar ulang.
6. *Apakah siswa dari luar Gresik boleh mendaftar?* Boleh, selama berkas lengkap.
7. *Bagaimana jika berkas belum lengkap?* Dapat dilengkapi paling lambat saat tes.
8. *Siapa yang bisa dihubungi?* Panitia PPDB via WhatsApp pada jam layanan.

## A.11 Kalender akademik (contoh 6 entri)

| Tanggal | Kegiatan | Kategori |
|---|---|---|
| 26 Okt – 6 Nov 2026 | Penilaian Tengah Semester Ganjil | Ujian |
| 9 Nov 2026 | Peringatan Hari Pahlawan | Kegiatan |
| 14 – 18 Des 2026 | Penilaian Akhir Semester Ganjil | Ujian |
| 21 Des 2026 – 2 Jan 2027 | Libur semester ganjil | Libur |
| 4 Jan 2027 | Awal semester genap | Akademik |
| 4 Jan 2027 | Pembukaan PPDB gelombang 1 | PPDB |

## A.12 Profil

**Sejarah (timeline)**

| Tahun | Peristiwa |
|---|---|
| 1987 | Madrasah dirintis di bawah YPI Ujungpangkah dengan dua ruang kelas dan 28 siswa |
| 1996 | Mulai menerima siswa dua rombongan belajar |
| 2005 | Pembangunan gedung dua lantai dan perpustakaan |
| 2014 | Penambahan laboratorium IPA |
| 2022 | Program tahfidz Juz 30 dimulai |
| 2026 | Peluncuran website resmi madrasah |

**Visi (dummy):** "Terwujudnya peserta didik yang beriman, berilmu, berakhlak mulia, dan peduli lingkungan."

**Misi (dummy):**
1. Menyelenggarakan pembelajaran yang aktif dan menyenangkan.
2. Menumbuhkan kebiasaan ibadah dan akhlak dalam keseharian.
3. Mengembangkan minat dan bakat melalui kegiatan ekstrakurikuler.
4. Membangun kemitraan yang erat dengan orang tua dan masyarakat.

**Tujuan (dummy):** (1) Seluruh siswa lancar membaca Al-Qur'an saat lulus; (2) ketuntasan belajar minimal 85%; (3) minimal satu prestasi tingkat kabupaten setiap tahun.

**Makna logo YPI (dummy, perlu diverifikasi yayasan):** bintang melambangkan cita-cita, buku melambangkan ilmu, obor melambangkan semangat, globe melambangkan wawasan luas, warna hijau melambangkan kesuburan dan kedamaian, kuning melambangkan keluhuran.

**Fasilitas (6):** Ruang kelas ber-AC kipas, Musala, Perpustakaan, Laboratorium IPA, Lapangan serbaguna, Kantin sehat. Tiap fasilitas: 1 foto penampung dan 1–2 kalimat.

## A.13 Testimoni (3, hanya dummy)

| Nama | Peran | Kutipan |
|---|---|---|
| Ibu Sri Wahyuni (dummy) | Wali murid kelas VIII | "Anak saya jadi lebih rajin shalat dan mau membantu di rumah. Komunikasi dengan wali kelas juga lancar lewat grup." |
| Bapak Hasan (dummy) | Wali murid kelas VII | "Lokasinya dekat dan biayanya jelas dari awal, tidak ada pungutan tiba-tiba." |
| Rafi Pratama (dummy) | Alumni angkatan 2024 | "Hafalan dan bahasa Inggris dari sini sangat membantu waktu saya masuk SMA." |

Foto penulis: inisial dalam lingkaran, bukan foto.

## A.14 Galeri (4 album dummy)

| Album | Tanggal | Jumlah foto |
|---|---|---|
| Hari Santri 2026 | 22 Okt 2026 | 24 |
| Olimpiade Sains Kabupaten | 15 Okt 2026 | 12 |
| Pelantikan OSIS | 17 Sep 2026 | 18 |
| Jumat Berbagi | 29 Sep 2026 | 9 |

Foto penampung rasio campuran (3:2, 4:3, 2:3, 1:1) supaya grid masonry dan lightbox teruji pada gambar potret dan lanskap.

## A.15 Unduhan (5)

| Berkas | Kategori | Format | Ukuran |
|---|---|---|---|
| Formulir Pendaftaran PPDB (cetak) | PPDB | PDF | 210 KB |
| Brosur PPDB 2027/2028 | PPDB | PDF | 1,4 MB |
| Kalender Akademik 2026/2027 | Akademik | PDF | 320 KB |
| Tata Tertib Siswa | Kesiswaan | PDF | 540 KB |
| Surat Pernyataan Orang Tua | PPDB | DOCX | 38 KB |

## A.16 Kasus uji tepi (wajib ada di data dummy)

Supaya layout teruji bukan hanya pada kasus ideal:

| Kasus | Cara menguji |
|---|---|
| Judul berita sangat panjang (≥ 120 karakter) | Berita ke-6 (A.5), cek pemotongan dua baris |
| Nama guru panjang | "Ustadzah Laila Munawaroh, S.Ag." di kartu 2 kolom HP |
| Tanpa foto | Satu kartu guru dan semua testimoni |
| Daftar kosong | Filter prestasi tahun 2020 harus menampilkan keadaan kosong |
| Satu item saja | Album galeri dengan 1 foto, kategori berita dengan 1 artikel |
| Banyak item | Galeri 24 foto, FAQ 8 item, daftar berita 30 item (untuk pagination) |
| Angka besar | Total biaya "Rp3.300.000" di lebar 320 px tidak terpotong |
| Teks Arab | Kutipan "بسم الله الرحمن الرحيم" dengan `lang="ar"` dan `dir="rtl"` di Sambutan |
| URL/email panjang | `info@mtsislamiyah.example` di footer HP tidak membuat halaman melebar |

## A.17 Format berkas data (contoh)

```json
{
  "dummy": true,
  "news": [
    {
      "slug": "peringatan-hari-santri-2026",
      "title": "Peringatan Hari Santri, Siswa Gelar Apel dan Lomba Kaligrafi",
      "date": "2026-10-22",
      "category": "Kegiatan",
      "excerpt": "Seluruh siswa mengikuti apel pagi dilanjutkan lomba kaligrafi antarkelas di halaman madrasah.",
      "image": { "src": "/assets/dummy/berita-01.jpg", "alt": "Siswa berbaris saat apel Hari Santri", "width": 1600, "height": 1000 },
      "dummy": true
    }
  ]
}
```

Aturan: tiap entri berisi `dummy: true`; gambar selalu punya `alt`, `width`, `height`; tanggal format ISO (`YYYY-MM-DD`) dan ditampilkan dalam format Indonesia oleh komponen.
