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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withSerwist(nextConfig)
