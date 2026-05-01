import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Use whatever minifier Vite ships with by default
    // (esbuild on Vite ≤7, oxc on Vite 8). Avoids package-not-found errors
    // when the installed Vite version doesn't bundle the named minifier.
    rollupOptions: {
      output: {
        // Function-form manualChunks works with both Rollup (Vite 7) and Rolldown (Vite 8).
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react';
            if (id.includes('lucide-react')) return 'icons';
          }
        },
      },
    },
  },
});
