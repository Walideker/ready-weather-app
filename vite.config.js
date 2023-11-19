import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      '@fortawesome/fontawesome-svg-core',
      // Add other packages you want to exclude here
    ],
  },
});
