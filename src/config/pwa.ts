import type { VitePWAOptions } from 'vite-plugin-pwa'

export const PWAOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: [
    'icon-192x192.png',
    'icon-256x256.png',
    'icon-384x384.png',
    'icon-512x512.png',
  ],
  manifest: {
    theme_color: '#121212',
    background_color: '#121212',
    display: 'standalone',
    scope: '/',
    start_url: 'currency-converter/',
    name: 'Currency Converter',
    short_name: 'Currency Converter',
    icons: [
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
}
