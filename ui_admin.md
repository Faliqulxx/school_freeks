# Arsitektur & Spesifikasi UI CMS Admin MTs Islamiyah Ujungpangkah

Dokumen ini mendokumentasikan spesifikasi antarmuka manajemen konten (*Content Management System* / Admin Dashboard) untuk website resmi **MTs Islamiyah Ujungpangkah**. Seluruh modul dirancang untuk memudahkan administrator sekolah dalam melakukan operasi CRUD (*Create, Read, Update, Delete*) secara interaktif.

---

## Daftar Modul & Rencana Implementasi

1. [Modul 1: Pengaturan Global Situs (*Site Settings*)](#1-pengaturan-global-situs-site-settings)
2. [Modul 2: Beranda (*Home Page Management*)](#2-halaman-beranda-home-page)
3. [Modul 3: Manajemen Profil Madrasah (`/profil/*`)](#3-menu-profil)
4. [Modul 4: Manajemen Akademik (`/akademik/*`)](#4-menu-akademik)
5. [Modul 5: Manajemen Kesiswaan (`/kesiswaan/*`)](#5-menu-kesiswaan)
6. [Modul 6: Manajemen Informasi & Publikasi (`/informasi/*`)](#6-menu-informasi)
7. [Modul 7: PPDB Online & Data Pendaftar (`/ppdb/*`)](#7-menu-ppdb-penerimaan-peserta-didik-baru)
8. [Modul 8: Kotak Masuk Kontak & Aspirasi (`/kontak`)](#8-kotak-masuk-kontak--aspirasi)

---

## 1. Pengaturan Global Situs (*Site Settings*)

Bagian ini mengatur identitas institusi dan kontak madrasah yang tampil secara serempak di Topbar, Header, Footer, serta Meta Data SEO di seluruh halaman website.

- **File Sumber Data**: `src/data/siteData.json`
- **Operasi**: **Read & Update**
- **Atribut yang Dikelola**:
  - **Identitas Madrasah**:
    - Nama Sekolah (`name`): `MTs Islamiyah Ujungpangkah`
    - Nama Singkat (`shortName`): `MTs Islamiyah`
    - Yayasan Naungan (`foundation`): `Yayasan Taman Pendidikan Islamiyah (YPI) Ujungpangkah Gresik`
    - Status Akreditasi (`accreditation`): `A`
    - NPSN (`npsn`): `20582531`
    - Tagline / Motto (`motto`): `Berilmu, Beramal, Berakhlak`
    - Deskripsi Meta SEO (`description`)
  - **Kontak & Komunikasi**:
    - Nomor Telepon Kantor (`phone`): `0823-0000-0000`
    - Nomor WhatsApp Panitia (`whatsapp` & `whatsappRaw`): `0823-0000-0000` / `6282300000000`
    - Pesan Default WhatsApp (`whatsappMessage`): `Assalamu'alaikum, saya ingin bertanya tentang PPDB MTs Islamiyah.`
    - Email Resmi (`email`): `info@mtsislamiyah-ujungpangkah.sch.id`
  - **Jam Operasional Pelayanan**:
    - Jam Layanan Kantor (`officeHours`): `Senin - Jumat 07:00-15:00 WIB, Sabtu 07:00-12:00 WIB`
  - **Lokasi & Pemetaan**:
    - Alamat Lengkap (`address`): `Jl. Setro Bar. No.09, Jomplangan, Pangkahkulon, Kec. Ujungpangkah, Kabupaten Gresik, Jawa Timur 61154`
    - Tautan Google Maps (`mapsUrl`): `https://maps.app.goo.gl/3LkMon4TYU53cW9P7`
    - Koordinat Latitude (`coordinates.lat`) & Longitude (`coordinates.lng`)
  - **Tautan Media Sosial**:
    - Instagram URL (`socials.instagramUrl`)
    - YouTube URL (`socials.youtubeUrl`)
    - Facebook URL (`socials.facebookUrl`)
  - **Aset Identitas**:
    - Logo Resmi Yayasan/Madrasah (`logo.src`): `/assets/logo-ypi.webp`

---

## 2. Halaman Beranda (*Home Page*)

- **File Sumber Data**: `src/data/heroSambutan.json`, `src/data/angkaSekolah.json`, `src/data/testimoni.json`, `src/data/ppdb.json`
- **Section yang Dikelola**:
  1. **Hero Section** (Update):
     - Judul Utama (`hero.title`): `MTs Islamiyah Ujungpangkah`
     - Subtitle Hero (`hero.subtitle`)
     - Teks Tombol CTA Utama (`hero.ctaText`) & URL Tujuan (`hero.ctaUrl`)
     - Teks Tombol Sekunder (`hero.secondaryText`) & URL Tujuan (`hero.secondaryUrl`)
     - Gambar Latar Belakang Gedung (`hero.image.src`): `/assets/gedung-mts-islamiyah.webp`
  2. **Info Cepat PPDB Strip** (Update):
     - Status PPDB, Rentang Tanggal Gelombang 1, Total Kuota Siswa, Syarat Masuk Ringkas.
  3. **Naungan Yayasan** (Update):
     - Deskripsi sejarah yayasan dan 2 pilar keunggulan yayasan.
  4. **Sambutan Kepala Madrasah** (Update):
     - Foto resmi Kepala Madrasah (`/assets/guru-freeks.webp`), Nama lengkap, Jabatan, dan Kutipan Singkat (*Short Quote*).
  5. **Statistik / Angka Kunci Sekolah** (Update):
     - Siswa Aktif, Tenaga Pendidik, Persentase Kelulusan, dan Ruang Kelas.
  6. **Testimoni Wali & Alumni** (CRUD):
     - Tambah, edit, dan hapus testimoni (Nama, Peran/Wali Murid, Kutipan, Inisial).
  7. **Banner Ajakan PPDB** (Update):
     - Teks headline ajakan, kuota pendaftaran, dan tombol aksi.

---

## 3. Menu Profil (`/profil/*`)

- **File Sumber Data**: `src/data/profil.json`, `src/data/heroSambutan.json`
- **Sub-Modul yang Dikelola**:
  1. **Sejarah Rintisan (`/profil/sejarah`)**:
     - Paragraf pengantar sejarah.
     - Foto gedung sekolah (`/assets/gedung-mts-islamiyah.webp`) dan takarir foto.
     - CRUD Tonggak Sejarah (Tahun, Judul Peristiwa, Narasi Deskripsi).
  2. **Visi, Misi & Tujuan (`/profil/visi-misi`)**:
     - Teks visi madrasah.
     - CRUD Butir-butir Misi (Tambah, Urutkan, Edit, Hapus).
     - CRUD Butir-butir Tujuan (Tambah, Urutkan, Edit, Hapus).
  3. **Sambutan Kepala Madrasah Lengkap (`/profil/sambutan`)**:
     - Foto resmi, Nama pimpinan & gelar, Salam pembuka bahasa Arab, Naskah pidato per paragraf.
  4. **Struktur Organisasi (`/profil/struktur-organisasi`)**:
     - CRUD hierarki kepemimpinan (Tingkat level, Nama personil, Jabatan, Kategori: Pimpinan/Pengajar/Komite).
  5. **Profil Yayasan YPI (`/profil/yayasan`)**:
     - Sejarah YPI Ujungpangkah dan tahun berdiri.
     - CRUD Makna Lambang (Elemen lambang, simbol, dan filosofi).
     - CRUD Unit Pendidikan naungan YPI (PAUD, MI, MTs, MA/SMA).
  6. **Fasilitas Sekolah (`/profil/fasilitas`)**:
     - CRUD Sarana Prasarana (Nama fasilitas, Deskripsi, Foto fasilitas, Luas, Kelengkapan sarana).

---

## 4. Menu Akademik (`/akademik/*`)

- **File Sumber Data**: `src/data/kurikulum.json`, `src/data/programUnggulan.json`, `src/data/prestasi.json`, `src/data/guru.json`, `src/data/kalender.json`
- **Sub-Modul yang Dikelola**:
  1. **Kurikulum (`/akademik/kurikulum`)**:
     - Deskripsi integrasi kurikulum nasional & pesantren.
     - CRUD Struktur Mata Pelajaran (Kelompok A Umum, Kelompok B Agama, Muatan Lokal) dan Jam Pelajaran Kelas VII, VIII, IX.
  2. **Program Unggulan (`/akademik/program-unggulan`)**:
     - CRUD Program (Judul program, Pembina/Mentor, Foto dokumentasi, Deskripsi, Target capaian siswa).
  3. **Prestasi Siswa (`/akademik/prestasi`)**:
     - CRUD Prestasi (Nama kompetisi, Peraih juara, Kategori, Tingkat kejuaraan, Tahun perolehan, Foto sertifikat/piala).
  4. **Dewan Guru & Tenaga Kependidikan (`/akademik/guru`)**:
     - CRUD Guru & Tendik (Nama panggilan, Nama lengkap + Gelar resmi, Tempat & tanggal lahir, Mata pelajaran yang diampu, Jabatan penugasan, Kategori departemen, Foto formal WebP).
  5. **Kalender Akademik (`/akademik/kalender`)**:
     - Tahun ajaran aktif, Link file PDF kalender pendidikan.
     - CRUD Agenda (Tanggal mulai, Tanggal selesai, Nama agenda, Kategori acara).

---

## 5. Menu Kesiswaan (`/kesiswaan/*`)

- **File Sumber Data**: `src/data/kesiswaan.json`, `src/data/ekskul.json`
- **Sub-Modul yang Dikelola**:
  1. **OSIS & MPK (`/kesiswaan/osis`)**:
     - Masa bakti periode, Visi & Misi OSIS, Struktur pengurus inti, CRUD Program Kerja per divisi.
  2. **Ekstrakurikuler (`/kesiswaan/ekstrakurikuler`)**:
     - CRUD Ekskul (Nama ekstrakurikuler, Foto kegiatan, Hari & jam latihan, Nama pelatih/pembina, Deskripsi).
  3. **Tata Tertib Siswa (`/kesiswaan/tata-tertib`)**:
     - Jam kehadiran & kepulangan, CRUD Seragam harian (Senin–Sabtu), CRUD Poin Pelanggaran & Sanksi.
  4. **Direktori Alumni (`/kesiswaan/alumni`)**:
     - CRUD Testimoni alumni & sebaran sekolah lanjutan.
     - Akses data formulir penelusuran (*tracer study*) alumni.

---

## 6. Menu Informasi & Publikasi (`/informasi/*`)

- **File Sumber Data**: `src/data/berita.json`, `src/data/pengumuman.json`, `src/data/galeri.json`, `src/data/unduhan.json`
- **Sub-Modul yang Dikelola**:
  1. **Berita & Kegiatan (`/informasi/berita`)**:
     - CRUD Artikel (Judul, Slug URL unik, Kategori berita, Tanggal rilis, Penulis, Gambar thumbnail WebP, Ringkasan, Konten artikel lengkap).
  2. **Pengumuman Resmi (`/informasi/pengumuman`)**:
     - CRUD Pengumuman (Judul maklumat, Nomor surat edaran, Tanggal terbit, Level urgensi *Normal/Penting*, Isi pengumuman, Lampiran PDF).
  3. **Galeri Dokumentasi (`/informasi/galeri`)**:
     - CRUD Album (Nama album kegiatan, Kategori, Tanggal acara, Kumpulan foto WebP & takarir).
  4. **Pusat Unduhan Berkas (`/informasi/unduhan`)**:
     - CRUD Berkas (Judul dokumen publik, Kategori, Deskripsi, Tautan file download, Ukuran file).

---

## 7. Menu PPDB (Penerimaan Peserta Didik Baru / `/ppdb/*`)

- **File Sumber Data**: `src/data/ppdb.json`
- **Sub-Modul yang Dikelola**:
  1. **Status & Kuota**:
     - Status pendaftaran (*Buka / Tutup*), Tahun ajaran aktif, Total daya tampung kuota.
  2. **Gelombang & Jadwal**:
     - CRUD Gelombang Pendaftaran (Gelombang 1 & 2: Rentang pendaftaran, Tanggal tes seleksi/baca Al-Qur'an, Pengumuman, Registrasi ulang).
  3. **Syarat & Biaya**:
     - CRUD Berkas persyaratan pendaftaran, Rincian biaya administrasi & seragam, Skema beasiswa potongan infaq.
  4. **FAQ PPDB**:
     - CRUD Pertanyaan dan jawaban seputar pendaftaran.
  5. **Data Pendaftar Online**:
     - Melihat daftar pendaftar formulir online, Verifikasi status penerimaan (*Menunggu, Diterima, Cadangan*), Cetak formulir, Ekspor rekap data ke Excel/CSV.

---

## 8. Kotak Masuk Kontak & Aspirasi (`/kontak`)

- **Fitur**:
  - Melihat daftar pesan dan pertanyaan yang dikirimkan oleh pengunjung melalui formulir halaman Kontak.
  - Memfilter status pesan (*Belum Dibaca*, *Sudah Dibalas*).
  - Tautan cepat balas langsung via WhatsApp atau Email.
  - Hapus pesan sampah / spam.

