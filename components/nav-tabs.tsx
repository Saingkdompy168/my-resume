'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const tabs = [
  { href: '/', label: 'About' },
  { href: '/resume', label: 'Resume' },
]

export function NavTabs() {
  const pathname = usePathname()

  return (
    <nav className="mb-8 inline-flex gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
      {tabs.map((tab) => {
        const active = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
              active
                ? 'bg-brand text-brand-contrast'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
            )}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}
