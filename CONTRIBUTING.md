# Panduan Berkontribusi (Contributing Guide) 🤝

Terima kasih atas minat Anda untuk berkontribusi pada pengembangan template website sekolah open-source ini! Kami menyambut segala bentuk kontribusi: perbaikan bug, penyempurnaan dokumentasi, penambahan fitur aksesibilitas, hingga optimasi performa.

---

## Alur Kerja Pengembangan

### 1. Melakukan Fork & Kloning
```bash
# Fork repositori ini melalui antarmuka GitHub, lalu kloning ke komputer lokal Anda
git clone https://github.com/USERNAME/freeks-school-template.git
cd freeks-school-template
```

### 2. Memasang Dependensi & Menjalankan Lokal
```bash
npm install
npm run dev
```
Buka `http://localhost:4321` di browser Anda.

### 3. Membuat Branch Baru
Gunakan nama branch yang deskriptif:
```bash
# Contoh perbaikan bug
git checkout -b fix/mobile-navbar-overflow

# Contoh fitur baru
git checkout -b feat/export-excel-admin
```

### 4. Aturan Commit Git
Gunakan konvensi [Conventional Commits](https://www.conventionalcommits.org/):
- `feat: ...` untuk fitur baru
- `fix: ...` untuk perbaikan bug
- `docs: ...` untuk pembaruan dokumentasi
- `chore: ...` untuk pemeliharaan rutin atau konfigurasi build

### 5. Memverifikasi Build Sebelum Mengajukan PR
Pastikan proses build statis berhasil tanpa peringatan maupun error:
```bash
npm run build
```

### 6. Mengajukan Pull Request (PR)
- Dorong branch Anda ke fork GitHub Anda: `git push origin branch-anda`.
- Buat Pull Request ke branch `main` repositori upstream.
- Jelaskan perubahan yang Anda buat, mengapa perubahan itu diperlukan, dan sertakan tangkapan layar jika menyangkut tampilan UI.
