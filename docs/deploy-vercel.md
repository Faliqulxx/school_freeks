# Panduan Deploy ke Vercel 🚀

Panduan ini menjelaskan cara mempublikasikan website sekolah ini ke platform **Vercel** dengan konfigurasi nol (*zero-config*) untuk Static Site Generation (SSG).

---

## 1. Spesifikasi Proyek di Vercel

Saat melakukan impor proyek di dashboard Vercel, pastikan pengaturan berikut terisi secara otomatis atau disesuaikan:

| Parameter | Pengaturan |
|---|---|
| **Framework Preset** | `Astro` |
| **Root Directory** | `./` (akar repositori) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | `18.x` atau `20.x` |

> Proyek ini menggunakan arsitektur SSG murni bawaan Astro v5. **Tidak diperlukan file `vercel.json` tambahan** untuk deployment statis dasar.

---

## 2. Langkah-Langkah Deployment

### Langkah A: Melalui Dashboard Vercel (Rekomendasi)
1. Buka dashboard [Vercel](https://vercel.com/) dan masuk menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari dan pilih repositori website sekolah Anda, lalu klik **"Import"**.
4. Di bagian **Build and Output Settings**, pastikan Preset terpilih sebagai **Astro**.
5. Jika Anda menggunakan backend eksternal (Supabase atau Webhook), buka bagian **Environment Variables** dan tambahkan variabel yang dibutuhkan (lihat bagian 3 di bawah).
6. Klik **"Deploy"**.
7. Tunggu sekitar 1–2 menit hingga proses build selesai. Website Anda langsung tayang dengan domain gratis `*.vercel.app`.

---

## 3. Konfigurasi Variabel Lingkungan (Environment Variables)

Buka menu **Settings > Environment Variables** di dashboard proyek Vercel Anda:

### Mode Demo / Staging (Pencegahan Indexing Mesin Pencari)
Jika Anda mempublikasikan website ini hanya sebagai pratinjau demo publik dan tidak ingin diindeks oleh Google:
```env
PUBLIC_DEMO_MODE=true
```
*(Ini akan secara otomatis menyisipkan tag `<meta name="robots" content="noindex, nofollow">` pada seluruh halaman).*

### Mode Backend Supabase (Opsional)
```env
PUBLIC_BACKEND_PROVIDER=supabase
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

### Mode Backend Webhook (Opsional)
```env
PUBLIC_BACKEND_PROVIDER=webhook
PUBLIC_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

---

## 4. Perilaku Panel Admin pada Vercel

Panel admin di `/admin` berjalan secara *client-side* murni:
- Semua perubahan pengaturan, konten, dan pesan di lingkungan demo hanya tersimpan di peramban (`localStorage`) masing-masing pengunjung.
- Data yang diubah oleh satu pengunjung tidak akan mengubah website pengunjung lain.
- Untuk memperbarui konten permanen di website live, gunakan tombol **"Unduh JSON"** di panel admin, letakkan hasilnya di folder `src/data/` lokal Anda, lalu lakukan `git push` ke repositori GitHub. Vercel akan otomatis melakukan build ulang dengan data terbaru.

---

## 5. Catatan Ketentuan Vercel Hobby (Penggunaan Komersial vs Non-Komersial)

Sesuai Syarat Layanan Vercel, paket **Vercel Hobby (Gratis)** diperuntukkan bagi proyek personal dan non-komersial. Jika sekolah atau yayasan Anda memungut biaya pendaftaran operasional (PPDB berbayar atau SPP), disarankan menggunakan:
- **Cloudflare Pages** (gratis tanpa batasan komersial) — lihat [Panduan Cloudflare Pages](deploy-cloudflare-pages.md).
- **Netlify** — lihat [Panduan Netlify](deploy-netlify.md).
- Meng-upgrade ke paket **Vercel Pro**.

