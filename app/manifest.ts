import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kdompy Saing - Resume',
    short_name: 'Kdompy Saing',
    description: 'Personal resume of Kdompy Saing, Manager of Mobile Application Development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#f39c12',
    icons: [
      { src: '/images/icon48x48.png', sizes: '48x48', type: 'image/png' },
      { src: '/images/icon72x72.png', sizes: '72x72', type: 'image/png' },
      { src: '/images/icon96x96.png', sizes: '96x96', type: 'image/png' },
      { src: '/images/icon144x144.png', sizes: '144x144', type: 'image/png' },
      { src: '/images/icon192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/images/icon512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
