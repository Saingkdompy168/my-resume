# Kdompy Saing — Personal Resume

Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Other commands

- `npm run build` — production build
- `npm run start` — run the production build (run `build` first)
- `npm run lint` — lint the project

## Structure

- `app/` — pages (`/` About, `/resume` Resume), layout, metadata, sitemap/robots
- `components/` — Sidebar, nav tabs, theme toggle, animated network background
- `components/ui/` — shadcn/ui primitives (button, card, badge, accordion, avatar)
- `lib/data.ts` — resume content (bio, skills, education, achievements, work history)
- `public/images/` — profile photo and icons
