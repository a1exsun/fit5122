import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  test: {
    environment: 'jsdom',
    environmentOptions: { jsdom: { url: 'https://fit5122.test/' } },
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
