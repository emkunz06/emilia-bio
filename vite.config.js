import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/emilia-bio/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
});
