import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works from any folder or GitHub Pages sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { cssCodeSplit: false, assetsInlineLimit: 0 },
  server: { port: 5613 },
});
