import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), glsl()],
    base: './', // Ensures relative paths for assets
    build: {
        outDir: 'dist', // Output directory for production build
        rollupOptions: {
            output: {
                manualChunks: undefined, // Optional: adjust chunking if needed
            },
        },
        chunkSizeWarningLimit: 2000, // Suppress chunk size warnings
    },
});
