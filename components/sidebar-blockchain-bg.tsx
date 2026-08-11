'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import {
  SiAndroid,
  SiApple,
  SiDocker,
  SiElasticsearch,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiKotlin,
  SiKubernetes,
} from 'react-icons/si'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hex: boolean
}

const LINK_DIST = 90

// small "programming" (mobile/dev) + "infrastructure" logos, scattered as a faint watermark
const icons = [
  { Icon: SiAndroid, top: '8%', left: '78%', size: 18, rotate: -8 },
  { Icon: SiKotlin, top: '20%', left: '12%', size: 20, rotate: 10 },
  { Icon: SiFlutter, top: '34%', left: '62%', size: 18, rotate: -6 },
  { Icon: SiApple, top: '48%', left: '20%', size: 17, rotate: 12 },
  { Icon: SiGit, top: '58%', left: '82%', size: 18, rotate: -10 },
  { Icon: SiDocker, top: '68%', left: '10%', size: 19, rotate: 6 },
  { Icon: SiKubernetes, top: '78%', left: '55%', size: 20, rotate: -4 },
  { Icon: SiFirebase, top: '88%', left: '26%', size: 17, rotate: 9 },
  { Icon: SiElasticsearch, top: '95%', left: '74%', size: 18, rotate: -12 },
]

export function SidebarBlockchainBackground() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)
  themeRef.current = resolvedTheme

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let nodes: Node[] = []
    let rafId = 0
    let lineColor = 'rgba(255,255,255,0.05)'
    let nodeColor = 'rgba(243,156,18,0.35)'

    function updateColors() {
      const isDark = themeRef.current !== 'light'
      lineColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(24,24,27,0.05)'
      nodeColor = isDark ? 'rgba(243,156,18,0.35)' : 'rgba(243,156,18,0.3)'
    }

    function drawHex(x: number, y: number, size: number) {
      if (!ctx) return
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6
        const px = x + size * Math.cos(a)
        const py = y + size * Math.sin(a)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }

    function resize() {
      if (!wrap || !canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = wrap.clientWidth
      h = wrap.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(14, Math.min(26, Math.round((w * h) / 9000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        r: Math.random() * 1.3 + 0.8,
        hex: Math.random() < 0.4,
      }))
    }

    function tick() {
      if (!ctx) return
      updateColors()
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = 1 - dist / LINK_DIST
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      for (const n of nodes) {
        ctx.strokeStyle = nodeColor
        ctx.fillStyle = nodeColor
        if (n.hex) {
          ctx.lineWidth = 1
          drawHex(n.x, n.y, n.r * 3)
        }
        else {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    updateColors()
    resize()
    tick()

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} aria-hidden className="h-full w-full" />
      {icons.map(({ Icon, top, left, size, rotate }, i) => (
        <Icon
          key={i}
          aria-hidden
          style={{ top, left, width: size, height: size, transform: `rotate(${rotate}deg)` }}
          className="absolute text-foreground/[0.07]"
        />
      ))}
    </div>
  )
}
