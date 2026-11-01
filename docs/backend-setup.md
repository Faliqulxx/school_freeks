# Panduan Setup Backend Opsional 🔌

Template ini mengadopsi pola **Adapter Pattern** yang memungkinkan sekolah menghubungkan formulir pendaftaran PPDB dan pesan kontak ke backend pilihan tanpa perlu memodifikasi kode antarmuka.

---

## 1. Provider: `none` (Default Bawaan)
- **Kebutuhan**: Tanpa server, tanpa database, tanpa file `.env`.
- **Perilaku**:
  - Isian pendaftaran PPDB tersimpan di `localStorage` peramban calon siswa.
  - Saat form selesai disubmit, nomor registrasi digenerate otomatis dan disajikan bersama tombol direct chat konfirmasi ke WhatsApp Panitia PPDB.
  - Pesan kontak tersimpan di kotak masuk panel admin lokal (`/admin`).
- **Aktivasi**: Ini adalah perilaku bawaan jika tidak ada konfigurasi apa pun.

---

## 2. Provider: `webhook` (Google Sheets, Make, n8n, Formspree)
Sangat ideal bagi sekolah yang ingin mengumpulkan data formulir pendaftaran langsung ke lembar kerja **Google Sheets** tanpa biaya database.

### Cara Menghubungkan ke Google Sheets:
1. Buat Google Spreadsheet baru (misal: "Data Pendaftar PPDB 2027").
2. Buka menu **Ekstensi > Apps Script**.
3. Tempelkan kode Google Apps Script berikut:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     var p = data.payload;
     sheet.appendRow([
       new Date(),
       p.registration_no || p.id,
       p.full_name || p.name,
       p.gender || '',
       p.nisn || '',
       p.phone || p.contact,
       p.previous_school || '',
       p.address || p.message
     ]);
     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Klik **Deploy > New Deployment** > Pilih jenis **Web app**.
   - **Execute as**: Me
   - **Who has access**: Anyone (agar formulir website bisa mengirim data tanpa login akun Google).
5. Salin URL Web App yang dihasilkan.
6. Buat file `.env` di repositori website sekolah Anda:
   ```env
   PUBLIC_BACKEND_PROVIDER=webhook
   PUBLIC_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## 3. Provider: `supabase` (PostgreSQL Cloud)
Solusi enterprise gratis dan aman menggunakan cloud PostgreSQL dengan Row Level Security (RLS).

### Langkah-langkah Setup:
1. Buat akun gratis di [Supabase.com](https://supabase.com) dan buat proyek baru.
2. Di dashboard Supabase, buka menu **SQL Editor**.
3. Buka file [`database/supabase.sql`](../database/supabase.sql) pada template ini, salin seluruh isinya, tempelkan ke SQL Editor Supabase, lalu jalankan (**Run**).
4. Skrip ini akan membuat tabel `registrations` dan `contact_messages` serta mengaktifkan kebijakan keamanan RLS:
   - Pengunjung publik (`anon`) hanya diizinkan melakukan `INSERT` (mengirim form baru).
   - Hanya pengguna terautentikasi (admin sekolah) yang diizinkan melakukan `SELECT` (melihat data).
5. Buka menu **Project Settings > API** di Supabase. Salin:
   - **Project URL**
   - **anon public API Key** (JANGAN gunakan `service_role` secret key).
6. Tambahkan ke file `.env` website:
   ```env
   PUBLIC_BACKEND_PROVIDER=supabase
   PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```

---

## 4. Provider: `mysql` (Database MySQL Mandiri)
Bagi sekolah yang memiliki server database MySQL/MariaDB sendiri atau menggunakan platform seperti PlanetScale atau TiDB Cloud.

### Langkah-langkah Setup:
1. Buka file [`database/mysql.sql`](../database/mysql.sql) dan jalankan pada server MySQL Anda.
2. Karena browser klien tidak dapat dan tidak boleh terhubung langsung ke port database MySQL via TCP (demi mencegah kebocoran password root), sediakan endpoint API perantara (misalnya via Cloudflare Worker, serverless function, atau script PHP/Node sederhana di server Anda).
3. Atur URL endpoint API tersebut pada file `.env`:
   ```env
   PUBLIC_BACKEND_PROVIDER=mysql
   PUBLIC_MYSQL_API_ENDPOINT=https://api.sekolahanda.sch.id/submit
   ```

