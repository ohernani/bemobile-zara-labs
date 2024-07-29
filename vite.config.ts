import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    coverage: {
      provider: 'v8',
      exclude: [
        'src/main.tsx',
        '.eslintrc.cjs',
        '.prettierrc.js',
        'vite.config.ts',
        'src/vite-env.d.ts',
      ],
    },
  },
});
