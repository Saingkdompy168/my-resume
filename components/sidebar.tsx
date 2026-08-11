import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { SidebarBlockchainBackground } from '@/components/sidebar-blockchain-bg'

const contacts = [
  {
    label: 'X',
    value: 'Saing Kdompy',
    href: 'https://twitter.com/saingkdompy',
    icon: Twitter,
  },
  {
    label: 'Telegram',
    value: 'Kdompy Saing',
    href: 'https://t.me/kdompy_saing',
    icon: Send,
  },
  {
    label: 'LinkedIn',
    value: 'Kdompy Saing',
    href: 'https://www.linkedin.com/in/kdompy-saing-637580140/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'Saingkdompy168',
    href: 'https://github.com/Saingkdompy168',
    icon: Github,
  },
]

export function Sidebar() {
  return (
    <aside className="relative border-border bg-background md:sticky md:top-0 md:h-screen md:w-[280px] md:shrink-0 md:overflow-y-auto md:border-r">
      <SidebarBlockchainBackground />
      <div className="relative flex flex-col gap-7 p-6">
        <div>
          <Avatar className="mb-3 h-[76px] w-[76px] shadow-[0_0_0_3px_hsl(var(--background)),0_0_0_4px_hsl(var(--border))]">
            <AvatarImage src="/images/kdompy-saing.png" alt="Kdompy Saing" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>

          <p className="font-heading text-lg font-semibold tracking-tight">Kdompy Saing</p>
          <p className="mt-1 text-sm text-muted-foreground">Manager, Mobile Application Development</p>

          <Link
            href="https://www.linkedin.com/in/kdompy-saing-637580140/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-max items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green-500" />
            Open to opportunities
          </Link>
        </div>

        <nav className="hidden flex-col gap-1 md:flex">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-1.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                  {label}
                </span>
                <span className="truncate">{value}</span>
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-2.5 rounded-lg px-1.5 py-2 text-sm text-muted-foreground">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                Location
              </span>
              <span>Phnom Penh</span>
            </span>
          </div>
        </nav>

        <div className="mt-auto hidden items-center justify-between border-t border-border pt-4 md:flex">
          <Link
            href="mailto:saingkdompy@email.com"
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
