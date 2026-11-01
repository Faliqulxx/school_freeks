# Panduan Deploy ke Cloudflare Pages ⚡

Cloudflare Pages adalah pilihan gratis terbaik untuk sekolah yang membutuhkan bandwidth tanpa batas, CDN tercepat di Indonesia, dan tanpa batasan non-komersial.

---

## 1. Spesifikasi Build Cloudflare Pages

| Parameter | Pengaturan |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |

---

## 2. Cara Deploy Cepat

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) dan navigasi ke menu **Workers & Pages**.
2. Klik tab **Pages** > **Connect to Git**.
3. Pilih akun GitHub dan repositori template sekolah Anda.
4. Pilih preset konfigurasi:
   - Pilih preset **Astro** dari dropdown.
   - Build command: `npm run build`
   - Output directory: `dist`
5. (Opsional) Di bagian **Environment variables (advanced)**, tambahkan variabel lingkungan jika menggunakan webhook/Supabase.
6. Klik **Save and Deploy**.

Cloudflare akan mengkompilasi website dan menyajikannya lewat edge server di seluruh dunia dengan domain gratis `*.pages.dev`.

