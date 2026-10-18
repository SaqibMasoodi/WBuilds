import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wbuilds.app',
  output: 'static',
  build: {
    format: 'directory'
  }
});
