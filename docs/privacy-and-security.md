# Panduan Privasi & Keamanan Data PPDB 🔒

Pendaftaran Peserta Didik Baru (PPDB) melibatkan pengumpulan data pribadi yang bersifat sensitif, termasuk data anak di bawah umur (NISN, tanggal lahir, nama orang tua, nomor telepon, dan alamat tinggal).

Setiap sekolah atau institusi yang mengoperasikan website ini wajib mematuhi kaidah perlindungan data pribadi (UU Pelindungan Data Pribadi / UU PDP No. 27 Tahun 2022 di Indonesia).

---

## 1. Perlindungan Khusus Data Anak di Bawah Umur

- Data calon siswa termasuk dalam kategori data pribadi yang memerlukan persetujuan dari orang tua atau wali yang sah.
- Formulir pendaftaran pada template ini telah menyertakan input kontak orang tua/wali (`ortu-wa` dan `ortu-ayah`/`ortu-ibu`) sebagai penanggung jawab pendaftaran.
- **Batasan Akses**: Jangan pernah menampilkan data pendaftar (nama lengkap beserta nomor telepon dan alamat) pada halaman publik yang dapat diakses umum tanpa autentikasi.

---

## 2. Pemberitahuan Privasi (Privacy Notice)

Sekolah disarankan menyertakan tautan atau teks klausul persetujuan pada bagian bawah form pendaftaran:
> *"Dengan mengirimkan formulir ini, orang tua/wali calon siswa menyatakan bahwa data yang diisi adalah benar dan menyetujui pemrosesan data tersebut oleh panitia PPDB untuk keperluan seleksi dan administrasi sekolah."*

---

## 3. Keamanan Penyimpanan Data

1. **Mode Bawaan (`none`)**:
   - Data isian hanya disimpan sementara di peramban (`localStorage`) perangkat pengguna untuk kenyamanan fitur draft. Data tersebut tidak dikirim ke server mana pun hingga sekolah mengaktifkan backend riil.
2. **Mode Supabase**:
   - Pastikan **Row Level Security (RLS)** selalu aktif (sudah dikonfigurasi di file `database/supabase.sql`).
   - Hanya berikan hak `INSERT` kepada publik anonim.
   - Hak baca (`SELECT`), ekspor, dan hapus data hanya diberikan kepada akun staf tata usaha / panitia PPDB yang terotentikasi.
3. **Penyimpanan di Google Sheets (Mode Webhook)**:
   - Pastikan tautan Google Spreadsheet tidak disetel ke "Siapa saja yang memiliki tautan dapat melihat". Batasi akses hanya untuk akun Google resmi panitia PPDB sekolah.

