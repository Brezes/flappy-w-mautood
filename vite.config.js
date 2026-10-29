import { defineConfig } from 'vite';

export default defineConfig({
  base: '/flappy-w-mautood/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
