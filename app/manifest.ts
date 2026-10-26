import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Kdompy Saing - Resume',
    short_name: 'Kdompy Saing',
    description: 'Personal resume of Kdompy Saing, Manager of Mobile Application Development.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#f39c12',
    icons: [
      // "any": circular avatar with transparent corners (desktop, fallbacks).
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      // "maskable": full-bleed opaque photo. Android crops it to the launcher's
      // icon shape, so the logo always fills the tile on the home screen.
      // Kept as separate entries — combining "any maskable" in one is discouraged.
      { src: '/icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
