import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://freeks.id',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});

