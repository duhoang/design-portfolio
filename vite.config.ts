import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (duhoang.com) serves from the root.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
