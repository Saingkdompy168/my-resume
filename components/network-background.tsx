'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hex: boolean
}

const LINK_DIST = 150

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)
  themeRef.current = resolvedTheme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let nodes: Node[] = []
    let rafId = 0

    let bgFill = '#0a0a0a'
    let lineColor = 'rgba(255,255,255,0.06)'
    let nodeColor = 'rgba(243,156,18,0.5)'
    let coreColor = 'rgba(243,156,18,0.10)'

    function updateColors() {
      const isDark = themeRef.current !== 'light'
      bgFill = isDark ? '#0a0a0a' : '#fafafa'
      lineColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(24,24,27,0.05)'
      nodeColor = isDark ? 'rgba(243,156,18,0.5)' : 'rgba(243,156,18,0.4)'
      coreColor = isDark ? 'rgba(243,156,18,0.10)' : 'rgba(243,156,18,0.08)'
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
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(24, Math.min(55, Math.round((w * h) / 38000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 1,
        hex: Math.random() < 0.16,
      }))
    }

    function tick() {
      if (!ctx) return
      updateColors()
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = bgFill
      ctx.fillRect(0, 0, w, h)

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
        if (n.hex) {
          ctx.strokeStyle = nodeColor
          ctx.lineWidth = 1
          drawHex(n.x, n.y, n.r * 3.2)
        }
        else {
          ctx.fillStyle = coreColor
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 2.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = nodeColor
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    updateColors()
    resize()
    window.addEventListener('resize', resize)
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-20 h-full w-full pointer-events-none"
    />
  )
}
