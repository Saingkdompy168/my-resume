import { spawnSync } from 'node:child_process'
import withSerwistInit from '@serwist/next'

// A revision helps Serwist version the precached "offline" page so stale
// caches don't get served after a deploy. Falls back to a random id if git
// isn't available in the build environment.
const revision
  = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf-8' }).stdout?.trim() || crypto.randomUUID()

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  cacheOnNavigation: true,
  additionalPrecacheEntries: [{ url: '/~offline', revision }],
  disable: process.env.NODE_ENV === 'development',
})

// NOTE on 'unsafe-inline':
// - script-src needs it because next-themes injects a small inline <script>
//   (to set the dark/light class before paint and avoid a flash of the
//   wrong theme) that has no external src to allowlist.
// - style-src needs it because Radix UI (used by the Accordion/Avatar
//   components) sets inline `style` on elements at runtime for its
//   animations (e.g. the resume accordion's open/close height).
// A stricter, nonce-based CSP is possible via Next.js middleware, but it
// forces every page into dynamic (per-request) rendering instead of static
// generation — not a good trade for a small static resume site. Everything
// else below (frame-ancestors, object-src, base-uri, form-action, and
// restricting all other resource types to same-origin) is fully strict.
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim()

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), interest-cohort=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default withSerwist(nextConfig)
