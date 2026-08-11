import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false, follow: false },
}

export default function OfflinePage() {
  return (
    <article className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="mb-3 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-widest text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        No connection
      </p>
      <h1 className="font-heading text-2xl font-semibold tracking-tight">You&apos;re offline</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        This page hasn&apos;t been saved for offline viewing yet. Reconnect and try again.
      </p>
    </article>
  )
}
