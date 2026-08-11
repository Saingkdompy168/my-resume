'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: number
  suffix?: string
  label: string
}

export function StatCounter({ target, suffix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)
  const [finished, setFinished] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const duration = 900
          const start = performance.now()

          const step = (now: number) => {
            const progress = Math.min(1, (now - start) / duration)
            const eased = 1 - (1 - progress) ** 3
            setValue(Math.round(eased * target))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
            else {
              setFinished(true)
            }
          }

          requestAnimationFrame(step)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <div ref={ref} className="mr-9 border-r border-border pr-9 last:mr-0 last:border-r-0 last:pr-0">
      <span className="block font-heading text-2xl font-bold tracking-tight sm:text-[30px]">
        {value}
        {finished ? suffix : ''}
      </span>
      <span className="mt-1 block text-xs text-muted-foreground/70">{label}</span>
    </div>
  )
}
