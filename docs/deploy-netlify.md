# Panduan Deploy ke Netlify 🌐

Netlify menyediakan hosting statis berkinerja tinggi dengan CDN global yang sangat cocok untuk website sekolah berbasis Astro SSG.

---

## 1. Spesifikasi Build Netlify

| Parameter | Pengaturan |
|---|---|
| **Base directory** | Kosongkan (default root) |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

---

## 2. Cara Deploy Cepat

1. Masuk ke [Netlify Dashboard](https://app.netlify.com/).
2. Klik **"Add new site"** > **"Import an existing project"**.
3. Pilih **GitHub** dan berikan izin ke repositori template sekolah Anda.
4. Pada form konfigurasi:
   - **Branch to deploy**: `main` (atau branch rilis Anda)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Jika menggunakan backend, buka **Site configuration > Environment variables** dan masukkan variabel (misal `PUBLIC_BACKEND_PROVIDER=supabase`).
6. Klik **"Deploy freeks-school-template"**.

Website akan aktif secara instan dengan subdomain gratis `*.netlify.app` dan sertifikat SSL otomatis.
