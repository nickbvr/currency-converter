import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import { PWAOptions } from './src/config/pwa'

export default defineConfig({
  plugins: [react(), VitePWA(PWAOptions)],
  base: '/currency-converter/',
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
