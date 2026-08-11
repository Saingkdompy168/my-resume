import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kdompy Saing - Manager, Mobile Application Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 12% 8%, rgba(243,156,18,0.28), transparent 45%), radial-gradient(circle at 92% 88%, rgba(243,156,18,0.18), transparent 45%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#f39c12',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: '#f39c12', display: 'flex' }} />
          Manager, Mobile Application Development
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 700,
            color: '#f6f6f7',
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Kdompy Saing
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 30,
            color: '#a8a8b0',
            maxWidth: 900,
          }}
        >
          10+ years building mobile products that ship.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 56,
            gap: 48,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {[
            ['10+', 'Years Experience'],
            ['5', 'Companies'],
            ['15+', 'Projects Delivered'],
          ].map(([num, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, color: '#f6f6f7' }}>{num}</div>
              <div style={{ display: 'flex', fontSize: 20, color: '#77777f', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
