# Panduan Deploy ke GitHub Pages 🐙

GitHub Pages memungkinkan Anda menghosting website sekolah secara gratis langsung dari repositori GitHub.

> [!NOTE]
> **Khusus Mode Tanpa Backend (`none`):**
> GitHub Pages adalah layanan hosting file statis murni tanpa server-side function runtime. Sangat cocok digunakan bersamaan dengan mode default template ini (`PUBLIC_BACKEND_PROVIDER=none`), di mana form PPDB dan kontak berjalan di sisi peramban dan diteruskan langsung ke WhatsApp.

---

## Langkah-Langkah Deployment via GitHub Actions

1. Buka repositori Anda di GitHub.
2. Masuk ke tab **Settings** > menu **Pages** di bilah sisi kiri.
3. Di bagian **Build and deployment > Source**, pilih opsi **GitHub Actions**.
4. Di dalam proyek Anda, buat file alur kerja baru di `.github/workflows/deploy-pages.yml` dengan isi berikut:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build with Astro
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Lakukan commit dan push file tersebut ke branch `main`.
6. GitHub Actions akan otomatis melakukan build dan website sekolah Anda akan tayang di `https://USERNAME.github.io/REPO/`.
