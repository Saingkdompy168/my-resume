import type { Metadata } from 'next'

import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { StatCounter } from '@/components/stat-counter'
import { achievements, bio, education, skills, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'Kdompy Saing — Manager, Mobile Application Development. Over 10 years building mobile applications and system development. See skills, education, and achievements.',
}

export default function AboutPage() {
  return (
    <article className="space-y-10">
      <Reveal className="mb-2">
        <p className="mb-3.5 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-widest text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Manager, Mobile Application Development
        </p>
        <h1 className="max-w-xl font-heading text-[26px] font-semibold leading-tight tracking-tight sm:text-[34px]">
          <span className="bg-gradient-to-r from-brand via-amber-300 to-brand bg-clip-text text-transparent">
            10+ years
          </span>{' '}
          building mobile products that ship.
        </h1>
        <p className="mt-3.5 max-w-lg text-sm leading-relaxed text-muted-foreground">{bio}</p>

        <div className="mt-7 flex border-t border-border pt-6">
          {stats.map(stat => (
            <StatCounter key={stat.label} target={stat.target} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Skills</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.title} className="transition-transform hover:-translate-y-0.5 hover:border-brand">
              <CardContent className="flex items-start gap-3 pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary font-heading text-sm font-bold">
                  {skill.icon}
                </span>
                <div>
                  <h4 className="text-sm font-semibold">{skill.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Education</h3>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {education.map((item) => (
            <li key={item.degree} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-brand ring-4 ring-brand-soft" />
              <h4 className="text-sm font-semibold">{item.degree}</h4>
              <p className="mt-0.5 text-xs font-medium text-brand">
                {item.school} · {item.period}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Achievement Projects</h3>
        <Card>
          <CardContent className="columns-1 gap-8 pt-5 text-sm leading-loose text-muted-foreground sm:columns-2">
            {achievements.map(item => (
              <div key={item} className="break-inside-avoid">{item}</div>
            ))}
          </CardContent>
        </Card>
      </Reveal>
    </article>
  )
}
