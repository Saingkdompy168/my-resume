import type { Metadata } from 'next'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'
import { jobs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Work experience of Kdompy Saing — Manager, Mobile Application Development at Woori Bank, with prior roles at SBI Ly Hour Bank, Sathapana Bank, Pathmazing, and Codeura.',
}

export default function ResumePage() {
  return (
    <article className="space-y-6">
      <header>
        <h1 className="font-heading text-2xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-1 text-sm text-muted-foreground">Work experience, most recent first. Click a role to expand.</p>
      </header>

      <Accordion type="single" collapsible defaultValue={jobs[0]?.title} className="space-y-3">
        {jobs.map((job, i) => (
          <Reveal key={job.title} delay={i * 60}>
            <AccordionItem value={job.title}>
              <AccordionTrigger>
                <div className="text-left">
                  <h3 className="text-sm font-semibold">{job.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{job.company}</p>
                </div>
                <span className="ml-auto shrink-0 text-xs text-muted-foreground/70">{job.period}</span>
              </AccordionTrigger>
              <AccordionContent>{job.description}</AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </article>
  )
}
