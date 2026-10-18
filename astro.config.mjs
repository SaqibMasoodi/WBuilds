import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://saqibmasoodi.github.io',
  base: '/WBuilds',
  devToolbar: {
    enabled: false
  },
  output: 'static',
  build: {
    format: 'directory'
  }
});
